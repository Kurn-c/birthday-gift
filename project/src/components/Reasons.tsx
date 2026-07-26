import { useState } from 'react';
import { content } from '@/content';
import { useReveal } from './FloatingHearts';
import { Heart, Sparkles } from 'lucide-react';

export default function Reasons() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [flipped, setFlipped] = useState<boolean[]>(() =>
    content.reasons.map(() => false)
  );
  const discovered = flipped.filter(Boolean).length;
  const total = content.reasons.length;
  const allFound = discovered === total;

  const toggle = (i: number) =>
    setFlipped((f) => f.map((v, idx) => (idx === i ? !v : v)));

  return (
    <section id="reasons" className="relative px-6 py-24">
      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-5xl mx-auto`}>
        <div className="text-center mb-10">
          <p className="font-script text-2xl text-blush-500 mb-2">little truths about you</p>
          <h2 className="section-title">Reasons I Love You</h2>
          <p className="mt-4 text-ink-700/70">
            Tap each card to reveal one.{' '}
            <span className="font-medium text-blush-600">
              {discovered} of {total} discovered
            </span>
          </p>
          <div className="mx-auto mt-3 h-1.5 w-48 rounded-full bg-blush-100 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blush-400 to-gold-400 transition-all duration-500"
              style={{ width: `${(discovered / total) * 100}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {content.reasons.map((reason, i) => {
            const isFlipped = flipped[i];
            return (
              <button
                key={i}
                onClick={() => toggle(i)}
                className="group relative h-52 w-full text-left [perspective:1000px] focus:outline-none"
                aria-label={`Reason ${i + 1}`}
              >
                <div
                  className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
                  style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                >
                  {/* front */}
                  <div
                    className="absolute inset-0 [backface-visibility:hidden] rounded-2xl bg-gradient-to-br from-blush-100 to-cream-100 border border-white/70 shadow-md flex flex-col items-center justify-center p-4 group-hover:shadow-lg group-hover:-translate-y-1 transition-all"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow text-blush-500 mb-3">
                      <Heart className="h-6 w-6" fill="currentColor" />
                    </span>
                    <span className="font-display text-2xl text-blush-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="mt-1 text-[11px] uppercase tracking-widest text-ink-700/50">
                      tap to open
                    </span>
                  </div>
                  {/* back */}
                  <div
                    className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-gradient-to-br from-blush-500 to-blush-700 text-white shadow-lg flex items-center justify-center p-5"
                  >
                    <p className="font-display text-base md:text-lg leading-snug text-center">
                      {reason}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {allFound && (
          <div className="mt-10 text-center animate-popIn">
            <Sparkles className="mx-auto h-7 w-7 text-gold-500 mb-2" />
            <p className="font-script text-2xl text-blush-600">
              And so many more I could never fit on a page.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
