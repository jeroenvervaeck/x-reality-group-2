import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

import glb_file from "./glb/whiteboard__jeroverv.glb";

export default () => {
  const gltf = useGLTF(glb_file, true);
  const Ref1 = useRef();
  
  return (
    <group>
      <group>
        <primitive
          object={gltf.scene.clone()}
		  position={[-9.7, 4, -5.8]}
		  rotation={[0,THREE.MathUtils.degToRad(-180),0]}
  	  	  ref={Ref1}
  	    />
        <primitive
          object={gltf.scene.clone()}
		  position={[-9.7, 4, -7.8]}
		  rotation={[0,THREE.MathUtils.degToRad(-180),0]}
  	  	  ref={Ref1}
  	    />
      </group>   
      <group>
        <primitive
          object={gltf.scene.clone()}
		  position={[2.2, 4, -6.5]}
		  rotation={[0,0,0]}
  	  	  ref={Ref1}
  	    />
		<primitive
          object={gltf.scene.clone()}
		  position={[2.2, 4, -8.5]}
		  rotation={[0,0,0]}
  	  	  ref={Ref1}
  	    />
        <primitive
          object={gltf.scene.clone()}
		  position={[10.4, 4, 2.5]}
		  rotation={[0,THREE.MathUtils.degToRad(-180),0]}
  	  	  ref={Ref1}
  	    />
      </group>   
      <group>
        <primitive
          object={gltf.scene.clone()}
		  position={[10.4, 4, 0.5]}
		  rotation={[0,THREE.MathUtils.degToRad(-180),0]}
  	  	  ref={Ref1}
  	    />
        <primitive
          object={gltf.scene.clone()}
		  position={[11, 4, 2.5]}
		  rotation={[0,0,0]}
  	  	  ref={Ref1}
  	    />
      </group>   
      <group>
        <primitive
          object={gltf.scene.clone()}
		  position={[11, 4, 0.5]}
		  rotation={[0,0,0]}
  	  	  ref={Ref1}
  	    />
      </group>   
    </group>
  );
};
