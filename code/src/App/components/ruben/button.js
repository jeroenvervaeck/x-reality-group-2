import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "./button.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();
  const Ref2 = useRef();

  return (
    <group>
    
    <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[-1.77, -1.56, 0.31]}
          rotation={[0,-1.55,0]}
          scale={[1,1,1]}
  	  	  ref={Ref1}
  	    />
      </group>  
      

      

    </group>
  );
};