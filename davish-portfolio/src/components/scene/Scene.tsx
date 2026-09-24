import { Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';

const TorusField = lazy(() => import('./TorusField').then(module => ({ default: module.TorusField })));
const ParticleField = lazy(() => import('./ParticleField').then(module => ({ default: module.ParticleField })));

export function Scene() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        eventSource={document.getElementById('root') || undefined}
        eventPrefix="client"
        camera={{ position: [0, 0, 45], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, powerPreference: 'high-performance', alpha: true }}
      >
        <Suspense fallback={null}>
          <TorusField />
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
}
