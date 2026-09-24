import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const { viewport } = useThree();
  
  const isMobile = viewport.width < 15;
  const count = isMobile ? 500 : 1500;
  const target = useRef({ x: 0, y: 0 });
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 140;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 120;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    return pos;
  }, [count]);

  const pTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(251, 191, 36, 1)');
      grad.addColorStop(0.3, 'rgba(245, 158, 11, 0.7)');
      grad.addColorStop(1, 'rgba(14, 16, 23, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const time = state.clock.getElapsedTime();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      target.current.x = THREE.MathUtils.damp(target.current.x, state.pointer.x, 4, delta);
      target.current.y = THREE.MathUtils.damp(target.current.y, state.pointer.y, 4, delta);
    }
    
    ref.current.rotation.y = time * 0.03 + (target.current.x * 0.1);
    ref.current.rotation.x = Math.sin(time * 0.05) * 0.1 - (target.current.y * 0.1);
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        map={pTexture}
        color="#fbbf24"
        size={1.8}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.75}
      />
    </Points>
  );
}
