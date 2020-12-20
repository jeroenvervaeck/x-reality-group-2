import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb_file1 from "./glb/tafel-hal-1e2e_verdiep__jeroverv_1.glb";
import glb_file2 from "./glb/tafel-hal-1e2e_verdiep__jeroverv_2.glb";
import glb_file3 from "./glb/tafel-hal-1e2e_verdiep__jeroverv_3.glb";
import glb_file4 from "./glb/tafel-hal-1e2e_verdiep__jeroverv_4.glb";

export default () => {
  const gltf1 = useGLTF(glb_file1, true);
  const gltf2 = useGLTF(glb_file2, true);
  const gltf3 = useGLTF(glb_file3, true);
  const gltf4 = useGLTF(glb_file4, true);
  const Ref1 = useRef();
  const Ref2 = useRef();
  const Ref3 = useRef();
  const Ref4 = useRef();
  
  return (
    <group>
      <group>
        <primitive
          object={gltf1.scene}
          position={[-3, 0.2, -5.5]}
  	  	  ref={Ref1}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf2.scene}
          position={[0.75, 0.2, -5.5]}
  	  	  ref={Ref2}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf3.scene}
          position={[-3, 3, -5.5]}
  	  	  ref={Ref3}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf4.scene}
          position={[0.75, 3, -5.5]}
  	  	  ref={Ref4}
  	    />
      </group>  
    </group>
  );
};
