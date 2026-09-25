import { profile } from '../../data/profile';

export function Architecture() {
  return (
    <section id="architecture" className="relative z-10 w-full px-space-md lg:px-space-2xl py-space-xl lg:py-space-3xl border-t border-surface-container">
      <div className="flex flex-wrap items-end justify-between gap-space-md mb-space-lg lg:mb-space-2xl">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-code text-label-code text-primary font-bold">[ 03 // ARCHITECTURE ]</span>
            <span className="h-px w-24 bg-surface-variant"></span>
          </div>
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-extrabold tracking-tight">
            About Me.
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-center">
        <div className="flex flex-col gap-space-md p-space-lg md:p-space-xl bg-surface-container-low/50 backdrop-blur-xl rounded-2xl border border-surface-container">
          <span className="font-label-mono-xs text-label-mono-xs text-primary uppercase tracking-widest">// PROFILE SUMMARY</span>
          <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant leading-relaxed whitespace-pre-line">
            {profile.bio}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-space-md">
          <div className="p-space-md md:p-space-lg bg-surface-container-low/80 backdrop-blur-md rounded-xl border border-surface-container flex flex-col gap-space-xs">
            <span className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary font-bold">{profile.stats.projects}+</span>
            <span className="font-label-mono-xs md:font-label-mono-sm text-label-mono-xs md:text-label-mono-sm text-on-surface-variant uppercase tracking-widest">Projects</span>
          </div>
          <div className="p-space-md md:p-space-lg bg-surface-container-low/80 backdrop-blur-md rounded-xl border border-surface-container flex flex-col gap-space-xs">
            <span className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-secondary font-bold">{profile.stats.technologies}+</span>
            <span className="font-label-mono-xs md:font-label-mono-sm text-label-mono-xs md:text-label-mono-sm text-on-surface-variant uppercase tracking-widest">Tech Stack</span>
          </div>
          <div className="p-space-md md:p-space-lg bg-surface-container-low/80 backdrop-blur-md rounded-xl border border-surface-container flex flex-col gap-space-xs col-span-2">
            <span className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-bold">{profile.stats.yearsCoding}+</span>
            <span className="font-label-mono-xs md:font-label-mono-sm text-label-mono-xs md:text-label-mono-sm text-on-surface-variant uppercase tracking-widest">Years Coding</span>
          </div>
        </div>
      </div>
    </section>
  );
}
