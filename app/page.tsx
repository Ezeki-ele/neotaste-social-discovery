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
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
    /* Floating pill wrapper — handles safe-area spacing */
    <div style={{
      padding: '8px 12px',
      paddingBottom: 'calc(8px + env(safe-area-inset-bottom, 0px))',
      background: 'transparent',
    }}>
      <div style={{
        display: 'flex',
        background: '#f5f5f5',
        borderRadius: '28px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
        padding: '4px',
        overflow: 'hidden',
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
              background: activeTab === tab ? '#fff' : 'none',
              borderRadius: '22px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 200ms',
            }}
          >
            <TabIcon tab={tab} active={activeTab === tab} />
            <span style={{
              fontSize: '10px',
              fontWeight: activeTab === tab ? 700 : 500,
              color: activeTab === tab ? '#0a0a0a' : '#a3a3a3',
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
  const color = active ? '#11301d' : '#a3a3a3';

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
          <circle cx="12" cy="9" r="2.5" fill="#fff" />
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
      <rect x="3" y="4" width="18" height="17" rx="2.5" stroke={color} strokeWidth="1.5" fill={active ? '#f5f5f5' : 'none'} />
      <path d="M3 9.5H21" stroke={color} strokeWidth="1.5" />
      <path d="M8 2.5V6M16 2.5V6" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7.5 14.5L10.5 17.5L16.5 12" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  // profile
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {active ? (
        <>
          <circle cx="12" cy="7.5" r="3.75" fill={color} />
          <path d="M3.75 20.5C3.75 16.91 7.47 14 12 14C16.53 14 20.25 16.91 20.25 20.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="12" cy="7.5" r="3.75" stroke={color} strokeWidth="1.5" />
          <path d="M3.75 20.5C3.75 16.91 7.47 14 12 14C16.53 14 20.25 16.91 20.25 20.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
