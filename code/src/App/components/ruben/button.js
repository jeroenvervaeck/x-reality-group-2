import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import elevatoraudio from './sound/elevator.wav';

import { useLoader, useResource } from "react-three-fiber";
import glb from "./button.glb";
export default () => {
  const gltf1 = useGLTF(glb, true);
  const [renderMan, setRenderMan] = useState(false);
  const Ref1 = useRef();
  const audioRef = useResource();
  const audioListener = new THREE.AudioListener();
  const audioBuffer = useLoader(THREE.AudioLoader, elevatoraudio);
  const buttonClick = () => {
    setRenderMan(!renderMan);
    console.log('renderMan');
    if (renderMan === false) {
      audioRef.current.setBuffer(audioBuffer);
      audioRef.current.setLoop(false);
      audioRef.current.setVolume(0.1);
      audioRef.current.play();
    }
  };
  

  return (
    <group>
    
    <group>
    <audio args={[audioListener]} ref={audioRef} />
      <mesh
      onClick={() => buttonClick()}
      >
        <primitive
          object={gltf1.scene.clone()}
          position={[-1.77, -1.56, 0.31]}
          rotation={[0,-1.55,0]}
          scale={[1,1,1]}
  	  	  ref={Ref1}
  	    />
      </mesh>
      { renderMan && 
          <primitive
          object={gltf1.scene.clone()}
          position={[-1.77, -1.56, 0.31]}
          rotation={[0,-1.55,0]}
          scale={[3,3,3]}
  	  	  ref={Ref1}
    	    />
        }
    </group>  
      

      

    </group>
  );
};