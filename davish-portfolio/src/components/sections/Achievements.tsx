import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { achievementsData, type Achievement } from '../../data/achievements';
import { cn } from '../../utils/cn';

type FilterCategory = 'all' | 'hackathons' | 'courses';

export function Achievements() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedCert, setSelectedCert] = useState<Achievement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close modal on Escape key press and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  const filteredAchievements = activeFilter === 'all'
    ? achievementsData
    : achievementsData.filter(item => item.category === activeFilter);

  const hackathonsCount = achievementsData.filter(i => i.category === 'hackathons').length;
  const coursesCount = achievementsData.filter(i => i.category === 'courses').length;

  return (
    <section id="achievements" className="relative z-10 w-full px-space-md lg:px-space-2xl py-space-xl lg:py-space-3xl border-t border-surface-container bg-surface-container-lowest/60 backdrop-blur-xl">
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between gap-space-md mb-space-lg lg:mb-space-2xl">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-code text-label-code text-primary font-bold">[ 05 // ACHIEVEMENTS ]</span>
            <span className="h-px w-24 bg-surface-variant"></span>
            <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant uppercase tracking-widest hidden sm:inline">VERIFIED ACCREDITATIONS</span>
          </div>
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-extrabold tracking-tight">
            Credentials & Honors.
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-space-xs p-1 bg-surface-container-low/90 backdrop-blur-md rounded-lg border border-surface-container">
          <button
            onClick={() => setActiveFilter('all')}
            className={cn(
              "px-space-sm py-1 rounded font-label-mono-xs text-label-mono-xs uppercase tracking-wider transition-all flex items-center gap-1.5",
              activeFilter === 'all'
                ? "bg-primary text-on-primary font-bold shadow-sm"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50"
            )}
          >
            <span>ALL</span>
            <span className={cn("px-1.5 py-0.2 rounded text-[9px]", activeFilter === 'all' ? "bg-black/20" : "bg-surface-container-high")}>
              {achievementsData.length}
            </span>
          </button>
          
          <button
            onClick={() => setActiveFilter('hackathons')}
            className={cn(
              "px-space-sm py-1 rounded font-label-mono-xs text-label-mono-xs uppercase tracking-wider transition-all flex items-center gap-1.5",
              activeFilter === 'hackathons'
                ? "bg-primary text-on-primary font-bold shadow-sm"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50"
            )}
          >
            <span className="material-symbols-outlined text-[14px]">emoji_events</span>
            <span>HACKATHONS</span>
            <span className={cn("px-1.5 py-0.2 rounded text-[9px]", activeFilter === 'hackathons' ? "bg-black/20" : "bg-surface-container-high")}>
              {hackathonsCount}
            </span>
          </button>

          <button
            onClick={() => setActiveFilter('courses')}
            className={cn(
              "px-space-sm py-1 rounded font-label-mono-xs text-label-mono-xs uppercase tracking-wider transition-all flex items-center gap-1.5",
              activeFilter === 'courses'
                ? "bg-primary text-on-primary font-bold shadow-sm"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50"
            )}
          >
            <span className="material-symbols-outlined text-[14px]">school</span>
            <span>COURSES</span>
            <span className={cn("px-1.5 py-0.2 rounded text-[9px]", activeFilter === 'courses' ? "bg-black/20" : "bg-surface-container-high")}>
              {coursesCount}
            </span>
          </button>
        </div>
      </div>

      {/* Grid of Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg items-stretch">
        {filteredAchievements.map((item, idx) => {
          const isHackathon = item.category === 'hackathons';
          
          return (
            <div
              key={item.id}
              onClick={() => setSelectedCert(item)}
              className="group cursor-pointer p-space-md lg:p-space-lg bg-surface-container-low/80 hover:bg-surface-container-high/80 backdrop-blur-xl rounded-2xl border border-surface-container hover:border-primary/40 transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              {/* Glowing accent bar on left */}
              <div className={cn("absolute top-0 left-0 w-1.5 h-full transition-all duration-300", isHackathon ? "bg-amber-400 group-hover:w-2" : "bg-primary/80 group-hover:w-2")}></div>

              <div>
                {/* Header info badge */}
                <div className="flex items-center justify-between gap-2 pb-space-sm mb-space-sm border-b border-surface-container-high/60">
                  <div className="flex items-center gap-2">
                    <span className={cn("px-space-xs py-0.5 rounded font-label-mono-xs text-[10px] uppercase font-bold tracking-wider", isHackathon ? "bg-amber-400/20 text-amber-300 border border-amber-400/30" : "bg-primary/15 text-primary border border-primary/20")}>
                      {isHackathon ? '🏆 HACKATHON' : '📜 CERTIFICATION'}
                    </span>
                    {item.award && (
                      <span className="font-label-mono-xs text-[10px] text-amber-300 font-semibold tracking-wider">
                        {item.award}
                      </span>
                    )}
                  </div>
                  <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant/70 tracking-widest uppercase">
                    0{idx + 1} // REC
                  </span>
                </div>

                {/* Certificate Thumbnail Preview Container */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-highest/60 mb-space-md border border-surface-container group-hover:border-primary/30 transition-all">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top filter brightness-[0.92] contrast-[1.05] group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                    loading="lazy"
                  />
                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px]">
                    <span className="px-space-md py-space-xs bg-primary text-on-primary font-label-mono-sm text-label-mono-sm font-bold rounded shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <span className="material-symbols-outlined text-[16px]">visibility</span>
                      <span>VIEW CERTIFICATE</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-headline-md text-[18px] lg:text-[20px] text-on-surface font-bold leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="flex flex-col gap-0.5">
                    <span className="font-label-mono-xs text-label-mono-xs text-primary/90 uppercase tracking-widest font-semibold">
                      {item.issuer}
                    </span>
                    {item.issuerOrg && (
                      <span className="font-label-mono-xs text-[10px] text-on-surface-variant/70 uppercase tracking-wider">
                        via {item.issuerOrg}
                      </span>
                    )}
                  </div>

                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Footer with date and tags */}
              <div className="pt-space-md mt-space-md border-t border-surface-container-high/40 flex flex-col gap-space-sm">
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-surface-container-highest/60 rounded text-on-surface-variant/80 font-label-mono-xs text-[9px] uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 3 && (
                    <span className="px-1.5 py-0.5 text-on-surface-variant/60 font-label-mono-xs text-[9px]">
                      +{item.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between font-label-mono-xs text-[10px] text-on-surface-variant/60 pt-1">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px] text-primary">calendar_today</span>
                    {item.date}
                  </span>
                  <span className="text-primary font-bold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                    DETAILS
                    <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Certificate Lightbox Modal mounted directly to document.body */}
      {selectedCert && mounted && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
          data-lenis-prevent="true"
        >
          <div 
            className="relative w-full max-w-5xl max-h-[94vh] bg-surface-container-low border border-surface-container-high rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-space-md lg:px-space-lg py-3 bg-surface-container border-b border-surface-container-high shrink-0 z-10">
              <div className="flex items-center gap-space-xs font-label-code text-label-code text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-bold tracking-wider">[ VERIFIED RECORD // {selectedCert.category.toUpperCase()} ]</span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-space-sm py-1.5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface hover:text-primary font-label-mono-xs text-label-mono-xs rounded flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                <span>[ESC // CLOSE]</span>
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div 
              className="overflow-y-auto flex-1 p-space-md sm:p-space-lg lg:p-space-xl flex flex-col gap-space-lg [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-primary/40 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-surface-container"
              data-lenis-prevent="true"
            >
              {/* Certificate Image Frame - full aspect visible, responsive */}
              <div className="relative rounded-xl overflow-hidden bg-black/80 border border-surface-container-high/80 p-2 sm:p-4 flex items-center justify-center shadow-2xl">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[50vh] sm:max-h-[56vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
                />
              </div>

              {/* Certificate Details */}
              <div className="flex flex-col gap-space-md">
                <div className="flex flex-wrap items-start justify-between gap-space-md">
                  <div className="flex flex-col gap-1 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "px-space-xs py-0.5 rounded font-label-mono-xs text-[10px] uppercase font-bold",
                        selectedCert.category === 'hackathons'
                          ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                          : "bg-primary/20 text-primary border border-primary/30"
                      )}>
                        {selectedCert.category === 'hackathons' ? '🏆 1ST PLACE WINNER' : '📜 ACCREDITED CREDENTIAL'}
                      </span>
                      {selectedCert.award && (
                        <span className="font-label-mono-xs text-label-mono-xs text-amber-300 font-bold">
                          {selectedCert.award}
                        </span>
                      )}
                    </div>
                    <h2 className="font-headline-lg text-[22px] md:text-[26px] text-on-surface font-bold leading-tight">
                      {selectedCert.title}
                    </h2>
                    <span className="font-label-mono-sm text-label-mono-sm text-primary">
                      Issued by: {selectedCert.issuer} {selectedCert.issuerOrg && `(${selectedCert.issuerOrg})`}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-space-xs">
                    <a
                      href={selectedCert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-space-md py-space-xs bg-primary text-on-primary font-label-mono-sm text-label-mono-sm font-semibold rounded hover:bg-primary-fixed transition-all flex items-center gap-space-xs shadow-md"
                    >
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                      <span>OPEN FULL IMAGE</span>
                    </a>
                    <a
                      href={selectedCert.image}
                      download
                      className="px-space-md py-space-xs bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-mono-sm text-label-mono-sm rounded transition-all flex items-center gap-space-xs"
                    >
                      <span className="material-symbols-outlined text-[16px]">download</span>
                      <span>DOWNLOAD</span>
                    </a>
                  </div>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {selectedCert.description}
                </p>

                {/* Metadata Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-space-sm p-space-md bg-surface-container rounded-xl border border-surface-container-high font-label-mono-xs text-label-mono-xs">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-on-surface-variant/60 uppercase">Issue Date</span>
                    <span className="text-on-surface font-semibold">{selectedCert.date}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-on-surface-variant/60 uppercase">Category</span>
                    <span className="text-primary font-semibold">{selectedCert.categoryLabel}</span>
                  </div>
                  {selectedCert.credentialId && (
                    <div className="flex flex-col gap-0.5">
                      <span className="text-on-surface-variant/60 uppercase">Identifier</span>
                      <span className="text-on-surface font-semibold">{selectedCert.credentialId}</span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-space-xs">
                  {selectedCert.tags.map(tag => (
                    <span key={tag} className="px-space-sm py-1 bg-surface-container-highest/60 rounded text-on-surface-variant font-label-mono-xs text-label-mono-xs uppercase tracking-wider">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
