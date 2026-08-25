import { ImageResponse } from 'next/og';

export const alt = 'Global Systems Studio — ROS™, the Relocation Operating System';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #123A63 0%, #1E5B99 55%, #17456F 100%)',
          padding: '68px 76px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div style={{ width: '52px', height: '5px', background: '#C8A832' }} />
          <div
            style={{
              fontSize: '25px',
              fontWeight: 700,
              letterSpacing: '0.19em',
              color: '#C8A832',
            }}
          >
            GLOBAL SYSTEMS STUDIO
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: '86px',
              fontWeight: 700,
              lineHeight: 1.06,
              color: '#FFFFFF',
              letterSpacing: '-0.022em',
            }}
          >
            ROS™ — The Relocation
          </div>
          <div
            style={{
              fontSize: '86px',
              fontWeight: 700,
              lineHeight: 1.06,
              color: '#FFFFFF',
              letterSpacing: '-0.022em',
            }}
          >
            Operating System
          </div>
          <div
            style={{
              marginTop: '30px',
              fontSize: '31px',
              lineHeight: 1.45,
              color: 'rgba(255,255,255,0.82)',
              maxWidth: '880px',
            }}
          >
            The step-by-step infrastructure for U.S. persons relocating internationally.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.22)',
            paddingTop: '26px',
          }}
        >
          <div style={{ fontSize: '27px', fontWeight: 700, color: '#C8A832' }}>
            Not inspiration. Infrastructure.
          </div>
          <div style={{ fontSize: '24px', color: 'rgba(255,255,255,0.62)' }}>
            globalsystemsstudio.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
