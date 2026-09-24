const NAV_ITEMS = [
  { id: 'hero', icon: 'home', label: 'INDEX' },
  { id: 'projects', icon: 'folder', label: 'WORK' },
  { id: 'architecture', icon: 'account_tree', label: 'ARCH' },
  { id: 'neural-kernels', icon: 'psychology', label: 'NEURAL' },
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl z-50 flex lg:hidden items-center justify-around px-space-md border-t border-surface-container">
      {NAV_ITEMS.map(item => (
        <a 
          key={item.id} 
          href={`#${item.id}`}
          className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
          <span className="font-label-mono-xs text-[9px] uppercase tracking-widest">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}
