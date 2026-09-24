import { ChatBot } from '../ui/ChatBot';
import { profile } from '../../data/profile';

export function Hero() {
  return (
    <section id="hero" className="relative z-10 w-full min-h-[92vh] flex flex-col justify-between px-space-md lg:px-space-2xl pt-space-md lg:pt-space-xl pb-space-lg lg:pb-space-2xl">
      <div className="w-full flex flex-wrap items-center justify-between gap-space-sm pb-space-lg text-on-surface-variant font-label-mono-xs text-label-mono-xs tracking-widest uppercase">
        <div className="flex items-center gap-space-sm">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
          <span className="text-primary font-bold">[SYS_ARCH // LEVEL 09]</span>
          <span className="text-surface-bright">/</span>
          <span>INDEX: 0x8F9A_V7</span>
        </div>
        <div className="flex items-center gap-space-lg">
          <span className="hidden sm:inline">COORDINATES: 37.7749° N, 122.4194° W</span>
          <span className="hidden md:inline text-surface-bright">/</span>
          <span className="hidden md:inline">KERNEL: RUST_6.8.1-LLVM_WASM</span>
          <span className="bg-surface-container-high px-space-sm py-0.5 rounded text-primary">STATUS: UNBOUND</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center relative my-auto">
        <div className="lg:col-span-8 flex flex-col gap-space-md relative">
          <div className="flex items-center gap-space-sm text-primary font-label-mono-sm text-label-mono-sm">
            <span className="font-bold tracking-widest">[ ⟡ COGNITIVE TOPOLOGY ]</span>
            <span className="h-px w-16 bg-surface-variant"></span>
            <span className="text-on-surface-variant">NODE CLUSTER: SF // BER // SH</span>
          </div>
          
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tighter uppercase font-extrabold leading-none select-none">
            {profile.name.split(' ')[0]}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed to-secondary-fixed">{profile.name.split(' ')[1]}</span>
          </h1>
          
          <div className="flex flex-wrap gap-space-xs items-center pt-space-xs">
            {profile.roles.map((role, i) => (
              <span key={role} className={`px-space-sm py-1 backdrop-blur-md rounded font-label-mono-xs text-label-mono-xs tracking-widest uppercase ${
                i === 0 ? 'bg-surface-container-highest/60 text-primary font-semibold' :
                i === 1 ? 'bg-surface-container-high/40 text-on-surface-variant' :
                'bg-surface-container-high/40 text-secondary'
              }`}>
                {role}
              </span>
            ))}
          </div>
          
          <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-2xl pt-space-sm leading-relaxed whitespace-pre-line">
            {profile.bio}
          </p>
          
          <div className="flex flex-wrap items-center gap-space-md pt-space-md">
            <a href="#projects" className="px-space-lg py-space-sm bg-primary text-on-primary font-body-md text-body-md font-semibold rounded hover:bg-primary-fixed transition-all flex items-center gap-space-xs shadow-lg shadow-primary-container/20 group">
              <span>EXPLORE ARTIFACTS</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            <div className="flex items-center gap-space-sm">
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded bg-surface-container-high/80 hover:bg-surface-container-highest text-on-surface transition-all">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/><path d="M9 18c-4.5 1.5-5-2.5-7-3"/></svg>
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded bg-surface-container-high/80 hover:bg-surface-container-highest text-on-surface transition-all">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded bg-surface-container-high/80 hover:bg-surface-container-highest text-on-surface transition-all">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col mt-space-xl lg:mt-0">
          <ChatBot />
        </div>
      </div>

      <div className="w-full flex items-center justify-between pt-space-lg text-on-surface-variant">
        <div className="flex items-center gap-space-md">
          <span className="font-label-mono-xs text-label-mono-xs text-primary font-bold">01 // ROOT ENTRY</span>
          <span className="hidden sm:inline font-label-mono-xs text-label-mono-xs text-outline">|</span>
          <span className="hidden sm:inline font-label-mono-xs text-label-mono-xs">DISPATCH LOG ACTIVE</span>
        </div>
        <a href="#projects" className="flex items-center gap-space-xs font-label-mono-xs text-label-mono-xs text-on-surface-variant hover:text-primary transition-colors tracking-widest uppercase">
          <span>[SCROLL_DOWN // 01 ➔ 07]</span>
          <span className="text-primary text-[14px] animate-bounce">⟡</span>
        </a>
      </div>
    </section>
  );
}
