import { profile } from '../../data/profile';

export function EstablishLink() {
  return (
    <section id="establish-link" className="relative z-10 w-full px-space-md lg:px-space-2xl py-space-xl lg:py-space-3xl border-t border-surface-container">
      <div className="flex flex-wrap items-end justify-between gap-space-md mb-space-lg lg:mb-space-2xl">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-code text-label-code text-primary font-bold">[ 06 // ESTABLISH LINK ]</span>
            <span className="h-px w-24 bg-surface-variant"></span>
          </div>
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-extrabold tracking-tight">
            Secure Transmission.
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
        <div className="flex flex-col gap-space-md">
          <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant leading-relaxed max-w-lg">
            Whether you want to discuss a new system architecture, collaborate on an embedded project, or just say hello—my transmission lines are always open.
          </p>
          <div className="flex flex-col gap-space-sm mt-space-md">
            <div className="flex items-center gap-space-md">
              <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
              <span className="font-label-mono-sm text-label-mono-sm text-on-surface uppercase tracking-widest">{profile.location}</span>
            </div>
            <div className="flex items-center gap-space-md">
              <span className="material-symbols-outlined text-primary text-[20px]">mail</span>
              <a href={`mailto:${profile.email}`} className="font-label-mono-sm text-label-mono-sm text-on-surface hover:text-primary transition-colors uppercase tracking-widest">
                {profile.email}
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-space-md lg:items-end">
          <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant uppercase tracking-widest">
            // AVAILABLE NETWORKS
          </span>
          <div className="flex flex-wrap items-center gap-space-sm">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="px-space-md py-space-sm bg-surface-container-low/80 hover:bg-surface-container-high border border-surface-container rounded transition-all text-on-surface font-label-mono-sm uppercase tracking-widest flex items-center gap-space-xs">
              GITHUB
              <span className="material-symbols-outlined text-[16px] text-primary">arrow_outward</span>
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="px-space-md py-space-sm bg-surface-container-low/80 hover:bg-surface-container-high border border-surface-container rounded transition-all text-on-surface font-label-mono-sm uppercase tracking-widest flex items-center gap-space-xs">
              LINKEDIN
              <span className="material-symbols-outlined text-[16px] text-primary">arrow_outward</span>
            </a>
            <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="px-space-md py-space-sm bg-surface-container-low/80 hover:bg-surface-container-high border border-surface-container rounded transition-all text-on-surface font-label-mono-sm uppercase tracking-widest flex items-center gap-space-xs">
              X / TWITTER
              <span className="material-symbols-outlined text-[16px] text-primary">arrow_outward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
