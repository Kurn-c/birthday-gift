import { useState } from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import Welcome from '@/components/Welcome';
import GiftUnwrap from '@/components/GiftUnwrap';
import MemoryGallery from '@/components/MemoryGallery';
import Reasons from '@/components/Reasons';
import LoveLetter from '@/components/LoveLetter';
import Closing from '@/components/Closing';

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />

      {!entered ? (
        <Welcome onEnter={() => setEntered(true)} />
      ) : (
        <main className="relative z-10">
          <GiftUnwrap />
          <MemoryGallery />
          <Reasons />
          <LoveLetter />
          <Closing onReplay={() => setEntered(false)} />
        </main>
      )}
    </div>
  );
}
