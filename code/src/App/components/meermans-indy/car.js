
import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

import glb1 from "./glb/Bekaert_Morgane_toy.glb";
import glb2 from "./glb/Vervaeck_Jeroen_toy.glb";
import glb3 from "./glb/JonasStasseyns-ToyCar.glb";
import glb4 from "./glb/de_hauwere_yentel_toy2.glb";
import glb5 from "./glb/meermans_indy_toy.glb";
import glb6 from "./glb/maesdranckx_ruben_Toy.glb";






export default () => {
    const { nodes, materials } = useGLTF(glb6, true);
    const gltf1 = useGLTF(glb1, true);
    const gltf2 = useGLTF(glb2, true);
    const gltf3 = useGLTF(glb3, true);
    const gltf4 = useGLTF(glb4, true);
    const gltf5 = useGLTF(glb5, true);
    const gltf6 = useGLTF(glb6, true);


    const Ref1 = useRef();

  
  return (
    <group>
    
    <group>
        <primitive
          object={gltf1.scene}
          position={[14.3, -1.3, -20.3]}
          rotation={[0,-1.55,0]}
          scale={[0.95,0.95,0.95]}
  	  	  ref={Ref1}
  	    />
        <primitive
          object={gltf2.scene}
          position={[20.3, -1.7, -20.3]}
          rotation={[0,-1.55,0]}
          scale={[0.6,0.6,0.6]}
  	  	  ref={Ref1}
  	    />
        <primitive
          object={gltf3.scene}
          position={[9.3, -0.9, -20.3]}
          rotation={[0,-1.55,0]}
          scale={[0.95,0.95,0.95]}
  	  	  ref={Ref1}
  	    />
        <primitive
          object={gltf4.scene}
          position={[1.3, -1.9, -20.3]}
          rotation={[0,-1.55,0]}
          scale={[0.95,0.95,0.95]}
  	  	  ref={Ref1}
  	    />
        <primitive
          object={gltf5.scene}
          position={[-6.3, -1.9, -20.3]}
          rotation={[0,-1.55,0]}
          scale={[0.95,0.95,0.95]}
  	  	  ref={Ref1}
  	    />
        <group
          position = {[-10.3, -1.4, -20.3]}
        >
      <mesh OnClick={() => setNight(isnight)}
        geometry={nodes.Cube.geometry}
        material={materials["yellow"]}
        scale={[1, 0.774, 0.738]}
        position={[0, -0.77579, 0]}
        ref={gltf6}
      />
      <mesh OnClick={() => setNight(isnight)}
        geometry={nodes.cube1.geometry}
        material={materials["red"]}
        scale={[1,0.773, 0.736]}
        position={[-2.0015, -0.77579, 0]}
        ref={gltf6}
      />
      <mesh OnClick={() => setNight(isnight)}
        geometry={nodes.cube3.geometry}
        material={materials["Material"]}
        scale={[0.105, 0.20, 0.8523]}
        position={[-1.187, 0.1732, -0.3]}
        ref={gltf6}
      />
      <mesh OnClick={() => setNight(isnight)}
        geometry={nodes.Cylinder.geometry}
        material={materials["black"]}
        scale={[0.7, 0.15, 0.7]}
        position={[0.10, -1.3, 1]}
        rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
        ref={gltf6}
      />
      <mesh OnClick={() => setNight(isnight)}
        geometry={nodes.cyl1.geometry}
        material={materials["black"]}
        scale={[0.7, 0.15, 0.7]}
        position={[-3.10, -1.3, 1]}
        rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
        ref={gltf6}
      />
      <mesh OnClick={() => setNight(isnight)}
        geometry={nodes.cube2.geometry}
        material={materials["Material"]}
        scale={[1, 0.244, 0.104]}
        position={[-0.72, -0.47112, -0.11825]}
        ref={gltf6}
      />
      <mesh OnClick={() => setNight(isnight)}
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        scale={[10,10,10]}
        position={[0, -2, 0]}
        ref={gltf6}
      />
      </group>
      </group>  

    </group>
  );  
};
