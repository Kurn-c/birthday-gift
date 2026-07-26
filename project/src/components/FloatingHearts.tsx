import React, { useEffect, useRef, useState } from 'react';
import { content } from '@/content';

type Heart = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  hue: string;
};

const hues = ['text-blush-300', 'text-blush-400', 'text-cream-300', 'text-gold-400'];

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const spawn = () => {
      const heart: Heart = {
        id: idRef.current++,
        left: Math.random() * 100,
        size: 14 + Math.random() * 26,
        duration: 9 + Math.random() * 8,
        delay: 0,
        hue: hues[Math.floor(Math.random() * hues.length)],
      };
      setHearts((h) => [...h, heart]);
      setTimeout(() => {
        setHearts((h) => h.filter((x) => x.id !== heart.id));
      }, heart.duration * 1000);
    };

    const interval = setInterval(spawn, 700);
    // pre-fill a few so it's not empty at first paint
    for (let i = 0; i < 6; i++) setTimeout(spawn, i * 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {hearts.map((h) => (
        <span
          key={h.id}
          className={`absolute bottom-0 ${h.hue} opacity-70`}
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animation: `floatUp ${h.duration}s linear forwards`,
          }}
        >
          <HeartIcon />
        </span>
      ))}
    </div>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M12 21s-7.5-4.9-10-9.2C.6 9 1.5 5.6 4.6 4.6 6.7 3.9 8.8 4.6 10 6.3c1.2-1.7 3.3-2.4 5.4-1.7 3.1 1 4 4.4 2.6 7.2-2.5 4.3-10 9.2-10 9.2z" />
    </svg>
  );
}

// Confetti burst — used by the gift unwrapping moment
export type ConfettiPiece = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
};

const confettiColors = ['#f95d8d', '#ffa6c0', '#e8c270', '#f9d9a3', '#ff7da6'];

export function Confetti({ fire }: { fire: boolean }) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    if (!fire) return;
    const batch: ConfettiPiece[] = Array.from({ length: 80 }).map(() => ({
      id: idRef.current++,
      left: Math.random() * 100,
      delay: Math.random() * 0.6,
      duration: 2.5 + Math.random() * 2,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      size: 6 + Math.random() * 8,
    }));
    setPieces(batch);
    const t = setTimeout(() => setPieces([]), 5000);
    return () => clearTimeout(t);
  }, [fire]);

  if (!fire) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 rounded-sm"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.4}px`,
            background: p.color,
            animation: `confettiFall ${p.duration}s ease-in ${p.delay}s forwards`,
          }}
        />
      ))}
    </div>
  );
}

// Reveal-on-scroll hook used by sections
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export { content };
