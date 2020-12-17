import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

import glb_file from "./glb/beamer__jeroverv.glb";

export default () => {
  const gltf = useGLTF(glb_file, true);
  const Ref1 = useRef();
  
  return (
    <group>
      <group>
		  {/* LS */}
        <primitive
          object={gltf.scene.clone()}
		  position={[-12.7, 4.9, -5.8]}
		  rotation={[0,THREE.MathUtils.degToRad(-90),0]}
  	  	  ref={Ref1}
  	    />
      </group>   
      <group>
		  {/* FS */}
        <primitive
          object={gltf.scene.clone()}
		  position={[5.2, 4.8, -6.5]}
		  rotation={[0,THREE.MathUtils.degToRad(90),0]}
  	  	  ref={Ref1}
  	    />
      </group>   
      <group>
		  {/* Lokaal extended */}
        <primitive
          object={gltf.scene.clone()}
		  position={[7.4, 4.9, 0.5]}
		  rotation={[0,THREE.MathUtils.degToRad(-90),0]}
  	  	  ref={Ref1}
  	    />
      </group>   
      <group>
		  {/* Lokaal Webdev */}
        <primitive
          object={gltf.scene.clone()}
		  position={[14, 4.9, 0.5]}
		  rotation={[0,THREE.MathUtils.degToRad(90),0]}
  	  	  ref={Ref1}
  	    />
      </group>   
    </group>
  );
};
