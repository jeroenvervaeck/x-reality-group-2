import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "./glb/bookshelve.glb";

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
          position={[5, -2.4, -6.4]}
  	  	  ref={Ref1}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[7, -2.4, -6.4]}
  	  	  ref={Ref2}
  	    />
      </group>  

      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[13.3, -2.4, -6.4]}
  	  	  ref={Ref3}
  	    />
      </group>  

      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[15.3, -2.4, -6.4]}
  	  	  ref={Ref4}
  	    />
      </group>  

    </group>
  );
};
