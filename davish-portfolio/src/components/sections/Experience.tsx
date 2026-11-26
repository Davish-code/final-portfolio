import { experiencesData } from '../../data/experience';
import { cn } from '../../utils/cn';

export function Experience() {
  return (
    <section id="experience" className="relative z-10 w-full px-space-md lg:px-space-2xl py-space-xl lg:py-space-3xl border-t border-surface-container">
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between gap-space-md mb-space-xl lg:mb-space-2xl">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-code text-label-code text-primary font-bold">[ 06 // EXPERIENCE ]</span>
            <span className="h-px w-24 bg-surface-variant"></span>
            <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant uppercase tracking-widest hidden sm:inline">
              PROFESSIONAL TRAJECTORY
            </span>
          </div>
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-extrabold tracking-tight">
            Work History.
          </h2>
        </div>

        {/* Timeline Status Legend */}
        <div className="flex items-center gap-space-md px-space-md py-space-xs bg-surface-container-low/70 backdrop-blur-md rounded-lg border border-surface-container font-label-mono-xs text-label-mono-xs text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_8px_rgba(255,193,116,0.9)]"></span>
            </span>
            <span className="text-on-surface font-semibold uppercase tracking-wider">CURRENT POSITION</span>
          </div>
          <span className="text-outline-variant">|</span>
          <span className="text-outline uppercase tracking-wider hidden sm:inline">TIMELINE ASCENDING ↑</span>
        </div>
      </div>

      {/* Vertical Ascending Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Continuous Vertical Beam Line (Gradient from bottom to top) */}
        <div className="absolute left-4 sm:left-6 lg:left-8 top-3 bottom-3 w-[2px] bg-gradient-to-t from-primary/30 via-primary/60 to-primary"></div>

        {/* Top Upward Arrow Indicator */}
        <div className="absolute -top-3 left-[11px] sm:left-[19px] lg:left-[27px] flex items-center justify-center text-primary text-[11px] font-bold">
          ▲
        </div>

        {/* Timeline Items (experiencesData is ordered top = current / recent, bottom = earlier) */}
        <div className="flex flex-col gap-space-xl lg:gap-space-2xl">
          {experiencesData.map((exp, idx) => {
            const isLatest = exp.isCurrent;

            return (
              <div key={exp.id} className="relative pl-12 sm:pl-16 lg:pl-20 group">
                {/* Timeline Node Point on the line */}
                <div 
                  className={cn(
                    "absolute left-4 sm:left-6 lg:left-8 top-6 -translate-x-1/2 rounded-full transition-all duration-300 z-10",
                    isLatest 
                      ? "w-5 h-5 bg-surface border-2 border-primary shadow-[0_0_15px_rgba(255,193,116,0.9)] flex items-center justify-center" 
                      : "w-3.5 h-3.5 bg-surface border-2 border-primary/60 group-hover:border-primary group-hover:bg-primary/20 shadow-[0_0_8px_rgba(255,193,116,0.3)]"
                  )}
                >
                  {isLatest && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                  )}
                </div>

                {/* Experience Card */}
                <div 
                  className={cn(
                    "p-space-md sm:p-space-lg lg:p-space-xl rounded-2xl border transition-all duration-300 shadow-xl relative overflow-hidden backdrop-blur-md flex flex-col gap-space-md",
                    isLatest
                      ? "bg-surface-container-low/75 hover:bg-surface-container-high/80 border-primary/40 shadow-primary/5 hover:border-primary/60"
                      : "bg-surface-container-low/60 hover:bg-surface-container-high/70 border-surface-container hover:border-surface-container-high"
                  )}
                >
                  {/* Glowing accent bar on left */}
                  <div 
                    className={cn(
                      "absolute top-0 left-0 w-1.5 h-full transition-all duration-300",
                      isLatest 
                        ? "bg-primary group-hover:w-2 shadow-[0_0_10px_rgba(255,193,116,0.5)]" 
                        : "bg-surface-container-highest group-hover:bg-primary/60 group-hover:w-2"
                    )}
                  ></div>

                  {/* Top Bar with Badge, Role & Organization */}
                  <div className="flex flex-wrap items-start justify-between gap-space-sm pb-space-sm border-b border-surface-container-high/50">
                    <div className="flex flex-col gap-1">
                      <div className="flex flex-wrap items-center gap-2">
                        {isLatest ? (
                          <span className="px-2.5 py-0.5 rounded font-label-mono-xs text-[10px] font-bold tracking-wider bg-primary/20 text-primary border border-primary/30 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            ACTIVE // CURRENT POSITION
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded font-label-mono-xs text-[10px] font-bold tracking-wider bg-surface-container-highest/80 text-on-surface-variant border border-surface-container-high">
                            {exp.type.toUpperCase()}
                          </span>
                        )}
                        <span className="font-label-mono-xs text-[10px] text-outline uppercase tracking-wider">
                          {exp.location}
                        </span>
                      </div>

                      <h3 className="font-headline-md text-[20px] lg:text-[24px] text-on-surface font-extrabold tracking-tight group-hover:text-primary transition-colors mt-0.5">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-1.5 font-label-mono-sm text-label-mono-sm text-primary font-semibold">
                        <span>{exp.company}</span>
                        {exp.companyOrg && (
                          <>
                            <span className="text-on-surface-variant/50">•</span>
                            <span className="text-on-surface-variant font-normal">{exp.companyOrg}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Timeline Date Badge */}
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-high/80 rounded font-label-mono-xs text-label-mono-xs text-on-surface font-semibold tracking-wider border border-surface-container-highest/60 self-start">
                      <span className="material-symbols-outlined text-[13px] text-primary">calendar_month</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Responsibilities & Achievements List */}
                  <ul className="flex flex-col gap-2.5 font-body-md text-[14px] lg:text-[15px] text-on-surface-variant leading-relaxed">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-primary font-bold text-[14px] select-none mt-0.5">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech & Competency Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-space-xs mt-auto border-t border-surface-container-high/30">
                    <span className="font-label-mono-xs text-[9px] text-outline uppercase tracking-widest mr-1">
                      TECH FOCUS:
                    </span>
                    {exp.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-0.5 bg-surface-container-highest/60 hover:bg-surface-container-highest rounded text-on-surface-variant font-label-mono-xs text-[9px] uppercase tracking-wider transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
