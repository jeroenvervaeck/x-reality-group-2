
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "../jonas/models/KabinetKast.glb";

export default () => {

  const gltf1 = useGLTF(glb, true);
  const Ref1 = useRef();
  
  return (
    <group>
    
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[2.65, -2.7, 2.3]}
          scale={[1.2,1.2,1.2]}
  	  	  ref={Ref1}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[2.65, -2.7, 0.45]}
          scale={[1.2,1.2,1.2]}
  	  	  ref={Ref1}
  	    />
      </group>  


    </group>
  );
};
