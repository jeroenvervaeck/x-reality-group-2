import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

import glb from "./glb/bookshelve.glb";
import button from './glb/button.glb'

export default () => {
  const gltf1 = useGLTF(glb, true);
  const gltf2 = useGLTF(button, true);

  const BookRef = useRef();
  const Ref1 = useRef();
  const Ref2 = useRef();

  const [animation, setActive] = useState(false);
  const endPosition = [20, -2.6, -6.4];
  const begin =   [5, -2.6, -6.4];


  useFrame(() => {
        if(animation == true){
          console.log(BookRef.current.position.z )
            BookRef.current.position.z  += 0.01;
                if(Ref1.current.position.z > endPosition[2]){
                   // carRef.current.position.x  += 0.035;
                   setActive (!animation)

                    Ref1.current.position.set(0,0.71,0) ;
                    console.log(Ref1.current.position);

                }
        }
    });

  
  return (
    <group>
        <primitive
          object={gltf2.scene}
          position={[8.1, -1.6, -3.6]}
          rotation={[0,0,0]}
          scale={[0.5,0.5,0.5]}
          onClick={  e => setActive (!animation) }
  	  	  ref={Ref2}
  	    />
   
        <primitive
          object={gltf1.scene}
          position={animation ?  [5, -2.6, -6.4] : begin}
  	  	  ref={BookRef}
  	    />
       <group>

        <primitive
          object={gltf1.scene.clone()}
          position={[7, -2.6, -6.4]}
  	  	  ref={BookRef}
  	    />
 
   
        <primitive
          object={gltf1.scene.clone()}
          position={[13.3, -2.6, -6.4]}
  	  	  ref={BookRef}
  	    />
  


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
