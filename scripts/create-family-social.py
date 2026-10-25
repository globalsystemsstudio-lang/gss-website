"""Render original GSS text-led social assets with the approved brand palette."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/campaigns/family'
OUT.mkdir(parents=True, exist_ok=True)
BLUE, GOLD, IVORY = '#1E5B99', '#C8A832', '#F8F5ED'
FONT = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
BOLD = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
SERIF = '/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf'

def lines(text, font, width, draw):
    result, line = [], ''
    for word in text.split():
        trial = (line + ' ' + word).strip()
        if draw.textlength(trial, font=font) > width and line:
            result.append(line)
            line = word
        else:
            line = trial
    if line:
        result.append(line)
    return result

def card(title, body, idx, total, video=False):
    w, h = (1080,1920) if video else (1080,1350)
    im = Image.new('RGB', (w,h), IVORY)
    d = ImageDraw.Draw(im)
    d.rectangle((0,0,w,24), fill=GOLD)
    d.text((90,145 if video else 90), 'GLOBAL SYSTEMS STUDIO', font=ImageFont.truetype(BOLD,27), fill=BLUE)
    d.line((90,220 if video else 165,990,220 if video else 165), fill=GOLD,width=3)
    y = 315 if video else 235
    d.text((90,y), 'FAMILY RELOCATION / ROS™', font=ImageFont.truetype(BOLD,25),fill=BLUE)
    y += 90 if video else 65
    font = ImageFont.truetype(SERIF,73 if video else 64)
    for line in lines(title,font,870,d):
        d.text((86,y),line,font=font,fill=BLUE)
        y += 96 if video else 83
    y += 55 if video else 32
    font=ImageFont.truetype(FONT,43 if video else 36)
    for line in lines(body,font,850,d):
        d.text((90,y),line,font=font,fill=BLUE)
        y += 64 if video else 54
    assert y < (1490 if video else 1090), (title,y)
    bottom=1510 if video else 1120
    d.rounded_rectangle((80,bottom,990,bottom+110),radius=12,fill=BLUE)
    d.text((115,bottom+33),'globalsystemsstudio.com',font=ImageFont.truetype(BOLD,37),fill=IVORY)
    d.text((90,bottom+150),'FAMILY EDITION',font=ImageFont.truetype(BOLD,24),fill=BLUE)
    d.text((885,bottom+150),f'{idx:02}/{total:02}',font=ImageFont.truetype(FONT,24),fill=BLUE)
    return im

videos = [
 [('Same country. Different family move.','Your household needs its own planning questions.'),
  ('Who is moving with you?','School-age children? A dependent parent? Two adults with different work plans?'),
  ('Connect the decisions.','Income, healthcare, schools and timing can affect each other.'),
  ('Plan around your household.','ROS™ Family Edition includes family research resources and a planning timeline.'),
  ('One shared planning system.','$1,197 USD one time. Nine months of dashboard access. Two users.'),
  ('Start with a conversation.','Free 15-minute Discovery Call. Visit our website → Family → Book a call.')],
 [('Your school shortlist can change your housing shortlist.','Family relocation decisions connect.'),
  ('Start with school research.','Gather admissions, timing and fee information directly.'),
  ('Then consider location.','Neighborhood options affect daily travel and household routines.'),
  ('Connect budget and timing.','List the answers you need before making commitments.'),
  ('Organize the research.','Family Edition: $1,197 USD one time. Nine months. Two dashboard users.'),
  ('Explore fit, without pressure.','Free 15-minute Discovery Call. Website → Family → Book a call.')],
 [('Are you planning the same move?','You can agree on a country and have different expectations.'),
  ('Three must-haves.','Each adult writes down what needs to stay stable.'),
  ('Three open questions.','What could change your destination, budget or timeline?'),
  ('One concern.','Compare your answers before adding more tasks.'),
  ('Plan together with ROS™.','Family Edition: $1,197 USD one time. Nine months. Two dashboard users.'),
  ('Bring your questions.','Free 15-minute Discovery Call. Website → Family → Book a call.')]
]
carousel = [
 ('Five questions before your family moves abroad.','Start a shared planning conversation.'),
 ('What must remain stable?','Consider income, healthcare, schooling and caregiving needs.'),
 ('Whose needs could change the destination?','Give each household member’s requirements a place in the research.'),
 ('Which decisions depend on another answer?','Connect school research, neighborhood options, budget and timing.'),
 ('What needs professional confirmation?','Take destination-specific legal, tax and financial questions to qualified professionals.'),
 ('What are we assuming we agree on?','Compare must-haves, open questions and concerns.'),
 ('Plan your next step together.','ROS™ Family Edition. $1,197 USD one time. Nine months. Two users. Free Discovery Call on our website.')
]
for i,(title,body) in enumerate(carousel,1):
    card(title,body,i,len(carousel)).save(OUT/f'carousel-{i}.jpg',quality=95)
with tempfile.TemporaryDirectory() as folder:
    tmp=Path(folder)
    for v, scenes in enumerate(videos,1):
        parts=[]
        for i,(title,body) in enumerate(scenes,1):
            p=tmp/f'v{v}-{i}.png'
            card(title,body,i,len(scenes),True).save(p)
            parts.extend([f"file '{p}'",'duration 5'])
        parts.append(f"file '{p}'")
        listing=tmp/f'video-{v}.txt'
        listing.write_text('\n'.join(parts))
        subprocess.run(['ffmpeg','-y','-loglevel','error','-f','concat','-safe','0','-i',str(listing),'-f','lavfi','-i','anullsrc=r=48000:cl=stereo','-t','30','-vf','fps=24,format=yuv420p','-c:v','libx264','-preset','fast','-crf','22','-c:a','aac','-b:a','96k','-movflags','+faststart',str(OUT/f'video-{v}.mp4')],check=True)
        print(f'Created video-{v}.mp4',flush=True)
print('Created 7 carousel images',flush=True)
