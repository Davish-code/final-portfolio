import { profile } from '../../data/profile';

export function NeuralKernels() {
  return (
    <section id="neural-kernels" className="relative z-10 w-full px-space-md lg:px-space-2xl py-space-xl lg:py-space-3xl border-t border-surface-container">
      <div className="flex flex-wrap items-end justify-between gap-space-md mb-space-lg lg:mb-space-2xl">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-code text-label-code text-primary font-bold">[ 04 // CAPABILITIES ]</span>
            <span className="h-px w-24 bg-surface-variant"></span>
          </div>
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-extrabold tracking-tight">
            Technical Arsenal.
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-space-md">
        {profile.skills.map((skill, i) => (
          <div key={i} className="flex items-center justify-center p-space-md lg:p-space-lg bg-surface-container-low/60 hover:bg-surface-container-high/80 transition-all backdrop-blur-md rounded-xl border border-surface-container group shadow-sm hover:shadow-primary/5">
            <span className="font-label-mono-xs md:font-label-mono-sm text-label-mono-xs md:text-label-mono-sm text-on-surface-variant group-hover:text-primary transition-colors text-center uppercase tracking-widest">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
