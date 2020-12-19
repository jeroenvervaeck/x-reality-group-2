import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import img from './images/image1.jpg'
import glb from "./wall.glb";
import { useLoader, useResource } from "react-three-fiber";

export default () => {
    const loader = new THREE.TextureLoader();
  const gltf1 = useGLTF(glb, true);
  const texture = useLoader(THREE.TextureLoader, img)
  const Ref1 = useRef();
  
  return (
    <group>
        <mesh
        position={[1.3, -2, -6.1]}>
            <planeBufferGeometry attach="geometry" args={[3, 3]} />
            <meshBasicMaterial attach="material" map={texture} />

        </mesh>
        
    </group>
    
  );
};