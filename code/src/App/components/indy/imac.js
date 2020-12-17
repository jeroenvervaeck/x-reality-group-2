
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "./glb/imac.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();
  const Ref2 = useRef();
  const Ref3 = useRef();

  const Ref4 = useRef();
  const Ref5 = useRef();
  const Ref6 = useRef();




  
  return (
    <group>
    
    <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[17.3, -1.9, -3.4]}
          rotation={[0,-1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group>  

      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[17.3, -1.9, -4.7]}
          rotation={[0,-1.55,0]}
  	  	  ref={Ref2}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[17.3, -1.9, -6.2]}
          rotation={[0,-1.55,0]}
  	  	  ref={Ref3}
  	    />
      </group>  

      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[2.8, -1.9, -5.4]}
          rotation={[0,1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group>  

      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[2.8, -1.9, -6.7]}
          rotation={[0,1.55,0]}
  	  	  ref={Ref2}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[2.8, -1.9, -8.2]}
          rotation={[0,1.55,0]}
  	  	  ref={Ref3}
  	    />
      </group>  

    </group>
  );
};
