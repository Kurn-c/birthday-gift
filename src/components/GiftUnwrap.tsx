import * as React from 'react';
import { useState } from 'react';
import { content } from '@/content';
import { Confetti, useReveal } from './FloatingHearts';
import { Gift, Heart } from 'lucide-react';

export default function GiftUnwrap(): React.ReactElement {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [opened, setOpened] = useState(false);
  const [confetti, setConfetti] = useState(false);

  function handleOpen(): void {
    if (opened) return;
    setOpened(true);
    setConfetti(true);
    setTimeout(() => setConfetti(false), 5000);

  }

  return (
    <section id="gift" className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <Confetti fire={confetti} />
      <div
        ref={ref}
        className={`reveal ${visible ? 'is-visible' : ''} w-full max-w-2xl text-center`}
      >
        <p className="font-script text-2xl text-blush-500 mb-3">a little surprise…</p>
        <h2 className="section-title mb-10">Tap to unwrap your gift</h2>

        {/* The gift box */}
        <div
          className="relative mx-auto mb-12"
          style={{ width: 208, height: 220, perspective: 800 }}
        >
          {/* lid */}
          <div
            className="absolute left-1/2 top-0 z-20 cursor-pointer transition-transform duration-700"
            style={{
              width: 232,
              transformOrigin: 'top center',
              transform: opened
                ? 'translateX(-50%) rotateX(-120deg) translateY(-10px)'
                : 'translateX(-50%) rotateX(0deg)',
            }}
            onClick={handleOpen}
          >
            <div className="relative h-[72px] w-full rounded-lg bg-gradient-to-br from-blush-400 to-blush-600 shadow-lg shadow-blush-500/30">
              <span className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-6 bg-gold-400" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-gold-500 flex items-center justify-center shadow">
                <Heart className="h-5 w-5 text-white" fill="currentColor" />
              </span>
              {/* Bow on top of the lid */}
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-start z-30">
                {/* left loop */}
                <span className="block h-8 w-7 rounded-full border-2 border-gold-500 bg-gold-400/90 shadow-sm -rotate-[35deg] -mr-1" />
                {/* right loop */}
                <span className="block h-8 w-7 rounded-full border-2 border-gold-500 bg-gold-400/90 shadow-sm rotate-[35deg] -ml-1" />
                {/* center knot */}
                <span className="absolute left-1/2 top-1 -translate-x-1/2 h-4 w-3 rounded-sm bg-gold-600 shadow" />
              </span>
            </div>
          </div>

          {/* base */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 h-44 w-52 rounded-lg bg-gradient-to-br from-blush-500 to-blush-700 shadow-xl shadow-blush-600/40 overflow-hidden"
            onClick={handleOpen}
          >
            <span className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-6 bg-gold-400/80" />
            {!opened && (
              <span className="absolute inset-0 flex items-center justify-center text-white/80 text-sm font-sans animate-pulseSoft">
                <Gift className="h-8 w-8" />
              </span>
            )}
          </div>

          {/* glow when opened */}
          {opened && (
            <div className="absolute inset-0 -z-10 rounded-full bg-blush-300/40 blur-2xl animate-popIn" />
          )}
        </div>

        {/* Revealed message */}
        {opened && (
          <div className="glass-card rounded-3xl p-8 md:p-10 animate-popIn">
            <Heart className="mx-auto h-8 w-8 text-blush-500 mb-4" fill="currentColor" />
            {content.giftMessage.map((line, i) => (
              <p
                key={i}
                className="font-display text-xl md:text-2xl text-ink-800 leading-relaxed mb-3 last:mb-0 animate-fadeUp"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                {line}
              </p>
            ))}
            <p className="mt-6 font-script text-xl text-gold-600 animate-fadeUp [animation-delay:600ms]">
              — {content.fromName}
            </p>
          </div>
        )}

        {!opened && (
          <p className="text-ink-700/60 text-sm animate-pulseSoft">tap the box ↑</p>
        )}
      </div>
    </section>
  );
}
