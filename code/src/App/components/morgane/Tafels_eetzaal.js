
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "./glb/Tafels_eetzaal_morgbeka.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();
//   const Ref2 = useRef();

  return (
    <group>
    

	<group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-16, -1.75, -3.5]}
		  rotation={[0,-1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group>   


	<group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-11.5, -1.75, -3.5]}
		  rotation={[0,-1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group>   

    <group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-10, -1.75, -3.5]}
		  rotation={[0,-1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group>  

	  <group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-8.5, -1.75, -3.5]}
		  rotation={[0,-1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group>  

	  <group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-7, -1.75, -3.5]}
		  rotation={[0,-1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group>   

	  {/* <group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-10, -1.75, -3.5]}
		  rotation={[0,-1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group>   */}
	  

    </group>
  );
};
