import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import img from './images/gdm-gazet.jpg'
import jorne1 from './images/jorne-drac.jpg'
import jorne2 from './images/jorne-poster.jpg'
import jorne3 from './images/jorne-natura.jpg'
import jorne4 from './images/jorne-otter.jpg'




import { useLoader, useResource } from "react-three-fiber";

export default () => {
    const loader = new THREE.TextureLoader();
    const texture = useLoader(THREE.TextureLoader, img)
    const texture1 = useLoader(THREE.TextureLoader, jorne1)
    const texture2 = useLoader(THREE.TextureLoader, jorne2)
    const texture3 = useLoader(THREE.TextureLoader, jorne3)
    const texture4 = useLoader(THREE.TextureLoader, jorne4)

    const Ref1 = useRef();

  return (
    <group>
    {/* Gdm gazet */}
        <mesh
            position={[6.7, -2.05, -0.5]}
            scale={[0.3,0.4,0.4]}
            rotation={[0,THREE.MathUtils.degToRad(-180),0]}>
                <planeBufferGeometry attach="geometry" args={[2, 2]} />
                <meshBasicMaterial attach="material" map={texture} />
        </mesh>
        
        <mesh
            position={[5.75, -2.05, -0.5]}
            scale={[0.3,0.4,0.4]}
            rotation={[0,THREE.MathUtils.degToRad(-180),0]}>
                <planeBufferGeometry attach="geometry" args={[2, 2]} />
                <meshBasicMaterial attach="material" map={texture} />
        </mesh>

        <mesh
            position={[4.8, -2.05, -0.5]}
            scale={[0.3,0.4,0.4]}
            rotation={[0,THREE.MathUtils.degToRad(-180),0]}>
                <planeBufferGeometry attach="geometry" args={[2, 2]} />
                <meshBasicMaterial attach="material" map={texture} />
        </mesh>
        
    {/* Werken Jorne */}

        <mesh
            position={[10.8, -1.05, 4.5]}
            scale={[0.3,0.4,0.4]}
            rotation={[0,THREE.MathUtils.degToRad(-180),0]}>
                <planeBufferGeometry attach="geometry" args={[2, 2]} />
                <meshBasicMaterial attach="material" map={texture1} />
        </mesh>

        <mesh
            position={[11.8, -1.05, 4.5]}
            scale={[0.3,0.4,0.4]}
            rotation={[0,THREE.MathUtils.degToRad(-180),0]}>
                <planeBufferGeometry attach="geometry" args={[2, 2]} />
                <meshBasicMaterial attach="material" map={texture2} />
        </mesh>
        <mesh
            position={[12.8, -1.05, 4.5]}
            scale={[0.3,0.4,0.4]}
            rotation={[0,THREE.MathUtils.degToRad(-180),0]}>
                <planeBufferGeometry attach="geometry" args={[2, 2]} />
                <meshBasicMaterial attach="material" map={texture3} />
        </mesh>
        <mesh
            position={[13.8, -1.05, 4.5]}
            scale={[0.3,0.4,0.4]}
            rotation={[0,THREE.MathUtils.degToRad(-180),0]}>
                <planeBufferGeometry attach="geometry" args={[2, 2]} />
                <meshBasicMaterial attach="material" map={texture4} />
        </mesh>
    </group>
    
    
  );
};