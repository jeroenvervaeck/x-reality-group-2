import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import img from './images/image1.jpg'
import glb from "../jeroen/glb/beamer__jeroverv.glb";
import { useLoader, useResource } from "react-three-fiber";

export default () => {
    const loader = new THREE.TextureLoader();
  const gltf1 = useGLTF(glb, true);
  const texture = useLoader(THREE.TextureLoader, img)
  const Ref1 = useRef();
  
  return (
    <group>
        <mesh
        position={[-4.1, 2, -6.1]}
        rotation={[0,THREE.MathUtils.degToRad(90),0]}>
            <planeBufferGeometry attach="geometry" args={[3, 3]} />
            <meshBasicMaterial attach="material" map={texture} />

        </mesh>
        <primitive
          object={gltf1.scene.clone()}
          position={[-1.5, 2, -5.5]}
          rotation={[0,THREE.MathUtils.degToRad(90),0]}
          scale={[1,1,1]}
  	  	  ref={Ref1}
  	    />
    </group>
    
  );
};