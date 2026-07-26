import { useState } from 'react';
import { content } from '@/content';
import { Heart } from 'lucide-react';

export default function Welcome({ onEnter }: { onEnter: () => void }) {
  const [leaving, setLeaving] = useState(false);

  const handleEnter = () => {
    setLeaving(true);
    setTimeout(onEnter, 900);
  };

  return (
    <section
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center px-6 text-center
        transition-all duration-700 ${
          leaving ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
        }`}
    >
      {/* soft radial backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-blush-100 via-cream-50 to-cream-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,166,192,0.35),transparent_60%)]" />

      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/70 shadow-lg animate-pulseSoft">
          <Heart className="h-7 w-7 text-blush-500" fill="currentColor" />
        </span>

        <p className="font-script text-2xl text-blush-500 mb-2 animate-fadeUp">
          {content.welcomeLine}
        </p>

        <h1 className="font-display text-5xl md:text-7xl font-semibold text-ink-900 leading-tight animate-fadeUp [animation-delay:150ms]">
          Happy Birthday,
          <br />
          <span className="text-shimmer">{content.wifeName}</span>
        </h1>

        {content.milestone && (
          <p className="mt-4 font-display text-xl text-ink-700 italic animate-fadeUp [animation-delay:300ms]">
            your {content.milestone} trip around the sun
          </p>
        )}

        <p className="mt-6 text-sm text-ink-700/70 tracking-widest uppercase animate-fadeUp [animation-delay:450ms]">
          {content.birthday.month} {content.birthday.day}, {content.birthday.year}
        </p>

        <button onClick={handleEnter} className="btn-gold mt-10 animate-fadeUp [animation-delay:600ms]">
          <Heart className="h-4 w-4" fill="currentColor" />
          Open your gift
        </button>

        <p className="mt-8 text-xs text-ink-700/50 animate-fadeUp [animation-delay:800ms]">
          made with love, just for you
        </p>
      </div>
    </section>
  );
}
