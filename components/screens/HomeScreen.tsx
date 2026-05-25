'use client';
import { useState } from 'react';
import { restaurants, dinnerPickIds } from '@/lib/data';
import type { SignalType } from '@/lib/data';
import type { Tab } from '@/app/page';
import { TabBarPlain } from '@/app/page';

function CardSignalIcon({ type }: { type: SignalType }) {
  // Friend: real photo avatar
  if (type === 'friend') {
    return (
      <div style={{ width: 18, height: 18, borderRadius: '50%', flexShrink: 0, overflow: 'hidden' }}>
        <img src="/images/avatar-jack.jpg" alt="Jack" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    );
  }
  // Community: two-people group icon
  if (type === 'community') {
    return (
      <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#d4d4d4', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
          <circle cx="8" cy="7" r="3" fill="#737373" />
          <circle cx="16" cy="7" r="3" fill="#a3a3a3" />
          <path d="M1 20C1 17 4.13 14.5 8 14.5" stroke="#737373" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M11.5 20C11.5 17 14.13 14.5 17 14.5C19.87 14.5 23 17 23 20" stroke="#a3a3a3" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  if (type === 'occasion') {
    return (
      <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#fff592', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="#ecbb06" />
        </svg>
      </div>
    );
  }
  return (
    <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#dff0ff', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L4.09 12.11A1 1 0 0 0 5 14h7l-1 8 8.91-10.11A1 1 0 0 0 19 10h-7l1-8z" fill="#069af1" />
      </svg>
    </div>
  );
}

interface Props {
  onOpenRestaurant: (id: string) => void;
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const categories = [
  { label: 'Burgers', emoji: '🍔' },
  { label: 'Café', emoji: '☕' },
  { label: 'Pizza', emoji: '🍕' },
  { label: 'Sushi', emoji: '🍣' },
  { label: 'Breakfast', emoji: '🥞' },
  { label: 'Bowls', emoji: '🥗' },
  { label: 'Indian', emoji: '🍛' },
  { label: 'Bar', emoji: '🍺' },
  { label: 'Brunch', emoji: '🍳' },
  { label: 'BBQ', emoji: '🥩' },
  { label: 'Pasta', emoji: '🍝' },
  { label: 'Fast Food', emoji: '🍟' },
  { label: 'Desserts', emoji: '🍰' },
  { label: 'Bakery', emoji: '🥐' },
  { label: 'Sandwich', emoji: '🥪' },
  { label: 'Drinks', emoji: '🥤' },
  { label: 'Bubble Tea', emoji: '🧋' },
  { label: 'Pub', emoji: '🍻' },
  { label: 'Korean', emoji: '🍱' },
  { label: 'Mexican', emoji: '🌮' },
  { label: 'Chinese', emoji: '🥟' },
  { label: 'Thai', emoji: '🍜' },
  { label: 'Italian', emoji: '🫕' },
  { label: 'Vietnamese', emoji: '🍲' },
  { label: 'Turkish', emoji: '🥙' },
  { label: 'Ice Cream', emoji: '🍦' },
  { label: 'Seafood', emoji: '🦐' },
  { label: 'Spanish', emoji: '🥘' },
  { label: 'German', emoji: '🥨' },
  { label: 'French', emoji: '🥖' },
  { label: 'African', emoji: '🍖' },
  { label: 'Fine Dining', emoji: '🍽️' },
  { label: 'American', emoji: '🌭' },
];

export default function HomeScreen({ onOpenRestaurant, activeTab, onTabChange }: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const dinnerPicks = dinnerPickIds.map(id => restaurants.find(r => r.id === id)!).filter(Boolean);

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', background: '#fff' }}>
      <div style={{ paddingTop: 'env(safe-area-inset-top, 12px)', background: '#fff' }} />

      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', paddingBottom: '84px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px 8px' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer' }}>
            <span style={{ fontSize: '17px', fontWeight: 700, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>Berlin</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M6 9L12 15L18 9" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button style={{ width: 38, height: 38, borderRadius: '50%', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#0a0a0a" strokeWidth="2" />
              <path d="M16.5 16.5L21 21" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Promo banner */}
        <div style={{ padding: '0 16px 16px' }}>
          <div style={{ background: '#11301d', borderRadius: '16px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', overflow: 'hidden', position: 'relative', minHeight: '90px' }}>
            <div style={{ zIndex: 1 }}>
              <p style={{ fontSize: '13px', fontWeight: 600, color: '#53f293', marginBottom: '2px', fontFamily: 'Poppins, system-ui' }}>7-day offer</p>
              <p style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.85)', maxWidth: '180px', lineHeight: 1.4, fontFamily: 'Poppins, system-ui' }}>
                Unlock the best local restaurants for free this week.
              </p>
              <button
                style={{ marginTop: '12px', background: '#53f293', color: '#08180f', border: 'none', borderRadius: '8px', padding: '9px 18px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', fontFamily: 'Poppins, system-ui' }}
                onMouseDown={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseUp={e => (e.currentTarget.style.opacity = '1')}
              >
                Try for free
              </button>
            </div>
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(to right, #11301d 0%, transparent 100%)', zIndex: 0 }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '140px', zIndex: 0 }}>
              <img src="/images/peter-pane.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, borderRadius: '0 16px 16px 0' }} />
            </div>
          </div>
        </div>

        {/* Category pills */}
        <div style={{ paddingLeft: '16px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingRight: '16px', scrollbarWidth: 'none' }}>
            {categories.map(cat => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(activeCategory === cat.label ? null : cat.label)}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flexShrink: 0, background: 'none', border: 'none', cursor: 'pointer', transition: 'transform 100ms' }}
                onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.95)')}
                onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: activeCategory === cat.label ? '#bafad4' : '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', border: activeCategory === cat.label ? '2px solid #53f293' : '2px solid transparent' }}>
                  {cat.emoji}
                </div>
                <span style={{ fontSize: '11px', fontWeight: 500, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dinner picks */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px 8px' }}>
            <span style={{ fontSize: '16px', fontWeight: 700, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>Dinner picks</span>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="#11301d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div style={{ paddingLeft: '16px', display: 'flex', gap: '12px', overflowX: 'auto', paddingRight: '16px', scrollbarWidth: 'none', paddingBottom: '4px' }}>
            {dinnerPicks.map(r => (
              <button
                key={r.id}
                onClick={() => onOpenRestaurant(r.id)}
                style={{ flexShrink: 0, width: '170px', background: '#fff', borderRadius: '12px', overflow: 'hidden', border: 'none', cursor: 'pointer', textAlign: 'left', transition: 'transform 100ms' }}
                onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
                onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                {/* Photo — redemptions badge top-left */}
                <div style={{ height: '110px', position: 'relative', overflow: 'hidden' }}>
                  <img src={r.image} alt={r.shortName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  {r.redemptions && (
                    <div style={{ position: 'absolute', top: '7px', left: '7px', background: 'rgba(0,0,0,0.6)', borderRadius: '20px', padding: '3px 8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span style={{ fontSize: '10px' }}>🔥</span>
                      <span style={{ fontSize: '10px', color: '#fff', fontWeight: 600, fontFamily: 'Poppins, system-ui' }}>{r.redemptions} redemptions</span>
                    </div>
                  )}
                </div>
                {/* Card body */}
                <div style={{ padding: '10px 12px 12px' }}>
                  {/* Name — single line, truncated */}
                  <p style={{ fontSize: '13px', fontWeight: 700, color: '#0a0a0a', marginBottom: '4px', fontFamily: 'Poppins, system-ui', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.name}</p>
                  {/* Rating: ★ in brand green, number + cuisine in gray — single line */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '6px', overflow: 'hidden' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#53f293', fontFamily: 'Poppins, system-ui', flexShrink: 0 }}>★</span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#737373', fontFamily: 'Poppins, system-ui', flexShrink: 0 }}>{r.rating}</span>
                    <span style={{ fontSize: '10px', color: '#737373', fontFamily: 'Poppins, system-ui', flexShrink: 0 }}>({r.reviewCount})</span>
                    <span style={{ fontSize: '10px', color: '#d4d4d4', flexShrink: 0 }}>·</span>
                    <span style={{ fontSize: '10px', color: '#737373', fontFamily: 'Poppins, system-ui', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.cuisine}</span>
                  </div>
                  {/* Social proof chip — content-width pill, avatar + text */}
                  {r.cardSignal && (
                    <div style={{ marginBottom: '7px', overflow: 'hidden' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: '#f5f5f5', borderRadius: '20px', padding: '3px 8px', overflow: 'hidden', maxWidth: '100%' }}>
                        <CardSignalIcon type={r.cardSignal.type} />
                        <span style={{ fontSize: '11px', color: '#737373', fontWeight: 500, fontFamily: 'Poppins, system-ui', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {r.cardSignal.text}
                        </span>
                      </div>
                    </div>
                  )}
                  {/* Deal pills — fully rounded, single row */}
                  <div style={{ display: 'flex', gap: '4px', overflow: 'hidden', flexWrap: 'nowrap' }}>
                    {r.deals.slice(0, 2).map(d => (
                      <span key={d.id} style={{ background: '#53f293', color: '#08180f', fontSize: '10px', fontWeight: 600, padding: '3px 10px', borderRadius: '20px', fontFamily: 'Poppins, system-ui', whiteSpace: 'nowrap' }}>
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
            <span style={{ fontSize: '16px', fontWeight: 700, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>Recently viewed</span>
          </div>
          {restaurants.slice(2, 4).map((r, i) => (
            <button
              key={r.id}
              onClick={() => onOpenRestaurant(r.id)}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', padding: '10px 16px', background: 'none', border: 'none', cursor: 'pointer', borderBottom: i === 0 ? '1px solid rgba(28,29,40,0.08)' : 'none', textAlign: 'left', transition: 'background 100ms' }}
              onMouseDown={e => (e.currentTarget.style.background = '#f5f5f5')}
              onMouseUp={e => (e.currentTarget.style.background = 'none')}
            >
              <div style={{ width: 56, height: 56, borderRadius: '10px', flexShrink: 0, overflow: 'hidden' }}>
                <img src={r.image} alt={r.shortName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '14px', fontWeight: 700, color: '#0a0a0a', marginBottom: '2px', fontFamily: 'Poppins, system-ui' }}>{r.shortName}</p>
                <p style={{ fontSize: '12px', color: '#737373', fontFamily: 'Poppins, system-ui' }}>{r.cuisine} · {r.distance}</p>
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
