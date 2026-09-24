export function TopBar() {
  return (
    <header className="fixed top-0 left-0 lg:left-64 right-0 h-10 bg-surface-container-lowest/80 backdrop-blur-xl z-40 flex items-center px-space-sm md:px-space-md border-b border-surface-container/50">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-space-sm md:gap-space-md whitespace-nowrap overflow-hidden">
          <span className="font-label-mono-xs text-label-mono-xs text-primary font-bold shrink-0">[TELEMETRY]</span>
          <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant tracking-widest uppercase hidden sm:inline">
            CORE // DISTRIBUTED GRAPH // HIGH-FREQUENCY WEBGL // NEURAL KERNELS // SHANGHAI • BERLIN • SAN FRANCISCO
          </span>
        </div>
        <div className="flex items-center gap-space-md pl-space-md shrink-0">
          <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant hidden md:inline">NODE_LATENCY: 12ms</span>
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40">
            <span className="material-symbols-outlined text-primary text-[14px] md:text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
