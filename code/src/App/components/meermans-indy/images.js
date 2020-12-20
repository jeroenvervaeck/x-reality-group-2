import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import img from './images/gdm-gazet.jpg'
import { useLoader, useResource } from "react-three-fiber";

export default () => {
    const loader = new THREE.TextureLoader();
  const [renderPic, setRenderPic] = useState(false);
  const texture = useLoader(THREE.TextureLoader, img)

  const Ref1 = useRef();

  return (
    <group>

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
       
    </group>
    
    
  );
};