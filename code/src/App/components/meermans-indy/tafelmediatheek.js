
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "../bekaert-morgane/glb/Tafels_eetzaal_morgbeka.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();
  
  return (
    <group>
      <group>
        <primitive
          object={gltf1.scene}
          position={[15.03, -1.9,  4.05]}
          rotation={[0,1.57,0]}
  	  	  ref={Ref1}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[16.44, -1.9,   4.05]}
          rotation={[0,1.57,0]}
  	  	  ref={Ref1}
  	    />
      </group>  

      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[17.55, -1.9, 2.34]}
  	  	  ref={Ref1}
  	    />
      </group>  

      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[17.55, -1.9, 3.75]}
  	  	  ref={Ref1}
  	    />
      </group>  

    {/* Tafels tussen printers */}
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[14.3, -1.9, 0.95]}
  	  	  ref={Ref1}
  	    />
      </group>  

    {/* Tafels kot */}
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[10.2, -1.9, -6.2]}
  	  	  ref={Ref1}
  	    />
      </group>  


    </group>
  );
};
