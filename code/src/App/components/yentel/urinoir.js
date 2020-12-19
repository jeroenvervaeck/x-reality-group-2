import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useLoader, useResource } from "react-three-fiber";

import glb from "./models/urinoir.glb";

import audioFile from './sounds/toilet_flush.wav'

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();
  const audioRef = useResource();

  const audioListener = new THREE.AudioListener();
  const audioBuffer = useLoader(THREE.AudioLoader, audioFile);

  // function happens onClick
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

		// eerste verdiep
        <mesh onClick={() => flushToilet()}>
			<primitive
			object={gltf1.scene.clone()}
			position={[-4.7, 0.8, -8.8]}
			rotation={[0, 1.55,0]}
			scale={[1.1, 1.2, 1.1]}
			ref={Ref1}
			/>
		</mesh>
		<mesh onClick={() => flushToilet()}>
			<primitive
			object={gltf1.scene.clone()}
			position={[-4.7, 0.8, -7.4]}
			rotation={[0, 1.55,0]}
			scale={[1.1, 1.2, 1.1]}
			ref={Ref1}
			/>
		</mesh>

		<mesh onClick={() => flushToilet()}>
			<primitive
			object={gltf1.scene.clone()}
			position={[-4.7, 0.8, -6]}
			rotation={[0, 1.55,0]}
			scale={[1.1, 1.2, 1.1]}
			ref={Ref1}
			/>
		</mesh>

		// tweede verdiep
		<mesh onClick={() => flushToilet()}>
			<primitive
			object={gltf1.scene.clone()}
			position={[-4.7, 3.6, -8.8]}
			rotation={[0, 1.55,0]}
			scale={[1.1, 1.2, 1.1]}
			ref={Ref1}
			/>
		 </mesh>

		<mesh onClick={() => flushToilet()}>
			<primitive
			object={gltf1.scene.clone()}
			position={[-4.7, 3.6, -7.4]}
			rotation={[0, 1.55,0]}
			scale={[1.1, 1.2, 1.1]}
			ref={Ref1}
			/>
		</mesh>
		<mesh onClick={() => flushToilet()}>
			<primitive
			object={gltf1.scene.clone()}
			position={[-4.7, 3.6, -6]}
			rotation={[0, 1.55,0]}
			scale={[1.1, 1.2, 1.1]}
			ref={Ref1}
			/>
		</mesh>
      </group>   
    </group>
  );
};
