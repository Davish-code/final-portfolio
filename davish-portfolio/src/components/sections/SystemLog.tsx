import { profile } from '../../data/profile';

export function SystemLog() {
  return (
    <section id="system-log" className="relative z-10 w-full px-space-md lg:px-space-2xl py-space-xl lg:py-space-3xl border-t border-surface-container">
      <div className="flex flex-wrap items-end justify-between gap-space-md mb-space-lg lg:mb-space-2xl">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-code text-label-code text-primary font-bold">[ 05 // SYSTEM LOG ]</span>
            <span className="h-px w-24 bg-surface-variant"></span>
          </div>
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-extrabold tracking-tight">
            Execution History.
          </h2>
        </div>
      </div>
      
      <div className="relative border-l border-surface-variant ml-space-md lg:ml-space-xl pl-space-lg lg:pl-space-2xl flex flex-col gap-space-xl lg:gap-space-2xl">
        {profile.journey.map((item, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -left-[23px] lg:-left-[39px] top-2 w-3 h-3 bg-surface border-2 border-primary rounded-full group-hover:bg-primary transition-colors shadow-[0_0_10px_rgba(255,193,116,0)] group-hover:shadow-[0_0_10px_rgba(255,193,116,0.5)]"></div>
            
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-mono-xs md:font-label-mono-sm text-label-mono-xs md:text-label-mono-sm text-primary tracking-widest uppercase">{item.year}</span>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">{item.title}</h3>
              <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant leading-relaxed max-w-3xl mt-space-xs">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
