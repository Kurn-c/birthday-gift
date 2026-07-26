import { useEffect, useRef, useState } from 'react';
import { content } from '@/content';
import { Confetti } from './FloatingHearts';
import { Heart, Music, Volume2, VolumeX, RotateCcw } from 'lucide-react';

export default function Closing({ onReplay }: { onReplay: () => void }) {
  const [confetti, setConfetti] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // burst on mount
    setConfetti(true);
    const t = setTimeout(() => setConfetti(false), 5000);
    return () => clearTimeout(t);
  }, []);

  const toggleMusic = () => {
    const a = audioRef.current;
    if (!a) return;
    if (musicOn) {
      a.pause();
      setMusicOn(false);
    } else {
      a.volume = 0.4;
      a.play().catch(() => {
        // autoplay can be blocked; user can retry
      });
      setMusicOn(true);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      <Confetti fire={confetti} />
      <div className="absolute inset-0 bg-gradient-to-b from-blush-100 via-cream-100 to-blush-200" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(232,194,112,0.25),transparent_60%)]" />

      <div className="relative z-10 text-center max-w-2xl animate-fadeUp">
        <Heart className="mx-auto h-10 w-10 text-blush-500 mb-5 animate-pulseSoft" fill="currentColor" />
        <h2 className="font-display text-4xl md:text-6xl text-ink-900 font-semibold leading-tight">
          {content.closingLine}
        </h2>
        <p className="mt-5 font-script text-2xl text-gold-600">
          {content.signature}
        </p>
        <p className="mt-1 font-display text-xl text-ink-800">{content.fromName}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button onClick={onReplay} className="btn-gold">
            <RotateCcw className="h-4 w-4" />
            Relive it again
          </button>
          <button
            onClick={toggleMusic}
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3
                       bg-white/70 backdrop-blur border border-white/70 shadow-md
                       text-ink-800 transition hover:scale-105 active:scale-95"
            aria-label={musicOn ? 'Mute music' : 'Play music'}
          >
            {musicOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            <Music className="h-4 w-4" />
            {musicOn ? 'Music on' : 'Play music'}
          </button>
        </div>

        <p className="mt-10 text-xs text-ink-700/50 tracking-widest uppercase">
          {content.birthday.month} {content.birthday.day}, {content.birthday.year}
        </p>
      </div>

      {/* Ambient instrumental loop (royalty-free) */}
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=relaxing-mountains-rivers-streams-relaxing-sound-18178.mp3"
      />
    </section>
  );
}
