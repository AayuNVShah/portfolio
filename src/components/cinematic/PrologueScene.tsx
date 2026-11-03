"use client";

import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Points as PointsImpl } from "three";

function JaaliField() {
  const ref = useRef<PointsImpl>(null);
  const positions = useMemo(() => {
    const count = 1400;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const col = i % 40;
      const row = Math.floor(i / 40);
      arr[i * 3] = (col - 20) * 0.18;
      arr[i * 3 + 1] = (row - 17) * 0.16;
      arr[i * 3 + 2] = Math.sin(col * 0.4) * 0.2 + Math.cos(row * 0.3) * 0.2;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.08) * 0.12;
    ref.current.rotation.x = -0.2 + Math.sin(state.clock.elapsedTime * 0.05) * 0.04;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#c3a66b"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  );
}

export default function PrologueScene() {
  return (
    <div className="absolute inset-0 hidden opacity-40 lg:block">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 1.5]}>
        <JaaliField />
      </Canvas>
    </div>
  );
}
