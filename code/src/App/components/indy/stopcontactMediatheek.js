
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "../morgane/glb/tafelMetStopcontact_morgbeka.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();
  const Ref2 = useRef();
  const Ref3 = useRef();
  const Ref4 = useRef();


  
  return (
    <group>
      <group>
        <primitive
          object={gltf1.scene}
          position={[9, -1.8, 1.59]}
          rotation={[0,1.57,0]}
  	  	  ref={Ref1}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[9, -1.8, 2.4]}
          rotation={[0,-1.57,0]}
  	  	  ref={Ref2}
  	    />
      </group>  

      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[9, -1.8, -1.23]}
          rotation={[0,1.57,0]}
  	  	  ref={Ref3}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[9, -1.8, -0.4]}
          rotation={[0,-1.57,0]}
  	  	  ref={Ref4}
  	    />
      </group>  



  

    </group>
  );
};
