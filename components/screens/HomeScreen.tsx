'use client';
import { useState } from 'react';
import { restaurants, dinnerPickIds } from '@/lib/data';
import type { Tab } from '@/app/page';
import { TabBarPlain } from '@/app/page';
import SocialSignal from '@/components/SocialSignal';

interface Props {
  onOpenRestaurant: (id: string) => void;
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const categories = [
  { label: 'Burger', emoji: '🍔' },
  { label: 'Café', emoji: '☕' },
  { label: 'Pizza', emoji: '🍕' },
  { label: 'Sushi', emoji: '🍣' },
  { label: 'Frühstück', emoji: '🥞' },
];

export default function HomeScreen({ onOpenRestaurant, activeTab, onTabChange }: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const dinnerPicks = dinnerPickIds.map(id => restaurants.find(r => r.id === id)!).filter(Boolean);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff' }}>
      {/* Safe area top */}
      <div style={{ paddingTop: 'env(safe-area-inset-top, 12px)', background: '#fff' }} />

      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 20px 8px',
        }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer' }}>
            <span style={{ fontSize: '17px', fontWeight: 700, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>Berlin</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M6 9L12 15L18 9" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button style={{
            width: 38, height: 38, borderRadius: '50%', background: '#f5f5f5',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: 'none', cursor: 'pointer',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#0a0a0a" strokeWidth="2" />
              <path d="M16.5 16.5L21 21" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Promo banner */}
        <div style={{ padding: '0 16px 16px' }}>
          <div style={{
            background: '#11301d',
            borderRadius: '16px',
            padding: '20px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflow: 'hidden',
            position: 'relative',
            minHeight: '90px',
          }}>
            <div style={{ zIndex: 1 }}>
              <p style={{ fontSize: '13px', fontWeight: 600, color: '#53f293', marginBottom: '2px', fontFamily: 'Poppins, system-ui' }}>
                7-day offer
              </p>
              <p style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.85)', maxWidth: '180px', lineHeight: 1.4, fontFamily: 'Poppins, system-ui' }}>
                Unlock the best local restaurants for free this week.
              </p>
              <button style={{
                marginTop: '12px',
                background: '#53f293',
                color: '#08180f',
                border: 'none',
                borderRadius: '8px',
                padding: '9px 18px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'Poppins, system-ui',
              }}
                onMouseDown={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseUp={e => (e.currentTarget.style.opacity = '1')}
              >
                Try for free
              </button>
            </div>
            {/* Decorative food image placeholder */}
            <div style={{
              position: 'absolute', right: -10, top: -10, bottom: -10,
              width: '160px',
              background: 'linear-gradient(135deg, #1e5c38, #0a2e18)',
              borderRadius: '12px',
              opacity: 0.6,
            }} />
            <div style={{
              position: 'absolute', right: 0, top: 0, bottom: 0, width: '150px',
              background: 'linear-gradient(to right, #11301d 0%, transparent 100%)',
              zIndex: 0,
            }} />
          </div>
        </div>

        {/* Category pills */}
        <div style={{ paddingLeft: '16px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingRight: '16px', scrollbarWidth: 'none' }}>
            {categories.map(cat => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(activeCategory === cat.label ? null : cat.label)}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
                  flexShrink: 0, background: 'none', border: 'none', cursor: 'pointer',
                  transition: 'transform 100ms',
                }}
                onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.95)')}
                onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: '14px',
                  background: activeCategory === cat.label ? '#bafad4' : '#f5f5f5',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px',
                  border: activeCategory === cat.label ? '2px solid #53f293' : '2px solid transparent',
                }}>
                  {cat.emoji}
                </div>
                <span style={{
                  fontSize: '11px', fontWeight: 500, color: '#0a0a0a',
                  fontFamily: 'Poppins, system-ui',
                }}>
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Dinner picks */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px 8px' }}>
            <span style={{ fontSize: '16px', fontWeight: 700, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>
              Dinner picks
            </span>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="#11301d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Redemption count */}
          <div style={{ padding: '0 16px 10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{
              background: '#bafad4', borderRadius: '20px', padding: '3px 10px',
              display: 'flex', alignItems: 'center', gap: '5px',
            }}>
              <span style={{ fontSize: '11px', color: '#737373', fontFamily: 'Poppins, system-ui' }}>⭐</span>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#11301d', fontFamily: 'Poppins, system-ui' }}>
                3.4k+ Einlösungen
              </span>
            </div>
          </div>

          {/* Cards row */}
          <div style={{ paddingLeft: '16px', display: 'flex', gap: '12px', overflowX: 'auto', paddingRight: '16px', scrollbarWidth: 'none' }}>
            {dinnerPicks.map(r => (
              <button
                key={r.id}
                onClick={() => onOpenRestaurant(r.id)}
                style={{
                  flexShrink: 0, width: '170px', background: '#fff',
                  borderRadius: '12px', overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  border: 'none', cursor: 'pointer', textAlign: 'left',
                  transition: 'transform 100ms',
                }}
                onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
                onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                {/* Image */}
                <div style={{
                  height: '110px',
                  background: `linear-gradient(135deg, ${r.gradientFrom}, ${r.gradientTo})`,
                  position: 'relative',
                }}>
                  {r.cardSignal && (
                    <div style={{
                      position: 'absolute', bottom: '8px', left: '8px',
                      background: 'rgba(0,0,0,0.55)', borderRadius: '20px',
                      padding: '3px 8px',
                    }}>
                      <span style={{ fontSize: '11px', color: '#fff', fontWeight: 500, fontFamily: 'Poppins, system-ui' }}>
                        {r.cardSignal.text}
                      </span>
                    </div>
                  )}
                </div>
                {/* Info */}
                <div style={{ padding: '10px 10px 12px' }}>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: '#0a0a0a', marginBottom: '2px', fontFamily: 'Poppins, system-ui', lineHeight: 1.3 }}>
                    {r.shortName}
                  </p>
                  <p style={{ fontSize: '11px', color: '#737373', marginBottom: '8px', fontFamily: 'Poppins, system-ui' }}>
                    {r.cuisine}
                  </p>
                  {/* Rating */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>★ {r.rating}</span>
                    <span style={{ fontSize: '10px', color: '#737373', fontFamily: 'Poppins, system-ui' }}>({r.reviewCount})</span>
                  </div>
                  {/* Deal pills */}
                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                    {r.deals.slice(0, 2).map(d => (
                      <span key={d.id} style={{
                        background: '#53f293', color: '#08180f',
                        fontSize: '10px', fontWeight: 600,
                        padding: '2px 7px', borderRadius: '4px',
                        fontFamily: 'Poppins, system-ui',
                      }}>
                        {d.title}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recently viewed */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px 12px' }}>
            <span style={{ fontSize: '16px', fontWeight: 700, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>
              Zuletzt angesehen
            </span>
          </div>
          {restaurants.slice(2, 4).map((r, i) => (
            <button
              key={r.id}
              onClick={() => onOpenRestaurant(r.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                width: '100%', padding: '10px 16px',
                background: 'none', border: 'none', cursor: 'pointer',
                borderBottom: i === 0 ? '1px solid rgba(28,29,40,0.08)' : 'none',
                textAlign: 'left',
                transition: 'background 100ms',
              }}
              onMouseDown={e => (e.currentTarget.style.background = '#f5f5f5')}
              onMouseUp={e => (e.currentTarget.style.background = 'none')}
            >
              <div style={{
                width: 56, height: 56, borderRadius: '10px', flexShrink: 0,
                background: `linear-gradient(135deg, ${r.gradientFrom}, ${r.gradientTo})`,
              }} />
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '14px', fontWeight: 700, color: '#0a0a0a', marginBottom: '2px', fontFamily: 'Poppins, system-ui' }}>
                  {r.shortName}
                </p>
                <p style={{ fontSize: '12px', color: '#737373', fontFamily: 'Poppins, system-ui' }}>
                  {r.cuisine} · {r.distance}
                </p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="#737373" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <TabBarPlain activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}
