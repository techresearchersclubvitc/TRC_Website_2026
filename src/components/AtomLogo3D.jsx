import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Orbital ring component with moving electron
function OrbitalRing({ radius, speed, offset = 0 }) {
  const electronRef = useRef();

  useFrame((state) => {
    if (electronRef.current) {
      // Move electron along the orbit path
      const angle = state.clock.elapsedTime * speed + offset;
      electronRef.current.position.x = Math.sin(angle) * radius;
      electronRef.current.position.y = Math.cos(angle) * radius; // Keep in the plane of the ring
      electronRef.current.position.z = 0;
    }
  });

  return (
    <group>
      {/* Fixed orbital ring */}
      <mesh>
        <torusGeometry args={[radius, 0.06, 16, 100]} />
        <meshBasicMaterial color="#cccccc" />
      </mesh>
      {/* Electron moving along orbit - multi-layered glow effect */}
      <group ref={electronRef}>
        {/* Outer glow */}
        <mesh>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshBasicMaterial color="#FF8C42" transparent opacity={0.25} />
        </mesh>
        {/* Middle glow */}
        <mesh>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial 
            color="#FFB347" 
            emissive="#FFA500" 
            emissiveIntensity={1.5} 
            transparent 
            opacity={0.6} 
          />
        </mesh>
        {/* Inner core */}
        <mesh>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial 
            color="#FFEB3B" 
            emissive="#FFD700" 
            emissiveIntensity={2} 
          />
        </mesh>
      </group>
    </group>
  );
}

// Central nucleus
function Nucleus() {
  const nucleusRef = useRef();

  useFrame((state) => {
    if (nucleusRef.current) {
      nucleusRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.05);
    }
  });

  return (
    <mesh ref={nucleusRef}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial color="#FFEB3B" emissive="#FFD700" emissiveIntensity={1.0} />
    </mesh>
  );
}

// Main atom scene
function AtomScene() {
  const atomGroupRef = useRef();

  useFrame((state) => {
    if (atomGroupRef.current) {
      // Rotate entire atom around Z-axis
      atomGroupRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <group ref={atomGroupRef}>
        <Nucleus />
        
        {/* Three orbital rings at different angles */}

        <group rotation={[Math.PI / 2 , Math.PI/4, 0]}>
          <OrbitalRing radius={2.2} speed={0.8} offset={0} />
        </group>
          

        <group rotation={[Math.PI / 2, Math.PI, 0]}>
          <OrbitalRing radius={2.2} speed={1.0} offset={Math.PI / 3} />
        </group>

        <group rotation={[Math.PI / 2, -Math.PI/2, Math.PI / 3]}>
          <OrbitalRing radius={2.2} speed={0.9} offset={Math.PI / 1.5} />
        </group>

      </group>

      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

// Main component
export default function AtomLogo3D() {
  return (
    <div className="hero-art">
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <AtomScene />
        </Canvas>
      </div>
    </div>
  );
}
