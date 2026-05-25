'use client';
import { useState } from 'react';
import { getRestaurant } from '@/lib/data';
import SocialSignal from '@/components/SocialSignal';

interface Props {
  restaurantId: string;
  onBack: () => void;
  onBookDeal: () => void;
}

export default function RestaurantScreen({ restaurantId, onBack, onBookDeal }: Props) {
  const [activeTab, setActiveTab] = useState<'overview' | 'loyalty' | 'reviews' | 'about'>('overview');
  const restaurant = getRestaurant(restaurantId);
  if (!restaurant) return null;

  const tabs = ['overview', 'loyalty', 'reviews', 'about'] as const;
  const tabLabels = { overview: 'Overview', loyalty: 'Loyalty', reviews: 'Reviews', about: 'About' };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff' }}>
      <div style={{ paddingTop: 'env(safe-area-inset-top, 12px)' }} />

      {/* Back + share */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px 8px' }}>
        <button
          onClick={onBack}
          style={{ width: 36, height: 36, borderRadius: '50%', background: '#f5f5f5', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 100ms' }}
          onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.92)')}
          onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button style={{ width: 36, height: 36, borderRadius: '50%', background: '#f5f5f5', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M4 12V20C4 20.55 4.45 21 5 21H19C19.55 21 20 20.55 20 20V12" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 3L12 15M12 3L8 7M12 3L16 7" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Title */}
        <div style={{ padding: '4px 16px 12px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#0a0a0a', lineHeight: 1.25, fontFamily: 'Poppins, system-ui', marginBottom: '8px' }}>
            {restaurant.name}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>★ {restaurant.rating}</span>
            <span style={{ fontSize: '13px', color: '#737373', fontFamily: 'Poppins, system-ui' }}>({restaurant.reviewCount})</span>
            <span style={{ color: '#e5e5e5' }}>·</span>
            <span style={{ fontSize: '13px', color: '#737373', fontFamily: 'Poppins, system-ui' }}>{restaurant.cuisine}</span>
            <span style={{ color: '#e5e5e5' }}>·</span>
            <span style={{ fontSize: '13px', color: '#737373', fontFamily: 'Poppins, system-ui' }}>{restaurant.priceRange}</span>
          </div>
          <div style={{ marginTop: '4px' }}>
            <span style={{ fontSize: '13px', color: '#737373', fontFamily: 'Poppins, system-ui' }}>
              {restaurant.hours} · {restaurant.district} ({restaurant.distance})
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '8px', padding: '0 16px 16px' }}>
          {[{ icon: '📋', label: 'Menu' }, { icon: '📍', label: 'Location' }, { icon: '♡', label: 'Save' }, { icon: '↗', label: 'Share' }].map(btn => (
            <button key={btn.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', background: '#f5f5f5', border: 'none', borderRadius: '10px', padding: '10px 4px', cursor: 'pointer' }}>
              <span style={{ fontSize: '16px' }}>{btn.icon}</span>
              <span style={{ fontSize: '11px', fontWeight: 500, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>{btn.label}</span>
            </button>
          ))}
        </div>

        {/* Photo grid */}
        <div style={{ padding: '0 16px 16px', display: 'flex', gap: '6px', height: '180px' }}>
          <div style={{ flex: 2, borderRadius: '12px', overflow: 'hidden' }}>
            <img src={restaurant.image} alt={restaurant.shortName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ flex: 1, borderRadius: '12px', overflow: 'hidden' }}>
              <img src={restaurant.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }} />
            </div>
            <div style={{ flex: 1, borderRadius: '12px', overflow: 'hidden' }}>
              <img src={restaurant.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} />
            </div>
          </div>
        </div>

        {/* Tab strip */}
        <div style={{ display: 'flex', borderBottom: '1px solid rgba(28,29,40,0.1)', padding: '0 16px' }}>
          {tabs.map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{ flex: 1, padding: '10px 4px', background: 'none', border: 'none', borderBottom: activeTab === t ? '2px solid #11301d' : '2px solid transparent', marginBottom: '-1px', cursor: 'pointer', fontSize: '13px', fontWeight: activeTab === t ? 700 : 500, color: activeTab === t ? '#0a0a0a' : '#737373', fontFamily: 'Poppins, system-ui', transition: 'color 150ms' }}
            >
              {tabLabels[t]}
            </button>
          ))}
        </div>

        {/* Overview tab */}
        {activeTab === 'overview' && (
          <div style={{ padding: '20px 16px 32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>Deals</span>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="#737373" strokeWidth="1.8" />
                  <path d="M12 8V12M12 16H12.01" stroke="#737373" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {restaurant.deals.map(deal => (
                <div key={deal.id} style={{ background: '#53f293', borderRadius: '12px', padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '8px', gap: '8px' }}>
                    <span style={{ fontSize: '15px', fontWeight: 700, color: '#08180f', fontFamily: 'Poppins, system-ui', flex: 1 }}>{deal.title}</span>
                    <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                      <span style={{ background: 'rgba(8,24,15,0.1)', borderRadius: '6px', padding: '3px 8px', fontSize: '11px', fontWeight: 600, color: '#08180f', fontFamily: 'Poppins, system-ui' }}>{deal.avgPrice}</span>
                      <span style={{ background: 'rgba(8,24,15,0.1)', borderRadius: '6px', padding: '3px 8px', fontSize: '11px', fontWeight: 600, color: '#08180f', fontFamily: 'Poppins, system-ui' }}>{deal.validDays}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', color: 'rgba(8,24,15,0.65)', lineHeight: 1.5, marginBottom: '10px', fontFamily: 'Poppins, system-ui' }}>{deal.description}</p>
                  {deal.signal && (
                    <div style={{ marginBottom: '12px' }}>
                      <SocialSignal signal={deal.signal} size="md" />
                    </div>
                  )}
                  <button
                    onClick={onBookDeal}
                    style={{ width: '100%', height: '46px', borderRadius: '10px', background: '#11301d', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 700, color: '#53f293', fontFamily: 'Poppins, system-ui', transition: 'transform 100ms' }}
                    onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.98)')}
                    onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    Book deal
                  </button>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '28px' }}>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>Loyalty</span>
              <div style={{ marginTop: '12px', background: '#f5f5f5', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: 44, height: 44, borderRadius: '10px', background: '#53f293', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '22px' }}>⭐</span>
                </div>
                <div>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>0 of 5 visits</p>
                  <p style={{ fontSize: '12px', color: '#737373', fontFamily: 'Poppins, system-ui' }}>Collect stamps by redeeming deals</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab !== 'overview' && (
          <div style={{ padding: '40px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '32px' }}>{activeTab === 'loyalty' ? '⭐' : activeTab === 'reviews' ? '💬' : 'ℹ️'}</span>
            <p style={{ fontSize: '15px', fontWeight: 700, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>
              {activeTab === 'loyalty' ? 'Loyalty Programme' : activeTab === 'reviews' ? 'No reviews yet' : 'About this place'}
            </p>
            <p style={{ fontSize: '13px', color: '#737373', textAlign: 'center', fontFamily: 'Poppins, system-ui' }}>
              {activeTab === 'reviews' ? 'Be the first to leave a review.' : 'More information coming soon.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
