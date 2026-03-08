import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// DNA Helix component
function DNAHelix({ scrollVelocity }) {
  const helixRef = useRef();
  const baseRotationSpeed = 0.005;
  const currentSpeed = useRef(baseRotationSpeed);
  const momentumDecay = 0.92; // Lerp factor for smooth decay

  useFrame((state, delta) => {
    if (helixRef.current) {
      // Calculate momentum-based speed
      const targetSpeed = baseRotationSpeed + Math.abs(scrollVelocity) * 0.05;
      
      // Smooth lerp towards target speed for buttery feel
      currentSpeed.current = THREE.MathUtils.lerp(
        currentSpeed.current,
        targetSpeed,
        momentumDecay
      );

      // Apply rotation
      helixRef.current.rotation.y += currentSpeed.current;
      
      // Slight scale pulse for depth effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      helixRef.current.scale.set(scale, scale, scale);
    }
  });

  // Create DNA double helix geometry
  const createHelix = () => {
    const spheres = [];
    const bonds = [];
    const numPairs = 80; // Adjusted for proper length
    const helixHeight = 35; // Reduced height
    const radius = 0.6; // Smaller radius
    const sphereSize = 0.009;

    // Color palette inspired by colorful DNA
    const colors = [
      '#FF1493', // Deep Pink
      '#9B59B6', // Purple
      '#00CED1', // Cyan
      '#1E90FF', // Blue
      '#FF6347', // Orange-Red
      '#FFD700', // Gold
      '#00FA9A', // Spring Green
      '#FF69B4', // Hot Pink
    ];

    for (let i = 0; i < numPairs; i++) {
      const y = (i / numPairs) * helixHeight - helixHeight / 2;
      const angle = (i / numPairs) * Math.PI * 10; // 5 full rotations

      // First strand (left helix)
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;

      // Second strand (right helix, offset by PI)
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      // Assign colors cyclically
      const color1 = colors[i % colors.length];
      const color2 = colors[(i + 3) % colors.length]; // Offset for variety

      // Push sphere positions for both strands
      spheres.push(
        { position: [x1, y, z1], key: `sphere-1-${i}`, color: color1 },
        { position: [x2, y, z2], key: `sphere-2-${i}`, color: color2 }
      );

      // Create hydrogen bonds (connecting lines)
      bonds.push({
        start: [x1, y, z1],
        end: [x2, y, z2],
        key: `bond-${i}`
      });
    }

    return { spheres, bonds };
  };

  const { spheres, bonds } = createHelix();

  return (
    <group ref={helixRef}>
      {/* Render glowing spheres for both strands */}
      {spheres.map((sphere) => (
        <group key={sphere.key} position={sphere.position}>
          {/* Outer glow layer */}
          <mesh>
            <sphereGeometry args={[0.18, 16, 16]} />
            <meshBasicMaterial color={sphere.color} transparent opacity={0.2} />
          </mesh>
          {/* Middle glow layer */}
          <mesh>
            <sphereGeometry args={[0.14, 16, 16]} />
            <meshStandardMaterial
              color={sphere.color}
              emissive={sphere.color}
              emissiveIntensity={1.2}
              transparent
              opacity={0.7}
            />
          </mesh>
          {/* Inner core */}
          <mesh>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial
              color={sphere.color}
              emissive={sphere.color}
              emissiveIntensity={2}
              toneMapped={false}
            />
          </mesh>
        </group>
      ))}

      {/* Render hydrogen bonds (thin connecting lines) */}
      {bonds.map((bond) => {
        const start = new THREE.Vector3(...bond.start);
        const end = new THREE.Vector3(...bond.end);
        const direction = new THREE.Vector3().subVectors(end, start);
        const length = direction.length();
        const midPoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
        
        // Calculate rotation to align cylinder with bond
        const axis = new THREE.Vector3(0, 1, 0);
        const quaternion = new THREE.Quaternion().setFromUnitVectors(
          axis,
          direction.clone().normalize()
        );
        const euler = new THREE.Euler().setFromQuaternion(quaternion);

        return (
          <mesh
            key={bond.key}
            position={midPoint.toArray()}
            rotation={[euler.x, euler.y, euler.z]}
          >
            <cylinderGeometry args={[0.02, 0.02, length, 8]} />
            <meshBasicMaterial color="#ffffff" opacity={0.3} transparent />
          </mesh>
        );
      })}

      {/* Ambient glow effect with colored lights */}
      <pointLight position={[0, 15, 0]} intensity={0.8} color="#FF1493" distance={4} />
      <pointLight position={[0, 8, 0]} intensity={0.8} color="#00CED1" distance={4} />
      <pointLight position={[0, 0, 0]} intensity={0.8} color="#9B59B6" distance={4} />
      <pointLight position={[0, -8, 0]} intensity={0.8} color="#FFD700" distance={4} />
      <pointLight position={[0, -15, 0]} intensity={0.8} color="#00FA9A" distance={4} />
    </group>
  );
}

// Main DNA Thread Canvas Component
export default function DNAThread({ scrollVelocity = 0 }) {
  // Responsive camera positioning
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const isTablet = typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1024;
  
  const cameraPosition = isMobile 
    ? [4, 0, 16] // Mobile: adjusted for smaller helix
    : isTablet 
    ? [3.5, 0, 12] // Tablet: closer view
    : [12, 0, 12]; // Desktop: closer for smaller helix
  
  const fov = isMobile ? 85 : isTablet ? 80 : 75;
  
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: cameraPosition, fov: fov }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 20, 5]} intensity={0.5} />
        <pointLight position={[-5, 0, -5]} intensity={0.3} />
        <pointLight position={[5, -20, 5]} intensity={0.5} />
        
        <DNAHelix scrollVelocity={scrollVelocity} />
      </Canvas>
    </div>
  );
}
