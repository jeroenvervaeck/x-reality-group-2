
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "./glb/printer.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();
  const Ref2 = useRef();



  
  return (
    <group>
    
    <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[14.3, -2.7, -1.1]}
          rotation={[0,-1.55,0]}
          scale={[0.95,0.85,0.85]}
  	  	  ref={Ref1}
  	    />
      </group>  

      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[14.3, -2.7, 1.4]}
          rotation={[0,-1.55,0]}
          scale={[0.95,0.85,0.85]}
  	  	  ref={Ref2}
  	    />
      </group>  

    </group>
  );
};
