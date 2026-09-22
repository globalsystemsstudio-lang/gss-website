#Requires -Version 5.1
<#
.SYNOPSIS
    Lists inputs that have no review yet, and reviews that have gone stale.

.DESCRIPTION
    Read-only. This script inspects gss-review-loop/input and gss-review-loop/reviews and
    reports on the pairing between them. It never creates, edits, moves, or deletes a file --
    including the review files it reports on. Run it as often as you like.

    Pairing convention:
        input/ros-definition-page.md  ->  reviews/ros-definition-page.review.md

    An input is PENDING if no matching review exists.
    A review is STALE if the input has been modified since the review was written.

.PARAMETER Root
    The gss-review-loop directory. Defaults to the folder containing this script.

.PARAMETER All
    Also list inputs that are reviewed and current. By default only pending and stale are shown.

.PARAMETER PassThru
    Emit result objects to the pipeline instead of formatted text, for scripting.

.EXAMPLE
    .\pending.ps1
    Show what still needs a review.

.EXAMPLE
    .\pending.ps1 -All
    Show every input and its review status.

.EXAMPLE
    .\pending.ps1 -PassThru | Where-Object Status -eq 'PENDING'
    Get pending inputs as objects.
#>

[CmdletBinding()]
param(
    [string] $Root = $PSScriptRoot,
    [switch] $All,
    [switch] $PassThru
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

if ([string]::IsNullOrWhiteSpace($Root)) { $Root = (Get-Location).Path }

$inputDir  = Join-Path $Root 'input'
$reviewDir = Join-Path $Root 'reviews'

if (-not (Test-Path -LiteralPath $inputDir)) {
    Write-Error "No input directory found at '$inputDir'. Run this from inside gss-review-loop, or pass -Root."
    return
}

$reviewDirExists = Test-Path -LiteralPath $reviewDir
if (-not $reviewDirExists) {
    Write-Warning "No reviews directory at '$reviewDir' -- treating every input as pending. (Not creating it; this script is read-only.)"
}

# Ignore housekeeping files, not content.
$ignored = @('.gitkeep', '.gitignore', 'README.md', '.DS_Store', 'Thumbs.db')

$inputs = @(
    Get-ChildItem -LiteralPath $inputDir -File -Recurse |
        Where-Object { $ignored -notcontains $_.Name -and -not $_.Name.StartsWith('.') } |
        Sort-Object Name
)

$results = foreach ($item in $inputs) {

    $base       = [System.IO.Path]::GetFileNameWithoutExtension($item.Name)
    $reviewName = "$base.review.md"
    $reviewPath = Join-Path $reviewDir $reviewName
    $review     = if ($reviewDirExists -and (Test-Path -LiteralPath $reviewPath)) {
                      Get-Item -LiteralPath $reviewPath
                  } else { $null }

    if ($null -eq $review) {
        $status = 'PENDING'
        $note   = "no $reviewName"
    }
    elseif ($item.LastWriteTime -gt $review.LastWriteTime) {
        $days   = [math]::Round(($item.LastWriteTime - $review.LastWriteTime).TotalDays, 1)
        $status = 'STALE'
        $note   = "input changed $days day(s) after the review"
    }
    else {
        $status = 'REVIEWED'
        $note   = "reviewed $($review.LastWriteTime.ToString('yyyy-MM-dd'))"
    }

    [pscustomobject]@{
        Status   = $status
        Input    = $item.Name
        Review   = $reviewName
        Modified = $item.LastWriteTime.ToString('yyyy-MM-dd')
        Note     = $note
        FullName = $item.FullName
    }
}

$results = @($results)

if ($PassThru) { return $results }

# --- formatted output ---

$pending  = @($results | Where-Object { $_.Status -eq 'PENDING'  })
$stale    = @($results | Where-Object { $_.Status -eq 'STALE'    })
$reviewed = @($results | Where-Object { $_.Status -eq 'REVIEWED' })

Write-Host ''
Write-Host 'GSS Review Loop -- pending' -ForegroundColor Cyan
Write-Host ('=' * 42) -ForegroundColor Cyan

if ($results.Count -eq 0) {
    Write-Host ''
    Write-Host '  input/ is empty. Nothing to review.' -ForegroundColor DarkGray
    Write-Host ''
    return
}

if ($pending.Count -gt 0) {
    Write-Host ''
    Write-Host "  PENDING ($($pending.Count))" -ForegroundColor Yellow
    foreach ($p in $pending) {
        Write-Host ('    {0,-45} {1}' -f $p.Input, $p.Note) -ForegroundColor Yellow
    }
}

if ($stale.Count -gt 0) {
    Write-Host ''
    Write-Host "  STALE ($($stale.Count)) -- review predates the current input" -ForegroundColor Magenta
    foreach ($s in $stale) {
        Write-Host ('    {0,-45} {1}' -f $s.Input, $s.Note) -ForegroundColor Magenta
    }
}

if ($All -and $reviewed.Count -gt 0) {
    Write-Host ''
    Write-Host "  REVIEWED ($($reviewed.Count))" -ForegroundColor Green
    foreach ($r in $reviewed) {
        Write-Host ('    {0,-45} {1}' -f $r.Input, $r.Note) -ForegroundColor Green
    }
}

Write-Host ''
Write-Host ('  {0} input(s): {1} pending, {2} stale, {3} current.' -f `
    $results.Count, $pending.Count, $stale.Count, $reviewed.Count) -ForegroundColor DarkGray

if (-not $All -and $reviewed.Count -gt 0) {
    Write-Host '  (-All to list the current ones too.)' -ForegroundColor DarkGray
}
Write-Host ''
