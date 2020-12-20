import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useLoader, useResource } from "react-three-fiber";

import glb from "./glb/Koffieautomaat_eetzaal_morgbeka.glb";
import glb_cup from "./glb/Koffiebeker_eetzaal_morgbeka.glb";

import liquidAudioFile from './sound/pouring_luiqid.wav'

export default () => {
  const [renderCup, setRenderCup] = useState(false);

  const gltf1 = useGLTF(glb, true);
  const gltf1_cup = useGLTF(glb_cup, true);
  const Ref1 = useRef();
  const Ref1_cup = useRef();
  const audioRef = useResource();

  const audioListener = new THREE.AudioListener();
  const audioBuffer = useLoader(THREE.AudioLoader, liquidAudioFile);

  // function happens onClick
  const makeCoffeeAppear = () => {
    // render the cup
    setRenderCup(!renderCup);
    console.log(renderCup);
    // when false the sound will play, but this is wierd. idk why, but it works this way
    if (renderCup === false) {
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
        onClick={() => makeCoffeeAppear()}
        >
          <primitive
              object={gltf1.scene}
    		      position={[-6.5, -2.7, 2.2]}
    		      rotation={[0, 1.55,0]}
      	  	  ref={Ref1}
    	    />
        </mesh>
        { renderCup && 
          <primitive
              object={gltf1_cup.scene}
    		      position={[-6.93, -2.08, 1.2]}
              rotation={[0, 1.55,0]}
              scale={[3,3,3]}
      	  	  ref={Ref1_cup}
    	    />
        }
    </group>
  </group>
  );
};
