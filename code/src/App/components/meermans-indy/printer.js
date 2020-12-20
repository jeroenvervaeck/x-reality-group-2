
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "./glb/printer.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();



  
  return (
    <group>
    
    <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[14.3, -2.9, -0.3]}
          rotation={[0,-1.55,0]}
          scale={[0.95,0.95,0.95]}
  	  	  ref={Ref1}
  	    />
      </group>  

      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[14.3, -2.9, 2.2]}
          rotation={[0,-1.55,0]}
          scale={[0.95,0.95,0.95]}
  	  	  ref={Ref1}
  	    />
      </group>  

    </group>
  );  
};
