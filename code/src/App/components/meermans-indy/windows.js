
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "./glb/windos.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();
  const Ref2 = useRef();
  const Ref3 = useRef();

  const Ref4 = useRef();
  const Ref5 = useRef();
  const Ref6 = useRef();


  const Ref7 = useRef();
  const Ref8 = useRef();
  const Ref9 = useRef();

  const Ref10 = useRef();
  const Ref11 = useRef();
  const Ref12 = useRef();



  
  return (
    <group>
    
    <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[4.3, -1.8, -9.7]}
  	  	  ref={Ref1}
  	    />
      </group>  

      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[5.5, -1.8, -9.7]}
  	  	  ref={Ref2}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[6.7, -1.8, -9.7]}
  	  	  ref={Ref3}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[7.9, -1.8, -9.7]}
  	  	  ref={Ref4}
  	    />
      </group> 

      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[9.2, -1.8, -9.7]}
  	  	  ref={Ref5}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[10.4, -1.8, -9.7]}
  	  	  ref={Ref6}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[11.6, -1.8, -9.7]}
  	  	  ref={Ref7}
  	    />
      </group>  
      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[12.8, -1.8, -9.7]}
  	  	  ref={Ref8}
  	    />
      </group>  

      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[14, -1.8, -9.7]}
  	  	  ref={Ref9}
  	    />
      </group> 

     <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[15.2, -1.8, -9.7]}
  	  	  ref={Ref10}
  	    />
      </group>   

      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[16.4, -1.8, -9.7]}
  	  	  ref={Ref11}
  	    />
      </group>   

      <group>
        <primitive
          object={gltf1.scene.clone()}
          position={[17.6, -1.8, -7.7]}
          rotation={[0,-1.55,0]}
  	  	  ref={Ref12}
  	    />
      </group>   
 

    </group>
  );
};
