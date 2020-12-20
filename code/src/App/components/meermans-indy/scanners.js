
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "./glb/scanners.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();



  
  return (
    <group>
    
    <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[0.5, -2.7, -2.6]}
          scale={[1.1,1.1,1.1]}
  	  	  ref={Ref1}
  	    />
      </group>  

     
    </group>
  );
};
