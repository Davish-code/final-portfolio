import { useEffect } from 'react';
import Lenis from 'lenis';

import { Scene } from './components/scene/Scene';
import { Sidebar } from './components/ui/Sidebar';
import { BottomNav } from './components/ui/BottomNav';

import { Hero } from './components/sections/Hero';
import { SelectedWork } from './components/sections/SelectedWork';
import { Architecture } from './components/sections/Architecture';
import { NeuralKernels } from './components/sections/NeuralKernels';
import { SystemLog } from './components/sections/SystemLog';
import { EstablishLink } from './components/sections/EstablishLink';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Sidebar />
      <div className="lg:pl-64 relative">
        <main className="relative pb-20 lg:pb-0 min-h-screen w-full bg-transparent flex flex-col">
          <Scene />
          
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] bg-primary-container/10 blur-[140px] rounded-full"></div>
            <div className="absolute top-1/2 -left-48 w-[500px] h-[500px] bg-tertiary-container/5 blur-[160px] rounded-full"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#534434_1px,transparent_1px)] [background-size:32px_32px] opacity-15"></div>
          </div>

          <Hero />
          <SelectedWork />
          <Architecture />
          <NeuralKernels />
          <SystemLog />
          <EstablishLink />
        </main>
      </div>
      <BottomNav />
    </>
  );
}

export default App;
