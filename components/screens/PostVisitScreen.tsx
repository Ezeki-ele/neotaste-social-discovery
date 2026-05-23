'use client';
import { useState } from 'react';
import { getRestaurant } from '@/lib/data';

interface Props {
  restaurantId: string;
  onComplete: () => void;
}

type Step = 1 | 2 | 3 | 4;

export default function PostVisitScreen({ restaurantId, onComplete }: Props) {
  const [step, setStep] = useState<Step>(1);
  const [reaction, setReaction] = useState<string | null>(null);
  const [occasion, setOccasion] = useState<string | null>(null);
  const [starRating, setStarRating] = useState<number>(0);
  const [hoveredStar, setHoveredStar] = useState<number>(0);
  const restaurant = getRestaurant(restaurantId);
  const restaurantName = restaurant?.shortName ?? 'The Spot';

  const reactions = [
    { id: 'worth-it', label: 'Worth it', emoji: '😊' },
    { id: 'solid', label: 'Solid', emoji: '😄' },
    { id: 'not-for-me', label: 'Not for me', emoji: '😞' },
  ];

  const occasions = [
    { id: 'date', label: 'Date', emoji: '❤️' },
    { id: 'group', label: 'Group', emoji: '👥' },
    { id: 'solo', label: 'Solo', emoji: '👤' },
    { id: 'work', label: 'Work lunch', emoji: '💼' },
    { id: 'family', label: 'Family', emoji: '🎂' },
  ];

  const handleReactionTap = (id: string) => {
    setReaction(id);
    setTimeout(() => setStep(2), 180);
  };

  const handleOccasionTap = (id: string) => {
    setOccasion(id);
    setTimeout(() => setStep(3), 180);
  };

  // Steps 3 & 4 are full screens
  if (step === 3) {
    return (
      <div style={{
        height: '100%', background: '#53f293',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        paddingTop: 'env(safe-area-inset-top, 20px)',
      }}>
        {/* Logo */}
        <div style={{ padding: '20px 0 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: 28, height: 28, borderRadius: '8px', background: '#11301d',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#53f293', fontFamily: 'Poppins, system-ui' }}>N</span>
          </div>
          <span style={{ fontSize: '16px', fontWeight: 700, color: '#08180f', fontFamily: 'Poppins, system-ui' }}>NeoTaste</span>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 32px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#08180f', marginBottom: '8px', fontFamily: 'Poppins, system-ui' }}>
            Yuppy!
          </h2>
          <p style={{ fontSize: '16px', fontWeight: 500, color: '#08180f', marginBottom: '32px', opacity: 0.7, fontFamily: 'Poppins, system-ui' }}>
            Want to add more?
          </p>

          {/* Stars */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '40px' }}>
            {[1, 2, 3, 4, 5].map(star => (
              <button
                key={star}
                onClick={() => setStarRating(star)}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill={star <= (hoveredStar || starRating) ? '#08180f' : 'none'}
                    stroke="#08180f"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Skip */}
        <button
          onClick={() => setStep(4)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '16px', marginBottom: 'env(safe-area-inset-bottom, 16px)',
            fontSize: '14px', fontWeight: 500, color: 'rgba(8,24,15,0.5)',
            fontFamily: 'Poppins, system-ui',
          }}
        >
          Skip
        </button>
      </div>
    );
  }

  if (step === 4) {
    return (
      <div style={{
        height: '100%', background: '#fff',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        paddingTop: 'env(safe-area-inset-top, 20px)',
      }}>
        {/* Logo */}
        <div style={{ padding: '20px 0 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: 28, height: 28, borderRadius: '8px', background: '#53f293',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#08180f', fontFamily: 'Poppins, system-ui' }}>N</span>
          </div>
          <span style={{ fontSize: '16px', fontWeight: 700, color: '#0a0a0a', fontFamily: 'Poppins, system-ui' }}>NeoTaste</span>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 32px', textAlign: 'center' }}>
          <span style={{ fontSize: '48px', marginBottom: '16px' }}>🙌</span>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#0a0a0a', marginBottom: '12px', fontFamily: 'Poppins, system-ui' }}>
            Thank you!
          </h2>
          <p style={{ fontSize: '15px', color: '#737373', lineHeight: 1.6, maxWidth: '280px', fontFamily: 'Poppins, system-ui' }}>
            Your review is now visible to your friends and NeoTaste members.
          </p>

          <button
            onClick={onComplete}
            style={{
              marginTop: '32px',
              background: '#53f293', color: '#08180f',
              border: 'none', borderRadius: '10px',
              padding: '14px 32px',
              display: 'flex', alignItems: 'center', gap: '8px',
              fontSize: '15px', fontWeight: 700, cursor: 'pointer',
              fontFamily: 'Poppins, system-ui',
              transition: 'transform 100ms',
            }}
            onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
            onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Share with friends
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 12V20C4 20.55 4.45 21 5 21H19C19.55 21 20 20.55 20 20V12" stroke="#08180f" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M12 3L12 15M12 3L8 7M12 3L16 7" stroke="#08180f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Skip */}
        <button
          onClick={onComplete}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '16px', marginBottom: 'env(safe-area-inset-bottom, 16px)',
            fontSize: '14px', fontWeight: 500, color: '#737373',
            fontFamily: 'Poppins, system-ui',
          }}
        >
          Skip
        </button>
      </div>
    );
  }

  // Steps 1 & 2: overlay + bottom sheet
  return (
    <div style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
      {/* Booking confirmation background */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
        {/* Restaurant image */}
        <div style={{
          flex: '0 0 45%',
          background: `linear-gradient(135deg, ${restaurant?.gradientFrom ?? '#1e1b4b'}, ${restaurant?.gradientTo ?? '#0f0a2e'})`,
          position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {/* NeoTaste badge */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: '12px',
              background: 'rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: '22px', fontWeight: 700, color: '#fff', fontFamily: 'Poppins, system-ui' }}>N</span>
            </div>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#fff', fontFamily: 'Poppins, system-ui' }}>NeoTaste</span>
          </div>
        </div>

        {/* Booking info */}
        <div style={{
          flex: 1,
          background: '#11301d',
          padding: '20px 24px',
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '4px', fontFamily: 'Poppins, system-ui' }}>
            {restaurantName}
          </h3>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '14px', fontFamily: 'Poppins, system-ui' }}>
            Oranienstraße 204, 10999 Berlin
          </p>
          <p style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '16px', fontFamily: 'Poppins, system-ui' }}>
            Menu Upgrade
          </p>
          <div>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', fontFamily: 'Poppins, system-ui', marginBottom: '4px' }}>
              Redeemed
            </p>
            <p style={{ fontSize: '28px', fontWeight: 700, color: '#fff', fontFamily: 'Poppins, system-ui', letterSpacing: '2px' }}>
              18:23:23
            </p>
          </div>
        </div>
      </div>

      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.45)',
      }} />

      {/* Bottom sheet */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: '#fff',
        borderRadius: '20px 20px 0 0',
        padding: '12px 24px 40px',
        paddingBottom: 'calc(40px + env(safe-area-inset-bottom, 0px))',
      }}>
        {/* Grabber */}
        <div style={{
          width: 36, height: 4, borderRadius: 2, background: '#e5e5e5',
          margin: '0 auto 20px',
        }} />

        {step === 1 && (
          <>
            <p style={{ fontSize: '13px', color: '#737373', textAlign: 'center', marginBottom: '4px', fontFamily: 'Poppins, system-ui' }}>
              Rate your visit to
            </p>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0a0a0a', textAlign: 'center', marginBottom: '24px', fontFamily: 'Poppins, system-ui' }}>
              How did it go?
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              {reactions.map(r => (
                <button
                  key={r.id}
                  onClick={() => handleReactionTap(r.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '7px',
                    padding: '12px 20px',
                    border: `2px solid ${reaction === r.id ? '#11301d' : '#e5e5e5'}`,
                    borderRadius: '28px',
                    background: reaction === r.id ? '#f5f5f5' : '#fff',
                    cursor: 'pointer',
                    fontSize: '14px', fontWeight: 600, color: '#0a0a0a',
                    fontFamily: 'Poppins, system-ui',
                    transition: 'all 100ms',
                  }}
                  onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.96)')}
                  onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <span style={{ fontSize: '18px' }}>{r.emoji}</span>
                  {r.label}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <p style={{ fontSize: '13px', color: '#737373', textAlign: 'center', marginBottom: '4px', fontFamily: 'Poppins, system-ui' }}>
              Rate your visit to
            </p>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0a0a0a', textAlign: 'center', marginBottom: '24px', fontFamily: 'Poppins, system-ui' }}>
              What was the occasion?
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              {occasions.map(o => (
                <button
                  key={o.id}
                  onClick={() => handleOccasionTap(o.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '7px',
                    padding: '12px 18px',
                    border: `2px solid ${occasion === o.id ? '#11301d' : '#e5e5e5'}`,
                    borderRadius: '28px',
                    background: occasion === o.id ? '#f5f5f5' : '#fff',
                    cursor: 'pointer',
                    fontSize: '14px', fontWeight: 600, color: '#0a0a0a',
                    fontFamily: 'Poppins, system-ui',
                    transition: 'all 100ms',
                  }}
                  onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.96)')}
                  onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <span style={{ fontSize: '18px' }}>{o.emoji}</span>
                  {o.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
