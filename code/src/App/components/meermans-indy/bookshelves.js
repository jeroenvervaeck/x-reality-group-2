import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

import glb from "./glb/bookshelve.glb";
import button from './glb/button.glb'

export default () => {
  const gltf1 = useGLTF(glb, true);
  const gltf2 = useGLTF(button, true);

  const BookRef = useRef();
  const BookRef2 = useRef();

  const Ref1 = useRef();
  const Ref2 = useRef();

  const buttonClick = () => {
    setActive (!animation)
  }
  const [animation, setActive] = useState(false);
  const [animation2, setActive2] = useState(false);

  const endPosition = -1.260000000000001;
  const endPosition2 = -0.7300000000000004;


  useFrame(() => {
        if(animation == true){
          console.log(BookRef.current.rotation.z )
            BookRef.current.rotation.z  -= 0.01;
                if(BookRef.current.rotation.z == endPosition){
                  setActive2 (!animation2)
                  setActive (!animation)
                  BookRef.current.rotation.z  = -1.260000000000001;

                }
        }else if(animation2 == true){
            BookRef2.current.rotation.z  -= 0.01;
                if(BookRef2.current.rotation.z == endPosition2){
                  setActive2 (!animation2)
                  BookRef2.current.rotation.z  = -0.7300000000000004;
                  BookRef.current.rotation.z  = -1.260000000000001;

                }
        }
    });

  
  return (
    <group>
      <group>
        <mesh
        onClick={() => buttonClick()}
        >
          <primitive
            object={gltf2.scene}
            position={[8.1, -1.6, -3.6]}
            rotation={[0,0,0]}
            scale={[0.5,0.5,0.5]}
            ref={Ref2}
          />
        </mesh>
   
        <primitive
          object={gltf1.scene.clone()}
          position={[5, -2.6, -6.4]}
          rotation={[0,0,0]}
  	  	  ref={BookRef}
  	    />
        <primitive
          object={gltf1.scene.clone()}
          position={[7, -2.6, -6.4]}
          rotation={[0,0,0]}
  	  	  ref={BookRef2}
  	    />
      </group>
      <group>

   
 
   
        <primitive
          object={gltf1.scene.clone()}
          position={[13.3, -2.6, -6.4]}
  	  	  ref={Ref1}
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
