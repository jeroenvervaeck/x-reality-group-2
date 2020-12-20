
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb1 from "./glb/Bekaert_Morgane_toy.glb";
import glb2 from "./glb/Vervaeck_Jeroen_toy.glb";
import glb3 from "./glb/JonasStasseyns-ToyCar.glb";
import glb4 from "./glb/de_hauwere_yentel_toy2.glb";
import glb5 from "./glb/meermans_indy_toy.glb";
import glb6 from "./glb/maesdranckx_ruben_Toy.glb";






export default () => {
    const gltf1 = useGLTF(glb1, true);
    const gltf2 = useGLTF(glb2, true);
    const gltf3 = useGLTF(glb3, true);
    const gltf4 = useGLTF(glb4, true);
    const gltf5 = useGLTF(glb5, true);
    const gltf6 = useGLTF(glb6, true);


    const Ref1 = useRef();

  
  return (
    <group>
    
    <group>
        <primitive
          object={gltf1.scene}
          position={[14.3, -1.3, -20.3]}
          rotation={[0,-1.55,0]}
          scale={[0.95,0.95,0.95]}
  	  	  ref={Ref1}
  	    />
        <primitive
          object={gltf2.scene}
          position={[20.3, -1.7, -20.3]}
          rotation={[0,-1.55,0]}
          scale={[0.6,0.6,0.6]}
  	  	  ref={Ref1}
  	    />
        <primitive
          object={gltf3.scene}
          position={[9.3, -0.9, -20.3]}
          rotation={[0,-1.55,0]}
          scale={[0.95,0.95,0.95]}
  	  	  ref={Ref1}
  	    />
        <primitive
          object={gltf4.scene}
          position={[1.3, -1.9, -20.3]}
          rotation={[0,-1.55,0]}
          scale={[0.95,0.95,0.95]}
  	  	  ref={Ref1}
  	    />
        <primitive
          object={gltf5.scene}
          position={[-6.3, -1.9, -20.3]}
          rotation={[0,-1.55,0]}
          scale={[0.95,0.95,0.95]}
  	  	  ref={Ref1}
  	    />
        <primitive
          object={gltf6.scene}
          position={[-10.3, -1.4, -20.3]}
          rotation={[0,-1.55,0]}
          scale={[0.95,0.95,0.95]}
  	  	  ref={Ref1}
  	    />
      </group>  

    </group>
  );  
};
