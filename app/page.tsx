'use client';
import { useState, useCallback } from 'react';
import HomeScreen from '@/components/screens/HomeScreen';
import DiscoverScreen from '@/components/screens/DiscoverScreen';
import RestaurantScreen from '@/components/screens/RestaurantScreen';
import PostVisitScreen from '@/components/screens/PostVisitScreen';
import BookingsScreen from '@/components/screens/BookingsScreen';

export type Tab = 'home' | 'discover' | 'bookings' | 'profile';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [restaurantId, setRestaurantId] = useState<string | null>(null);
  const [showPostVisit, setShowPostVisit] = useState(false);
  const [bookedRestaurantId, setBookedRestaurantId] = useState<string>('the-spot');

  const openRestaurant = useCallback((id: string) => setRestaurantId(id), []);

  const closeRestaurant = useCallback(() => setRestaurantId(null), []);

  const openPostVisit = useCallback((id: string) => {
    setBookedRestaurantId(id);
    setShowPostVisit(true);
  }, []);

  const closePostVisit = useCallback(() => {
    setShowPostVisit(false);
    setRestaurantId(null);
    setActiveTab('bookings');
  }, []);

  const detailVisible = restaurantId !== null;

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Base tab screens */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: detailVisible ? 'translateX(-6%)' : 'translateX(0)',
          transition: 'transform 300ms var(--ease-ios)',
          filter: detailVisible ? 'brightness(0.6)' : 'brightness(1)',
          willChange: 'transform',
        }}
      >
        {activeTab === 'home' && (
          <HomeScreen onOpenRestaurant={openRestaurant} activeTab={activeTab} onTabChange={setActiveTab} />
        )}
        {activeTab === 'discover' && (
          <DiscoverScreen onOpenRestaurant={openRestaurant} activeTab={activeTab} onTabChange={setActiveTab} />
        )}
        {activeTab === 'bookings' && (
          <BookingsScreen onOpenPostVisit={openPostVisit} activeTab={activeTab} onTabChange={setActiveTab} />
        )}
        {activeTab === 'profile' && (
          <ProfilePlaceholder activeTab={activeTab} onTabChange={setActiveTab} />
        )}
      </div>

      {/* Restaurant detail layer — slides in from right */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: '#fff',
          transform: detailVisible ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 300ms var(--ease-ios)',
          willChange: 'transform',
        }}
      >
        {restaurantId && (
          <RestaurantScreen
            restaurantId={restaurantId}
            onBack={closeRestaurant}
            onBookDeal={() => openPostVisit(restaurantId)}
          />
        )}
      </div>

      {/* Post-visit layer — slides up from bottom */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: showPostVisit ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 300ms var(--ease-sheet)',
          willChange: 'transform',
        }}
      >
        {showPostVisit && (
          <PostVisitScreen restaurantId={bookedRestaurantId} onComplete={closePostVisit} />
        )}
      </div>
    </div>
  );
}

function ProfilePlaceholder({ activeTab, onTabChange }: { activeTab: Tab; onTabChange: (t: Tab) => void }) {
  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', paddingBottom: '84px' }}>
        <p style={{ color: '#737373', fontSize: '15px', fontFamily: 'Poppins, system-ui' }}>Profile coming soon</p>
      </div>
      <TabBarPlain activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}

export function TabBarPlain({ activeTab, onTabChange }: { activeTab: Tab; onTabChange: (t: Tab) => void }) {
  const tabs: Tab[] = ['home', 'discover', 'bookings', 'profile'];
  const labels: Record<Tab, string> = { home: 'Home', discover: 'Discover', bookings: 'Bookings', profile: 'Profile' };

  return (
    /* Floating pill — absolutely positioned so content scrolls behind it */
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '8px 12px',
      paddingBottom: 'calc(8px + env(safe-area-inset-bottom, 0px))',
    }}>
      <div style={{
        display: 'flex',
        background: 'rgba(255, 255, 255, 0.78)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRadius: '28px',
        border: '1px solid rgba(255, 255, 255, 0.6)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08)',
        padding: '4px',
      }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
              padding: '8px 4px 6px',
              background: activeTab === tab ? 'rgba(0,0,0,0.05)' : 'none',
              borderRadius: '22px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 200ms, opacity 200ms',
              opacity: activeTab === tab ? 1 : 0.5,
            }}
          >
            <TabIcon tab={tab} active={activeTab === tab} />
            <span style={{
              fontSize: '10px',
              fontWeight: 500,
              color: '#0a0a0a',
              fontFamily: 'Poppins, system-ui, sans-serif',
            }}>
              {labels[tab]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function TabIcon({ tab, active }: { tab: Tab; active: boolean }) {
  const color = '#0a0a0a';

  if (tab === 'home') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {active ? (
        // Filled home
        <path d="M10.55 2.532a2 2 0 0 1 2.9 0l7 7.602A2 2 0 0 1 21 11.5V20a2 2 0 0 1-2 2h-4v-5h-6v5H5a2 2 0 0 1-2-2v-8.5a2 2 0 0 1 .55-1.366l7-7.602Z" fill={color} />
      ) : (
        // Outline home
        <>
          <path d="M10.55 2.532a2 2 0 0 1 2.9 0l7 7.602A2 2 0 0 1 21 11.5V20a2 2 0 0 1-2 2h-4v-5h-6v5H5a2 2 0 0 1-2-2v-8.5a2 2 0 0 1 .55-1.366l7-7.602Z" stroke={color} strokeWidth="1.6" fill="none" />
        </>
      )}
    </svg>
  );

  if (tab === 'discover') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {active ? (
        <>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill={color} />
          <circle cx="12" cy="9" r="2.5" fill="rgba(255,255,255,0.85)" />
        </>
      ) : (
        <>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke={color} strokeWidth="1.6" fill="none" strokeLinejoin="round" />
          <circle cx="12" cy="9" r="2.5" stroke={color} strokeWidth="1.4" fill="none" />
        </>
      )}
    </svg>
  );

  if (tab === 'bookings') return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke={color} strokeWidth="1.5" />
      <path d="M8.5 12L11 14.5L15.5 9.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  // profile
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {active ? (
        <>
          <circle cx="12" cy="8" r="3.5" fill={color} />
          <path d="M5 21C5 17.5 8.13 15 12 15C15.87 15 19 17.5 19 21" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="12" cy="8" r="3.5" stroke={color} strokeWidth="1.5" />
          <path d="M5 21C5 17.5 8.13 15 12 15C15.87 15 19 17.5 19 21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
