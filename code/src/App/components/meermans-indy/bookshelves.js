import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "./glb/bookshelve.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);
  const Ref1 = useRef();


  
  return (
    <group>
      <group>
        <primitive
          object={gltf1.scene}
          position={[5, -2.6, -6.4]}
  	  	  ref={Ref1}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[7, -2.6, -6.4]}
  	  	  ref={Ref1}
  	    />
      </group>  

      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[13.3, -2.6, -6.4]}
  	  	  ref={Ref1}
  	    />
      </group>  

      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[15.3, -2.6, -6.4]}
  	  	  ref={Ref1}
  	    />
      </group>  

    {/* Boeken muur */}
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[4.3, -2.65, 4.27]}
          rotation={[0,1.57,0]}
  	  	  ref={Ref1}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[7.65, -2.65, 4.27]}
          rotation={[0,1.57,0]}
  	  	  ref={Ref1}
  	    />
      </group>  

    </group>
  );
};
