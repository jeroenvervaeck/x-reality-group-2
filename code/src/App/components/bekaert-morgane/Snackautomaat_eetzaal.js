
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "./glb/Snackautomaat_eetzaal_morgbeka.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();
//   const Ref2 = useRef();

  return (
    <group>

	  <group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-8.3, -2.8, 1.75]}
		  rotation={[0, 1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group> 

	       <primitive
          object={gltf1.scene.clone()}
		  position={[-9.6, -2.8, 1.75]}
		  rotation={[0, 1.55,0]}
  	  	  ref={Ref1}
  	    />
     </group>    

  );
};
