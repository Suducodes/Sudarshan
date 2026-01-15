import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const DNAHelix = () => {
  const ref = useRef<THREE.Points>(null!);
  
  // Generate particles in a double helix pattern
  const particles = useMemo(() => {
    const count = 400; // Number of particles
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    // Updated colors for the intensified blue theme
    const color1 = new THREE.Color('#00f3ff'); // Electric Cyan
    const color2 = new THREE.Color('#0055ff'); // Rich Blue

    for (let i = 0; i < count; i++) {
      const t = i / count;
      const angle = t * Math.PI * 10; // Number of turns
      const radius = 2;
      const height = (t - 0.5) * 15; // Vertical spread

      // Strand 1
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      
      // Strand 2 (offset by PI)
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      // Randomly choose strand, adding some noise for "floating" effect
      const isStrand1 = Math.random() > 0.5;
      const x = isStrand1 ? x1 : x2;
      const z = isStrand1 ? z1 : z2;
      const y = height;

      // Add noise
      const spread = 0.2;
      positions[i * 3] = x + (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = y + (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = z + (Math.random() - 0.5) * spread;

      // Color mix
      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    
    return { positions, colors };
  }, []);

  useFrame((state, delta) => {
  if (!ref.current) return;

  // Continuous rotation (spin)
  ref.current.rotation.y += delta * 0.10;

  // Fixed diagonal slant (THIS creates the look you showed)
  ref.current.rotation.x = Math.PI / 1; // forward tilt
  ref.current.rotation.z = Math.PI / 6; // diagonal tilt

  // Gentle floating (optional but nice)
  ref.current.position.y =
    Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
});


  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        vertexColors
        size={0.12}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <fog attach="fog" args={['#050505', 5, 20]} />
        <DNAHelix />
      </Canvas>
    </div>
  );
};
