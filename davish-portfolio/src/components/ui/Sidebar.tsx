import { useEffect, useState } from 'react';
import { cn } from '../../utils/cn';

const NAV_ITEMS = [
  { id: 'hero', label: '01 // INDEX' },
  { id: 'projects', label: '02 // SELECTED WORK' },
  { id: 'architecture', label: '03 // ARCHITECTURE' },
  { id: 'neural-kernels', label: '04 // NEURAL KERNELS' },
  { id: 'system-log', label: '05 // SYSTEM LOG' },
  { id: 'establish-link', label: '06 // ESTABLISH LINK' },
];

export function Sidebar() {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const observers = new Map();
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_ITEMS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.set(id, element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update hash without jump
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest/85 backdrop-blur-2xl z-50 hidden lg:flex flex-col justify-between p-space-md border-r border-surface-container/50">
      <div className="flex flex-col gap-space-lg">
        <div className="flex items-center justify-between pb-space-md border-b border-surface-container">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-code text-label-code text-primary font-bold tracking-widest">[ ⟡ DT-01 ]</span>
          </div>
          <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant uppercase tracking-widest">SYSTEM_OS</span>
        </div>
        
        <div className="flex flex-col gap-space-xs">
          <span className="font-headline-md text-headline-md text-on-surface tracking-tighter uppercase font-bold">DAVISH TALREJA</span>
          <span className="font-label-mono-xs text-label-mono-xs text-primary uppercase tracking-widest">PRIN_SYS // CREATIVE TECH</span>
        </div>
        
        <nav className="flex flex-col gap-space-xs mt-space-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={cn(
                  "px-space-sm py-space-xs uppercase tracking-wider transition-colors rounded",
                  isActive 
                    ? "bg-primary-container text-on-primary-container font-bold" 
                    : "font-label-mono-sm text-label-mono-sm text-on-surface-variant hover:text-on-surface"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>

    </aside>
  );
}
