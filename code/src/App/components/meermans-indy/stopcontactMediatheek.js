
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "../bekaert-morgane/glb/tafelMetStopcontact_morgbeka.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();

  
  return (
    <group>
      <group>
        <primitive
          object={gltf1.scene}
          position={[10, -1.9, 1.99]}
          rotation={[0,1.57,0]}
  	  	  ref={Ref1}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[10, -1.9, 2.8]}
          rotation={[0,-1.57,0]}
  	  	  ref={Ref1}
  	    />
      </group>  

      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[10, -1.9, -0.83]}
          rotation={[0,1.57,0]}
  	  	  ref={Ref1}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[10, -1.9, -0.02]}
          rotation={[0,-1.57,0]}
  	  	  ref={Ref1}
  	    />
      </group>  

    </group>
  );
};
