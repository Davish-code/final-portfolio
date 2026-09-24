import { profile } from '../../data/profile';

export function SelectedWork() {
  return (
    <section id="projects" className="relative z-10 w-full px-space-md lg:px-space-2xl py-space-xl lg:py-space-3xl bg-surface-container-lowest/70 backdrop-blur-xl border-t border-surface-container">
      <div className="flex flex-wrap items-end justify-between gap-space-md mb-space-2xl">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-sm">
            <span className="font-label-code text-label-code text-primary font-bold">[ 02 // ARTIFACTS ]</span>
            <span className="h-px w-24 bg-surface-variant"></span>
            <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant uppercase tracking-widest">SELECTED CODEBASES</span>
          </div>
          <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface font-extrabold tracking-tight">
            Systems in Production.
          </h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-start">
        {profile.projects.map((project, idx) => {
          const isLarge = idx === 0 || idx === 3;
          const isReversed = idx === 3;
          
          return (
            <div key={idx} className={`p-space-md lg:p-space-xl bg-surface-container-low/90 backdrop-blur-2xl rounded-2xl flex relative overflow-hidden group hover:bg-surface-container transition-all shadow-2xl gap-space-lg lg:gap-space-xl ${isLarge ? (isReversed ? 'flex-col lg:flex-row-reverse lg:col-span-2' : 'flex-col lg:flex-row lg:col-span-2') : 'flex-col lg:col-span-1'}`}>
              <div className="absolute top-0 left-0 w-1.5 h-full bg-primary z-10"></div>
              
              <div className={`flex flex-col gap-space-md h-full justify-center ${isLarge ? 'w-full lg:w-1/2' : 'w-full order-2'}`}>
                <div className="flex flex-wrap items-center gap-space-sm font-label-mono-xs text-label-mono-xs">
                  <span className="px-space-sm py-0.5 bg-primary/20 text-primary font-bold rounded">
                    {`PRJ_0${idx + 1} // ${project.category.toUpperCase()}`}
                  </span>
                  {/* @ts-ignore */}
                  {project.subtitle && <span className="text-outline">{project.subtitle.toUpperCase()}</span>}
                </div>
                <h3 className="font-headline-xl-mobile md:font-headline-lg text-headline-xl-mobile md:text-headline-lg text-on-surface font-extrabold tracking-tighter uppercase">
                  {project.name}
                </h3>
                <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-space-sm py-1 bg-surface-container-highest/60 backdrop-blur-md rounded text-on-surface-variant font-label-mono-xs text-label-mono-xs tracking-widest uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-space-sm pt-space-md mt-auto">
                  {/* @ts-ignore */}
                  {project.links.demo && (
                    <a href={(project.links as any).demo} target="_blank" rel="noopener noreferrer" className="px-space-md py-space-xs bg-primary text-on-primary font-label-mono-sm text-label-mono-sm font-semibold rounded hover:bg-primary-fixed transition-all flex items-center gap-space-xs">
                      <span>LIVE DEMO</span>
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    </a>
                  )}
                  {project.links.code && (
                    <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="px-space-md py-space-xs bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-mono-sm text-label-mono-sm rounded transition-all flex items-center gap-space-xs">
                      <span>SOURCE CODE</span>
                      <span className="material-symbols-outlined text-[16px]">code</span>
                    </a>
                  )}
                  {/* @ts-ignore */}
                  {project.links.report && (
                    <a href={(project.links as any).report} target="_blank" rel="noopener noreferrer" className="px-space-md py-space-xs bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-mono-sm text-label-mono-sm rounded transition-all flex items-center gap-space-xs">
                      <span>VIEW REPORT</span>
                      <span className="material-symbols-outlined text-[16px]">description</span>
                    </a>
                  )}
                </div>
              </div>
              <div className={`bg-surface-container rounded-xl overflow-hidden relative shadow-lg ${isLarge ? 'w-full lg:w-1/2 aspect-video lg:aspect-auto min-h-[300px]' : 'w-full aspect-video order-1'}`}>
                <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
