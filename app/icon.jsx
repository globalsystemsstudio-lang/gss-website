import { ImageResponse } from 'next/og';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

/**
 * Brand mark: three stacked bars — the "system / infrastructure" idea, and the
 * only shape that still reads at 16px. Text monograms turn to mud at that size.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '46px',
          background: '#1E5B99',
        }}
      >
        <div style={{ width: '300px', height: '52px', background: '#FFFFFF', borderRadius: '6px' }} />
        <div style={{ width: '300px', height: '52px', background: '#C8A832', borderRadius: '6px' }} />
        <div style={{ width: '170px', height: '52px', background: '#FFFFFF', borderRadius: '6px' }} />
      </div>
    ),
    { ...size }
  );
}
