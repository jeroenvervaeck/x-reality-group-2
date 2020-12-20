import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import img from './images/gdm-gazet.jpg'




import { useLoader, useResource } from "react-three-fiber";

export default () => {
    const texture = useLoader(THREE.TextureLoader, img)

  return (
    <group>
		{/* Verdiep 1 */}
        <mesh
            position={[-5, 2, -4.15]}
            scale={[0.3,0.4,0.4]}>
				<planeBufferGeometry attach="geometry" args={[2, 2]} />
				<meshBasicMaterial attach="material" map={texture} />
        </mesh>

		<mesh
            position={[7, 2, -4.3]}
            scale={[0.3,0.4,0.4]}>
				<planeBufferGeometry attach="geometry" args={[2, 2]} />
				<meshBasicMaterial attach="material" map={texture} />
        </mesh>

		<mesh
            position={[9, 2, -4.3]}
            scale={[0.3,0.4,0.4]}>
				<planeBufferGeometry attach="geometry" args={[2, 2]} />
				<meshBasicMaterial attach="material" map={texture} />
        </mesh>

		<mesh
            position={[11, 2, -4.3]}
            scale={[0.3,0.4,0.4]}>
				<planeBufferGeometry attach="geometry" args={[2, 2]} />
				<meshBasicMaterial attach="material" map={texture} />
        </mesh>

		<mesh
            position={[13, 2, -4.3]}
            scale={[0.3,0.4,0.4]}>
				<planeBufferGeometry attach="geometry" args={[2, 2]} />
				<meshBasicMaterial attach="material" map={texture} />
        </mesh>

		{/* Verdiep 2 */}
        <mesh
            position={[-5, 4.8, -4.15]}
            scale={[0.3,0.4,0.4]}>
				<planeBufferGeometry attach="geometry" args={[2, 2]} />
				<meshBasicMaterial attach="material" map={texture} />
        </mesh>

		<mesh
            position={[7, 4.8, -4.3]}
            scale={[0.3,0.4,0.4]}>
				<planeBufferGeometry attach="geometry" args={[2, 2]} />
				<meshBasicMaterial attach="material" map={texture} />
        </mesh>

		<mesh
            position={[9, 4.8, -4.3]}
            scale={[0.3,0.4,0.4]}>
				<planeBufferGeometry attach="geometry" args={[2, 2]} />
				<meshBasicMaterial attach="material" map={texture} />
        </mesh>

		<mesh
            position={[11, 4.8, -4.3]}
            scale={[0.3,0.4,0.4]}>
				<planeBufferGeometry attach="geometry" args={[2, 2]} />
				<meshBasicMaterial attach="material" map={texture} />
        </mesh>

		<mesh
            position={[13, 4.8, -4.3]}
            scale={[0.3,0.4,0.4]}>
				<planeBufferGeometry attach="geometry" args={[2, 2]} />
				<meshBasicMaterial attach="material" map={texture} />
        </mesh>
        
    </group>
  );
};