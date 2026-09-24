import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export function TorusField() {
  const torusRef = useRef<THREE.Mesh>(null);
  const icosaRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const isMobile = viewport.width < 15;
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      target.current.x = THREE.MathUtils.damp(target.current.x, state.pointer.x * 2, 4, delta);
      target.current.y = THREE.MathUtils.damp(target.current.y, state.pointer.y * 2, 4, delta);
    }

    if (torusRef.current && icosaRef.current) {
      torusRef.current.rotation.x = time * 0.12 + target.current.y * 0.35;
      torusRef.current.rotation.y = time * 0.16 + target.current.x * 0.45;
      
      icosaRef.current.rotation.x = -time * 0.08 + target.current.y * 0.2;
      icosaRef.current.rotation.z = time * 0.14 - target.current.x * 0.2;
      
      const scale = isMobile ? 0.45 : 1;
      torusRef.current.scale.set(scale, scale, scale);
      icosaRef.current.scale.set(scale, scale, scale);
      
      const baseX = isMobile ? 0 : 16;
      const baseY = isMobile ? -5 : 4; 
      
      torusRef.current.position.set(baseX, baseY, -10);
      icosaRef.current.position.set(baseX, baseY, -10);
    }
  });

  return (
    <group>
      <mesh ref={torusRef}>
        <torusGeometry args={[18, 4.5, 24, 70]} />
        <meshBasicMaterial color="#f59e0b" wireframe transparent opacity={0.18} />
      </mesh>
      <mesh ref={icosaRef}>
        <icosahedronGeometry args={[11, 2]} />
        <meshBasicMaterial color="#d97706" wireframe transparent opacity={0.12} />
      </mesh>
    </group>
  );
}
