import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import glb from "./glb/Koffieautomaat_eetzaal_morgbeka.glb";
import glb_cup from "./glb/Koffiebeker_eetzaal_morgbeka.glb";

export default () => {
  const [renderCup, setRenderCup] = useState(true);
  const gltf1 = useGLTF(glb, true);
  const gltf1_cup = useGLTF(glb_cup, true);
  const Ref1 = useRef();
  const Ref1_cup = useRef();

  return (
  <group>  
    <group>
        <primitive
          onclick = {() => setRenderCup(! renderCup)} 
            object={gltf1.scene}
  		      position={[-6.5, -2.7, 2.2]}
  		      rotation={[0, 1.55,0]}
    	  	  ref={Ref1}
  	    />

<primitive

            object={gltf1_cup.scene}
  		      position={[-6.93, -2.08, 1.2]}
            rotation={[0, 1.55,0]}
            scale={[3,3,3]}
    	  	  ref={Ref1_cup}
  	    />
    </group>
  </group>
  );
};
