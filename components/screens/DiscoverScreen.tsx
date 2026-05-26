'use client';
import { useState } from 'react';
import { restaurants } from '@/lib/data';
import type { Tab } from '@/app/page';
import { TabBarPlain } from '@/app/page';
import type { SignalType } from '@/lib/data';

function DiscoverSignalIcon({ type }: { type: SignalType }) {
  if (type === 'friend') return (
    <div style={{ width: 16, height: 16, borderRadius: '50%', flexShrink: 0, overflow: 'hidden' }}>
      <img src="/images/avatar-jack.jpg" alt="Jack" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
  if (type === 'community') return (
    <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#d4d4d4', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="7" r="3" fill="#737373" />
        <circle cx="16" cy="7" r="3" fill="#a3a3a3" />
        <path d="M1 20C1 17 4.13 14.5 8 14.5" stroke="#737373" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M11.5 20C11.5 17 14.13 14.5 17 14.5C19.87 14.5 23 17 23 20" stroke="#a3a3a3" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </div>
  );
  if (type === 'occasion') return (
    <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#fff592', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="#ecbb06" />
      </svg>
    </div>
  );
  return (
    <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#dff0ff', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
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

export default function DiscoverScreen({ onOpenRestaurant, activeTab, onTabChange }: Props) {
  const [view, setView] = useState<'list' | 'map'>('list');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', background: '#fff' }}>
      <div style={{ paddingTop: 'env(safe-area-inset-top, 12px)' }} />

      {/* Search bar */}
      <div style={{ padding: '12px 16px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f5f5f5', borderRadius: '12px', padding: '11px 14px' }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="#737373" strokeWidth="2" />
            <path d="M16.5 16.5L21 21" stroke="#737373" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: '14px', color: '#737373', fontFamily: 'Poppins, system-ui' }}>Search deals &amp; more</span>
        </div>
      </div>

      {/* Filter row */}
      <div style={{ padding: '4px 16px 10px', display: 'flex', gap: '8px', overflowX: 'auto', scrollbarWidth: 'none' }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: '5px', background: '#f5f5f5', border: 'none', borderRadius: '20px', padding: '7px 12px', cursor: 'pointer', flexShrink: 0 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M3 6H21M6 12H18M10 18H14" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>Filters</span>
        </button>

        <button
          onClick={() => setActiveFilter(activeFilter === 'Now' ? null : 'Now')}
          style={{ display: 'flex', alignItems: 'center', gap: '5px', background: activeFilter === 'Now' ? '#53f293' : '#f5f5f5', border: 'none', borderRadius: '20px', padding: '7px 12px', cursor: 'pointer', flexShrink: 0 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke={activeFilter === 'Now' ? '#08180f' : '#0a0a0a'} strokeWidth="2" />
            <path d="M12 7V12L15 15" stroke={activeFilter === 'Now' ? '#08180f' : '#0a0a0a'} strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: '13px', fontWeight: 600, color: activeFilter === 'Now' ? '#08180f' : '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>Now</span>
        </button>

        <button
          onClick={() => setActiveFilter(activeFilter === 'Cuisine' ? null : 'Cuisine')}
          style={{ display: 'flex', alignItems: 'center', gap: '5px', background: activeFilter === 'Cuisine' ? '#53f293' : '#f5f5f5', border: 'none', borderRadius: '20px', padding: '7px 12px', cursor: 'pointer', flexShrink: 0 }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: activeFilter === 'Cuisine' ? '#08180f' : '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>
            {activeFilter === 'Cuisine' ? '☕ Café' : 'Cuisine'}
          </span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke={activeFilter === 'Cuisine' ? '#08180f' : '#0a0a0a'} strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>

        <button style={{ display: 'flex', alignItems: 'center', gap: '5px', background: '#f5f5f5', border: 'none', borderRadius: '20px', padding: '7px 12px', cursor: 'pointer', flexShrink: 0 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M3 6H21M7 12H17M11 18H13" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>Sort</span>
        </button>
      </div>

      {view === 'list' ? (
        <>
          {activeFilter === 'Cuisine' && (
            <div style={{ padding: '4px 16px 8px' }}>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>14 results</span>
            </div>
          )}

          <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '84px' }}>
            {restaurants.map((r, i) => (
              <button
                key={r.id}
                onClick={() => onOpenRestaurant(r.id)}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', width: '100%', padding: '14px 16px', background: 'none', border: 'none', cursor: 'pointer', borderBottom: i < restaurants.length - 1 ? '1px solid rgba(28,29,40,0.08)' : 'none', textAlign: 'left', transition: 'background 100ms' }}
                onMouseDown={e => (e.currentTarget.style.background = '#f9f9f9')}
                onMouseUp={e => (e.currentTarget.style.background = 'none')}
              >
                {/* Photo */}
                <div style={{ width: 108, height: 108, borderRadius: '16px', flexShrink: 0, overflow: 'hidden', position: 'relative' }}>
                  <img src={r.image} alt={r.shortName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  {r.isNew && (
                    <div style={{ position: 'absolute', top: '8px', left: '8px', background: '#1c1d28', borderRadius: '8px', padding: '2px 6px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 700, color: '#fff', fontFamily: 'Poppins, system-ui', lineHeight: '12px', display: 'block' }}>New</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#0a0a0a', marginBottom: '2px', fontFamily: 'Poppins, system-ui', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {r.name}
                  </p>
                  <p style={{ fontSize: '12px', color: '#737373', marginBottom: '4px', fontFamily: 'Poppins, system-ui' }}>{r.cuisine}</p>
                  {/* Rating — matches HomeScreen style */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: r.cardSignal ? '5px' : '6px', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2px', flexShrink: 0 }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#53f293', fontFamily: 'Poppins, system-ui' }}>★</span>
                      <span style={{ fontSize: '12px', fontWeight: 500, color: '#52535b', fontFamily: 'Poppins, system-ui' }}>{r.rating}</span>
                      <span style={{ fontSize: '12px', color: '#52535b', fontFamily: 'Poppins, system-ui' }}>({r.reviewCount})</span>
                    </div>
                    <span style={{ width: '2px', height: '2px', borderRadius: '50%', background: '#52535b', flexShrink: 0, display: 'inline-block' }} />
                    <span style={{ fontSize: '12px', color: '#52535b', fontFamily: 'Poppins, system-ui' }}>{r.distance}</span>
                  </div>
                  {/* Social proof chip — matches HomeScreen style */}
                  {r.cardSignal && (
                    <div style={{ marginBottom: '6px', overflow: 'hidden' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#e5e5e5', borderRadius: '16px', padding: '4px 8px', overflow: 'hidden', maxWidth: '100%' }}>
                        <DiscoverSignalIcon type={r.cardSignal.type} />
                        <span style={{ fontSize: '11px', color: 'rgba(0,0,0,0.7)', fontWeight: 600, fontFamily: 'Poppins, system-ui', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {r.cardSignal.text}
                        </span>
                      </div>
                    </div>
                  )}
                  {/* Deal chips — matches HomeScreen style */}
                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'nowrap', overflow: 'hidden' }}>
                    {r.deals.slice(0, 2).map(d => (
                      <span key={d.id} style={{ background: '#53f293', color: '#1c1d28', fontSize: '11px', fontWeight: 600, padding: '4px 8px', borderRadius: '16px', fontFamily: 'Poppins, system-ui', whiteSpace: 'nowrap' }}>
                        {d.title}
                      </span>
                    ))}
                    {r.deals.length > 2 && (
                      <span style={{ background: '#f5f5f5', color: '#737373', fontSize: '11px', fontWeight: 600, padding: '4px 7px', borderRadius: '16px', fontFamily: 'Poppins, system-ui' }}>
                        +{r.deals.length - 2}
                      </span>
                    )}</div>
                </div>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div style={{ flex: 1, background: 'linear-gradient(135deg, #d4e8d0 0%, #c8dfc4 50%, #b8d4b3 100%)', position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
          {[{ top: '20%', left: '30%' }, { top: '35%', left: '55%' }, { top: '50%', left: '25%' }, { top: '60%', left: '65%' }, { top: '25%', left: '70%' }, { top: '70%', left: '40%' }].map((pos, i) => (
            <div key={i} style={{ position: 'absolute', top: pos.top, left: pos.left, width: 28, height: 28, borderRadius: '50%', background: '#11301d', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#53f293', fontFamily: 'Poppins, system-ui' }}>N</span>
            </div>
          ))}
          <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', background: '#fff', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', padding: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: 60, height: 60, borderRadius: '10px', overflow: 'hidden', flexShrink: 0 }}>
              <img src="/images/capos-coffee.jpg" alt="Capo's Coffee" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#0a0a0a', marginBottom: '2px', fontFamily: 'Poppins, system-ui' }}>Capo's Coffee Hafencity</p>
              <p style={{ fontSize: '12px', color: '#737373', marginBottom: '5px', fontFamily: 'Poppins, system-ui' }}>Breakfast, Coffee · 4.5 km</p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#e5e5e5', borderRadius: '16px', padding: '4px 8px' }}>
                <DiscoverSignalIcon type="friend" />
                <span style={{ fontSize: '11px', color: 'rgba(0,0,0,0.7)', fontWeight: 600, fontFamily: 'Poppins, system-ui' }}>Jack visited · last week</span>
              </div>
            </div>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="#737373" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Map toggle */}
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: view === 'list' ? '80px' : '16px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
          <button
            onClick={() => setView(v => v === 'list' ? 'map' : 'list')}
            style={{ background: '#11301d', color: '#fff', border: 'none', borderRadius: '20px', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.25)', fontSize: '13px', fontWeight: 600, fontFamily: 'Poppins, system-ui' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M9 20L2 17V4L9 7M9 20L15 17M9 20V7M15 17L22 20V7L15 4M15 17V4M9 7L15 4" stroke="#53f293" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {view === 'list' ? 'Map' : 'List'}
          </button>
        </div>
      </div>

      {view === 'list' && <TabBarPlain activeTab={activeTab} onTabChange={onTabChange} />}
    </div>
  );
}
