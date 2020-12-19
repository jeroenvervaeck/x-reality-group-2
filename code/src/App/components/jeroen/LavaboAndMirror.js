import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useLoader, useResource } from "react-three-fiber";

import audioFile from './sounds/pouring_sink.wav'

import glb_file1 from "./glb/lavaboAndMirror__jeroverv_1.glb";
import glb_file2 from "./glb/lavaboAndMirror__jeroverv_2.glb";
import glb_file3 from "./glb/lavaboAndMirror__jeroverv_3.glb";
import glb_file4 from "./glb/lavaboAndMirror__jeroverv_4.glb";


export default () => {
  const gltf1 = useGLTF(glb_file1, true);
  const gltf2 = useGLTF(glb_file2, true);
  const gltf3 = useGLTF(glb_file3, true);
  const gltf4 = useGLTF(glb_file4, true);
  const Ref1 = useRef();
  const Ref2 = useRef();
  const Ref3 = useRef();
  const Ref4 = useRef();

  const audioRef = useResource();

  const audioListener = new THREE.AudioListener();
  const audioBuffer = useLoader(THREE.AudioLoader, audioFile);

   const flushToilet = () => {
	audioRef.current.setBuffer(audioBuffer);
	audioRef.current.setLoop(false);
	audioRef.current.setVolume(0.1);
	audioRef.current.play();
  };
  
  return (
    <group>
      <group>
		<audio args={[audioListener]} ref={audioRef} />
		<mesh onClick={() => flushToilet()}>
			<primitive
			object={gltf1.scene}
			position={[-9.3, 1.2, -5.5]}
			ref={Ref1}
			/>
		</mesh>
      </group>   
      <group>
	  	<audio args={[audioListener]} ref={audioRef} />
		<mesh onClick={() => flushToilet()}>
			<primitive
			object={gltf2.scene}
			position={[-9.3, 1.2, -6.2]}
			ref={Ref2}
			/>
		</mesh>
      </group>   
      <group>
	  	<audio args={[audioListener]} ref={audioRef} />
		<mesh onClick={() => flushToilet()}>
			<primitive
			object={gltf3.scene}
			position={[-9.3, 4, -5.5]}
			ref={Ref3}
			/>
		</mesh>
      </group>  
      <group>
	 	<audio args={[audioListener]} ref={audioRef} />
		<mesh onClick={() => flushToilet()}>
			<primitive
			object={gltf4.scene}
			position={[-9.3, 4, -6.2]}
			ref={Ref4}
			/>
		</mesh>
      </group>  
    </group>
  );
};
