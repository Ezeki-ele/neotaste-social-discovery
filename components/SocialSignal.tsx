import type { SocialSignal as SocialSignalType } from '@/lib/data';

interface Props {
  signal: SocialSignalType;
  size?: 'sm' | 'md';
}

export default function SocialSignal({ signal, size = 'sm' }: Props) {
  const fontSize = size === 'md' ? '13px' : '12px';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <SignalIcon type={signal.type} />
      <span style={{ fontSize, color: '#737373', fontWeight: 500, lineHeight: 1.3, fontFamily: 'Poppins, system-ui' }}>
        {signal.text}
      </span>
    </div>
  );
}

function SignalIcon({ type }: { type: SocialSignalType['type'] }) {
  if (type === 'friend') {
    return (
      <div style={{
        width: 18, height: 18, borderRadius: '50%',
        background: '#bafad4',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" fill="#11301d" />
          <path d="M4 20C4 16.69 7.58 14 12 14C16.42 14 20 16.69 20 20" stroke="#11301d" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  if (type === 'community') {
    return (
      <div style={{
        width: 18, height: 18, borderRadius: '50%',
        background: '#f5f5f5',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
          <circle cx="9" cy="7" r="3" fill="#737373" />
          <circle cx="16" cy="7" r="3" fill="#a3a3a3" />
          <path d="M2 19C2 16.24 5.13 14 9 14" stroke="#737373" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M12 19C12 16.24 14.69 14 18 14C21.31 14 24 16.24 24 19" stroke="#a3a3a3" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  if (type === 'occasion') {
    return (
      <div style={{
        width: 18, height: 18, borderRadius: '50%',
        background: '#fff592',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="#ecbb06" />
        </svg>
      </div>
    );
  }
  // momentum
  return (
    <div style={{
      width: 18, height: 18, borderRadius: '50%',
      background: '#dff0ff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
    }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L4.09 12.11A1 1 0 0 0 5 14h7l-1 8 8.91-10.11A1 1 0 0 0 19 10h-7l1-8z" fill="#069af1" />
      </svg>
    </div>
  );
}
