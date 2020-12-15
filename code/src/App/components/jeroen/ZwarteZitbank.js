import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb_file1 from "./glb/zitbank__jeroverv_1.glb";
import glb_file2 from "./glb/zitbank__jeroverv_2.glb";
import glb_file3 from "./glb/zitbank__jeroverv_3.glb";
import glb_file4 from "./glb/zitbank__jeroverv_4.glb";
import glb_file5 from "./glb/zitbank__jeroverv_5.glb";
import glb_file6 from "./glb/zitbank__jeroverv_6.glb";

export default () => {
  const gltf1 = useGLTF(glb_file1, true);
  const gltf2 = useGLTF(glb_file2, true);
  const gltf3 = useGLTF(glb_file3, true);
  const gltf4 = useGLTF(glb_file4, true);
  const gltf5 = useGLTF(glb_file5, true);
  const gltf6 = useGLTF(glb_file6, true);
  const Ref1 = useRef();
  const Ref2 = useRef();
  const Ref3 = useRef();
  const Ref4 = useRef();
  const Ref5 = useRef();
  const Ref6 = useRef();
  
  return (
    <group> 
      {/* First floor */}
      <group>
        <primitive
          object={gltf1.scene}
          position={[-6.6, 0.4, -2]}
  	  	  ref={Ref1}
  	    />
      </group>   
      <group>
        <primitive
          object={gltf2.scene}
          position={[6.6, 0.4, -2]}
  	  	  ref={Ref2}
  	    />
      </group>   
      <group>
        <primitive
          object={gltf3.scene}
          position={[15, 0.4, -2]}
  	  	  ref={Ref3}
  	    />
      </group> 

      {/* Second floor */}
      <group>
        <primitive
          object={gltf4.scene}
          position={[-6.6, 3.15, -2]}
  	  	  ref={Ref4}
  	    />
      </group>   
      <group>
        <primitive
          object={gltf5.scene}
          position={[6.6, 3.15, -2]}
  	  	  ref={Ref5}
  	    />
      </group>   
      <group>
        <primitive
          object={gltf6.scene}
          position={[15, 3.15, -2]}
  	  	  ref={Ref6}
  	    />
      </group>   
    </group>
  );
};
