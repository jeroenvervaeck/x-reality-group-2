import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import elevatoraudio from './sound/elevator.wav';
import { useFrame } from "react-three-fiber";

import { useLoader, useResource } from "react-three-fiber";
import glb from "./glb/button.glb";
import glb_person from './glb/person.glb'
export default () => {
  const gltf1 = useGLTF(glb, true);
  const gltf1_person = useGLTF(glb_person, true);
  const [animation, setActive] = useState(false);
  const [animationback, setActive2] = useState(false);

  const endPosition = -0.3000000000000013  ;
  const beginPosition = 1.5
  const [renderMan, setRenderMan] = useState(false);
  const Ref1 = useRef();
  const Ref2 = useRef();
  const audioRef = useResource();
  const audioListener = new THREE.AudioListener();
  const audioBuffer = useLoader(THREE.AudioLoader, elevatoraudio);
  const move = () => {
    setActive (!animation)
    // setRenderMan(!renderMan);
    // console.log('renderMan');
    if (animation === false) {
      audioRef.current.setBuffer(audioBuffer);
      audioRef.current.setLoop(false);
       audioRef.current.setVolume(0.1);
     audioRef.current.play();
     }
   };
 
  useFrame(() => {
    
    if(animation == true && animationback == false){
        console.log('kiekeboe')
        Ref2.current.position.z  -= 0.01;
        console.log(Ref2.current.position.z)
            if(Ref2.current.position.z == endPosition){
              console.log("STOP")
              setActive (!animation)
              console.log(animation)
              Ref2.current.position.z  = endPosition;
              console.log('reee');
              setActive2 (!animationback)
            }
    }else if(animation == true && animationback == true){
      console.log('kiekeboe')
        Ref2.current.position.z  += 0.01;
        console.log(Ref2.current.position.z)
            if(Ref2.current.position.z == beginPosition){
              setActive2 (!animationback)
              Ref2.current.position.z  = beginPosition;
              console.log('reee');
              setActive (!animation);

            }
    }
});
  return (
    <group>
      <group>
      <audio args={[audioListener]} ref={audioRef} />
      <mesh 
        onClick={() => move()}
        >
          <primitive
            object={gltf1.scene.clone()}
            position={[-1.77, -1.56, 0.31]}
            rotation={[0,-1.55,0]}
            scale={[1,1,1]}

            ref={Ref1}
          />
          </mesh>
            <primitive
            object={gltf1_person.scene}
            position={[-1, -1.56, 1.5]}
            rotation={[0,1.55,0]}
            scale={[0.16,0.16,0.16]}

            ref={Ref2}
            /> 
      </group>  
    </group>
  );
};