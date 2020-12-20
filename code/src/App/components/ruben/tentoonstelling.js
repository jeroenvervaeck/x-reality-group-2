import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import img from './images/image1.jpg'
import img2 from './images/image2.png'
import glb from "../jeroen/glb/beamer__jeroverv.glb";
import { useLoader, useResource } from "react-three-fiber";

export default () => {
    const loader = new THREE.TextureLoader();
  const gltf1 = useGLTF(glb, true);
  const [renderPic, setRenderPic] = useState(false);
  const texture = useLoader(THREE.TextureLoader, img)
  const texture2 = useLoader(THREE.TextureLoader, img2)
  const Ref1 = useRef();
  const beamerClick = () => {
    setRenderPic(!renderPic);
    console.log('renderPic');
  }
  
  return (
    <group>

        { renderPic &&
            <mesh
            position={[-4.1, 2, -5.75]}
            rotation={[0,THREE.MathUtils.degToRad(90),0]}>
                <planeBufferGeometry attach="geometry" args={[2, 2]} />
                <meshBasicMaterial attach="material" map={texture} />
            </mesh>
        }
        <mesh
        onClick={() => beamerClick()}
        >
            <primitive
            object={gltf1.scene.clone()}
            position={[-1.5, 2, -5.5]}
            rotation={[0,THREE.MathUtils.degToRad(90),0]}
            scale={[1,1,1]}
            ref={Ref1}
            />
        </mesh>
        <mesh
        position={[1.8, 2, -5.8]}
        rotation={[0,THREE.MathUtils.degToRad(270),0]}>
            <planeBufferGeometry attach="geometry" args={[2.5, 1.5]} />
            <meshBasicMaterial attach="material" map={texture2} />

        </mesh>
    </group>
    
    
  );
};