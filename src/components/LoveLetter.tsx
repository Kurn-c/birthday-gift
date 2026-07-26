import { useEffect, useRef, useState } from 'react';
import { content } from '@/content';
import { useReveal } from './FloatingHearts';
import { Mail, Heart, X } from 'lucide-react';

export default function LoveLetter() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState(false);
  const [typed, setTyped] = useState('');
  const fullText = content.letter.paragraphs.join('\n\n');
  const idxRef = useRef(0);

  useEffect(() => {
    if (!open) return;
    idxRef.current = 0;
    setTyped('');
    const timer = setInterval(() => {
      idxRef.current += 1;
      setTyped(fullText.slice(0, idxRef.current));
      if (idxRef.current >= fullText.length) clearInterval(timer);
    }, 18);
    return () => clearInterval(timer);
  }, [open, fullText]);

  return (
    <section id="letter" className="relative px-6 py-24">
      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-3xl mx-auto text-center`}>
        <p className="font-script text-2xl text-blush-500 mb-2">something I need you to read</p>
        <h2 className="section-title mb-10">A Letter For You</h2>

        {!open ? (
          <button
            onClick={() => setOpen(true)}
            className="group relative inline-flex flex-col items-center"
            aria-label="Open the letter"
          >
            <span className="relative flex h-28 w-44 items-center justify-center rounded-lg bg-gradient-to-br from-cream-200 to-cream-300 shadow-xl shadow-cream-300/40 transition-transform group-hover:-translate-y-1 group-hover:scale-105">
              <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold-500/60 flex items-center justify-center bg-cream-50">
                <Mail className="h-7 w-7 text-blush-600" />
              </span>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-ink-700/60 bg-cream-50 px-2 rounded">
                sealed with love
              </span>
            </span>
            <span className="mt-5 text-sm text-ink-700/70 group-hover:text-blush-600 transition-colors animate-pulseSoft">
              tap to open
            </span>
          </button>
        ) : (
          <div className="glass-card rounded-3xl p-8 md:p-12 text-left animate-popIn relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-ink-700/40 hover:text-blush-600 transition"
              aria-label="Close letter"
            >
              <X className="h-5 w-5" />
            </button>
            <p className="font-script text-2xl text-blush-600 mb-5">
              {content.letter.greeting}
            </p>
            <div className="font-display text-lg md:text-xl text-ink-800 leading-relaxed whitespace-pre-wrap">
              {typed}
              <span
                className="inline-block w-[2px] h-[1em] bg-blush-500 ml-0.5 align-middle"
                style={{ animation: 'typeCursor 1s step-end infinite' }}
              />
            </div>
            {typed.length === fullText.length && (
              <div className="mt-8 text-right animate-fadeUp">
                <p className="font-script text-xl text-gold-600">{content.letter.signOff}</p>
                <p className="font-display text-lg text-ink-800 mt-1">{content.fromName}</p>
                <Heart className="inline h-4 w-4 text-blush-500 mt-2" fill="currentColor" />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
