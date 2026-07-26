import { useEffect, useState } from 'react';
import { content } from '@/content';
import { useReveal } from './FloatingHearts';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function MemoryGallery() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const next = () => setActive((i) => (i === null ? i : (i + 1) % content.memories.length));
  const prev = () =>
    setActive((i) => (i === null ? i : (i - 1 + content.memories.length) % content.memories.length));

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <section id="memories" className="relative px-6 py-24">
      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-5xl mx-auto`}>
        <div className="text-center mb-12">
          <p className="font-script text-2xl text-blush-500 mb-2">moments I never want to forget</p>
          <h2 className="section-title">Our Memories</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {content.memories.map((m, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="group relative overflow-hidden rounded-2xl shadow-md aspect-[4/5] focus:outline-none focus:ring-2 focus:ring-blush-400"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                src={m.src}
                alt={m.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <p className="absolute bottom-3 left-3 right-3 text-left text-white font-display text-base md:text-lg drop-shadow-md translate-y-1 group-hover:translate-y-0 transition-transform">
                {m.caption}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/80 backdrop-blur-sm p-4 animate-fadeUp"
          onClick={close}
        >
          <button
            className="absolute top-5 right-5 text-white/80 hover:text-white transition"
            onClick={close}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            className="absolute left-4 md:left-8 text-white/80 hover:text-white transition"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <figure
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={content.memories[active].src}
              alt={content.memories[active].caption}
              className="w-full max-h-[75vh] object-contain rounded-xl shadow-2xl animate-popIn"
            />
            <figcaption className="mt-4 text-center font-display text-xl text-white">
              {content.memories[active].caption}
            </figcaption>
          </figure>
          <button
            className="absolute right-4 md:right-8 text-white/80 hover:text-white transition"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </section>
  );
}
