'use client';
import type { Tab } from '@/app/page';
import { TabBarPlain } from '@/app/page';

interface Props {
  onOpenPostVisit: (restaurantId: string) => void;
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function BookingsScreen({ onOpenPostVisit, activeTab, onTabChange }: Props) {
  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', background: '#fff' }}>
      <div style={{ paddingTop: 'env(safe-area-inset-top, 12px)' }} />

      <div style={{ padding: '12px 20px 16px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>My Bookings</h1>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px', paddingBottom: '84px' }}>
        <p style={{ fontSize: '13px', fontWeight: 600, color: '#737373', marginBottom: '10px', fontFamily: 'Poppins, system-ui', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Upcoming</p>

        <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid rgba(28,29,40,0.1)', overflow: 'hidden', marginBottom: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <div style={{ height: '90px', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'flex-end', padding: '10px 14px' }}>
            <img src="/images/the-spot.jpg" alt="The Spot" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)' }} />
            <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '6px', padding: '3px 10px', position: 'relative', zIndex: 1 }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#fff', fontFamily: 'Poppins, system-ui' }}>Menu Upgrade</span>
            </div>
          </div>

          <div style={{ padding: '14px 14px 0' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0a0a0a', marginBottom: '3px', fontFamily: 'Poppins, system-ui' }}>The Spot</h3>
            <p style={{ fontSize: '13px', color: '#737373', marginBottom: '3px', fontFamily: 'Poppins, system-ui' }}>Today, 18:00–22:00</p>
            <p style={{ fontSize: '13px', color: '#737373', marginBottom: '12px', fontFamily: 'Poppins, system-ui' }}>Mitte · 0.8 km</p>

            {/* Insider signal — Idea 5 */}
            <div style={{ background: '#f5f5f5', borderRadius: '8px', padding: '9px 12px', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '14px' }}>⏰</span>
              <span style={{ fontSize: '12px', color: '#737373', fontFamily: 'Poppins, system-ui', lineHeight: 1.4 }}>
                Most popular: Friday evenings — you're right on time.
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', borderTop: '1px solid rgba(28,29,40,0.08)' }}>
            {['📍 Location', '↗ Share', '✕ Cancel'].map((label, i) => (
              <button key={label} style={{ flex: 1, padding: '12px 4px', background: 'none', border: 'none', borderRight: i < 2 ? '1px solid rgba(28,29,40,0.08)' : 'none', cursor: 'pointer', fontSize: '12px', fontWeight: 600, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>
                {label}
              </button>
            ))}
          </div>
        </div>

        <p style={{ fontSize: '13px', fontWeight: 600, color: '#737373', marginBottom: '10px', fontFamily: 'Poppins, system-ui', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Completed</p>

        <div style={{ background: '#bafad4', borderRadius: '14px', padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <span style={{ fontSize: '28px' }}>⭐</span>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '15px', fontWeight: 700, color: '#08180f', fontFamily: 'Poppins, system-ui' }}>How was your visit?</p>
            <p style={{ fontSize: '13px', color: 'rgba(8,24,15,0.65)', fontFamily: 'Poppins, system-ui', marginTop: '4px' }}>Rate your last visit to The Spot.</p>
          </div>
          <button
            onClick={() => onOpenPostVisit('the-spot')}
            style={{ background: '#11301d', color: '#53f293', border: 'none', borderRadius: '10px', padding: '12px 28px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'Poppins, system-ui', transition: 'transform 100ms' }}
            onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
            onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Rate now
          </button>
        </div>
      </div>

      <TabBarPlain activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}
