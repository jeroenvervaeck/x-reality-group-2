import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "./plant.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();
  const Ref2 = useRef();

  return (
    <group>
    
    <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[1.3, -2.7, -6.5]}
          rotation={[0,-1.55,0]}
          scale={[1.3,1.3,1.3]}
  	  	  ref={Ref1}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[-3.0, -2.7, -6.5]}
          rotation={[0,-1.55,0]}
          scale={[1.3,1.3,1.3]}
  	  	  ref={Ref2}
  	    />
      </group>  

      

    </group>
  );
};