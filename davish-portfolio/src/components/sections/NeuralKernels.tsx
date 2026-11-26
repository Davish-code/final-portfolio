import { useState } from 'react';
import { techStackData } from '../../data/techStack';
import { cn } from '../../utils/cn';

export function NeuralKernels() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories = activeTab === 'all'
    ? techStackData
    : techStackData.filter(cat => cat.id === activeTab);

  const totalSkillsCount = techStackData.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="neural-kernels" className="relative z-10 w-full px-space-md lg:px-space-2xl py-space-xl lg:py-space-3xl border-t border-surface-container">
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between gap-space-md mb-space-lg lg:mb-space-2xl">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-code text-label-code text-primary font-bold">[ 04 // CAPABILITIES ]</span>
            <span className="h-px w-24 bg-surface-variant"></span>
            <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant uppercase tracking-widest hidden sm:inline">
              STRUCTURED DOMAIN EXPERTISE
            </span>
          </div>
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-extrabold tracking-tight">
            Technical Arsenal.
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-space-xs p-1 bg-surface-container-low/70 backdrop-blur-md rounded-lg border border-surface-container">
          <button
            onClick={() => setActiveTab('all')}
            className={cn(
              "px-space-sm py-1 rounded font-label-mono-xs text-label-mono-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer",
              activeTab === 'all'
                ? "bg-primary text-on-primary font-bold shadow-sm"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50"
            )}
          >
            <span>ALL</span>
            <span className={cn("px-1.5 py-0.2 rounded text-[9px]", activeTab === 'all' ? "bg-black/20" : "bg-surface-container-high")}>
              {totalSkillsCount}
            </span>
          </button>

          {techStackData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={cn(
                "px-space-sm py-1 rounded font-label-mono-xs text-label-mono-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer",
                activeTab === category.id
                  ? "bg-primary text-on-primary font-bold shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50"
              )}
            >
              <span className="material-symbols-outlined text-[14px]">{category.icon}</span>
              <span className="hidden md:inline">{category.title.split(' ')[0]}</span>
              <span className={cn("px-1.5 py-0.2 rounded text-[9px]", activeTab === category.id ? "bg-black/20" : "bg-surface-container-high")}>
                {category.skills.length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg items-stretch">
        {filteredCategories.map((cat, idx) => {
          // Highlight prominent cards like Languages and Hardware
          const isLargeCard = cat.id === 'languages-frameworks' && activeTab === 'all';
          const isAcademicCard = cat.id === 'academic-exposure' && activeTab === 'all';

          return (
            <div
              key={cat.id}
              className={cn(
                "p-space-md sm:p-space-lg lg:p-space-xl bg-surface-container-low/60 hover:bg-surface-container-high/70 backdrop-blur-md rounded-2xl border transition-all duration-300 shadow-xl relative overflow-hidden group flex flex-col justify-between",
                cat.borderClass,
                isLargeCard && "md:col-span-2 lg:col-span-2",
                isAcademicCard && "md:col-span-2 lg:col-span-1"
              )}
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-60"></div>

              <div>
                {/* Header Information */}
                <div className="flex items-center justify-between gap-space-sm pb-space-sm mb-space-md border-b border-surface-container-high/60">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-primary">
                      {cat.icon}
                    </span>
                    <span className="font-label-code text-label-code text-on-surface-variant/80 font-bold tracking-wider">
                      {cat.code}
                    </span>
                  </div>

                  <span className={cn("px-2 py-0.5 rounded font-label-mono-xs text-[10px] font-bold tracking-widest uppercase border", cat.badgeClass)}>
                    {cat.skills.length} SKILLS
                  </span>
                </div>

                <div className="mb-space-md">
                  <h3 className="font-headline-md text-[20px] lg:text-[22px] text-on-surface font-extrabold tracking-tight group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <p className="font-body-sm text-[13px] text-on-surface-variant/80 mt-1 leading-relaxed">
                    {cat.subtitle}
                  </p>
                </div>

                {/* Skills Chips Matrix */}
                <div className="flex flex-wrap gap-2 pt-space-xs">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-surface-container-high/70 hover:bg-surface-container-highest border border-surface-container-highest/80 hover:border-primary/50 text-on-surface font-label-mono-sm text-[12px] flex items-center gap-2 transition-all duration-200 group/chip cursor-default shadow-sm hover:shadow-primary/5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/70 group-hover/chip:bg-primary transition-colors"></span>
                      <span className="tracking-wide">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Identifier */}
              <div className="pt-space-md mt-space-lg border-t border-surface-container-high/40 flex items-center justify-between font-label-mono-xs text-[10px] text-on-surface-variant/60">
                <span className="uppercase tracking-widest">
                  SYS_MODULE // 0{idx + 1}
                </span>
                <span className="text-primary font-bold tracking-wider flex items-center gap-1">
                  <span>ONLINE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
