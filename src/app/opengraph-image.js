import { ImageResponse } from 'next/og';

export const alt = 'Zaxcode — web development, SaaS, ERP, and digital products';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ alignItems: 'center', background: '#070b17', color: '#ffffff', display: 'flex', height: '100%', justifyContent: 'center', padding: '72px', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '980px' }}>
        <div style={{ color: '#7aa2ff', display: 'flex', fontSize: 30, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>Zaxcode</div>
        <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.08, marginTop: 34 }}>Useful software, built for growth.</div>
        <div style={{ color: '#b9c2d7', display: 'flex', fontSize: 30, lineHeight: 1.45, marginTop: 36 }}>Websites · SaaS products · ERP systems · Automation</div>
      </div>
    </div>,
    size,
  );
}
