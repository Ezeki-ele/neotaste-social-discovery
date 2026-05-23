'use client';
import type { Tab } from '@/app/page';
import { TabBarPlain } from '@/app/page';

interface Props {
  onOpenPostVisit: (restaurantId: string) => void;
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const upcomingBookings = [
  {
    id: 'b1',
    restaurantId: 'the-spot',
    restaurantName: 'The Spot',
    deal: 'Menu Upgrade',
    time: 'Heute, 18:00–22:00',
    district: 'Mitte · 0,8 km',
    gradientFrom: '#1e1b4b',
    gradientTo: '#0f0a2e',
    insiderSignal: {
      type: 'community' as const,
      text: '⏰ Am beliebtesten: Freitagabend — du bist genau richtig.',
    },
  },
];

export default function BookingsScreen({ onOpenPostVisit, activeTab, onTabChange }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff' }}>
      <div style={{ paddingTop: 'env(safe-area-inset-top, 12px)' }} />

      {/* Header */}
      <div style={{ padding: '12px 20px 16px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>
          Meine Buchungen
        </h1>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px' }}>
        {/* Upcoming */}
        <p style={{ fontSize: '13px', fontWeight: 600, color: '#737373', marginBottom: '10px', fontFamily: 'Poppins, system-ui', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Bevorstehend
        </p>

        {upcomingBookings.map(booking => (
          <div key={booking.id} style={{
            background: '#fff',
            borderRadius: '14px',
            border: '1px solid rgba(28,29,40,0.1)',
            overflow: 'hidden',
            marginBottom: '16px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          }}>
            {/* Restaurant image strip */}
            <div style={{
              height: '90px',
              background: `linear-gradient(135deg, ${booking.gradientFrom}, ${booking.gradientTo})`,
              position: 'relative',
              display: 'flex', alignItems: 'flex-end', padding: '10px 14px',
            }}>
              <div style={{
                background: 'rgba(255,255,255,0.15)', borderRadius: '6px', padding: '3px 10px',
              }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#fff', fontFamily: 'Poppins, system-ui' }}>
                  {booking.deal}
                </span>
              </div>
            </div>

            {/* Booking details */}
            <div style={{ padding: '14px 14px 0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0a0a0a', marginBottom: '3px', fontFamily: 'Poppins, system-ui' }}>
                {booking.restaurantName}
              </h3>
              <p style={{ fontSize: '13px', color: '#737373', marginBottom: '3px', fontFamily: 'Poppins, system-ui' }}>
                {booking.time}
              </p>
              <p style={{ fontSize: '13px', color: '#737373', marginBottom: '12px', fontFamily: 'Poppins, system-ui' }}>
                {booking.district}
              </p>

              {/* Insider signal — Idea 5 */}
              <div style={{
                background: '#f5f5f5', borderRadius: '8px', padding: '9px 12px',
                marginBottom: '14px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <span style={{ fontSize: '14px' }}>⏰</span>
                <span style={{ fontSize: '12px', color: '#737373', fontFamily: 'Poppins, system-ui', lineHeight: 1.4 }}>
                  Am beliebtesten: Freitagabend — du bist genau richtig.
                </span>
              </div>
            </div>

            {/* Action row */}
            <div style={{ display: 'flex', borderTop: '1px solid rgba(28,29,40,0.08)' }}>
              {[
                { label: '📍 Location', action: undefined },
                { label: '↗ Teilen', action: undefined },
                { label: '✕ Abbrechen', action: undefined },
              ].map((btn, i) => (
                <button key={btn.label} style={{
                  flex: 1, padding: '12px 4px',
                  background: 'none', border: 'none',
                  borderRight: i < 2 ? '1px solid rgba(28,29,40,0.08)' : 'none',
                  cursor: 'pointer',
                  fontSize: '12px', fontWeight: 600, color: '#0a0a0a',
                  fontFamily: 'Poppins, system-ui',
                }}>
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Rate a past visit CTA */}
        <p style={{ fontSize: '13px', fontWeight: 600, color: '#737373', marginBottom: '10px', fontFamily: 'Poppins, system-ui', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Abgeschlossen
        </p>

        <div style={{
          background: '#bafad4', borderRadius: '14px', padding: '20px 16px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
          marginBottom: '24px',
        }}>
          <span style={{ fontSize: '28px' }}>⭐</span>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '15px', fontWeight: 700, color: '#08180f', fontFamily: 'Poppins, system-ui' }}>
              Wie war dein Besuch?
            </p>
            <p style={{ fontSize: '13px', color: 'rgba(8,24,15,0.65)', fontFamily: 'Poppins, system-ui', marginTop: '4px' }}>
              Bewerte deinen letzten Besuch bei The Spot.
            </p>
          </div>
          <button
            onClick={() => onOpenPostVisit('the-spot')}
            style={{
              background: '#11301d', color: '#53f293',
              border: 'none', borderRadius: '10px',
              padding: '12px 28px',
              fontSize: '14px', fontWeight: 700, cursor: 'pointer',
              fontFamily: 'Poppins, system-ui',
              transition: 'transform 100ms',
            }}
            onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
            onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Jetzt bewerten
          </button>
        </div>
      </div>

      <TabBarPlain activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}
