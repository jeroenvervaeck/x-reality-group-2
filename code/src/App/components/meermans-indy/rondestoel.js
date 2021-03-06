
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "./glb/rondeStoel.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);
  const Ref1 = useRef();


    const createChairs = () => {
        const copyArray = new Array(11).fill()
        return(
        <>
        { copyArray.map((j, i) => {

            // if (i == 0) {x = (4.3)}else{ let xX = (i +0.8); x = (4.3 + xX)}
            let x=4.3 + (i*1.2)

            return (<group>
                        <primitive
                            object={gltf1.scene.clone()}
                            position={[x, -2.5,-9.2]}
                            scale={[0.77,0.9,0.9]}
                            rotation={[0,3.1,0]}
                            ref={Ref1}
                        />
                    </group> ) }            
            )} </>
         ) }

  
  return (
    <group>
    {/* Stoelen Computers */}
        { true && createChairs()}
        <group>
            <primitive
                object={gltf1.scene.clone()}
                position={[3.2, -2.5, -5.3]}
                scale={[0.77,0.9,0.9]}
                rotation={[0,-1.6,0]}
                ref={Ref1}
            />
            <primitive
                object={gltf1.scene.clone()}
                position={[3.2, -2.5, -6.6]}
                scale={[0.77,0.9,0.9]}
                rotation={[0,-1.6,0]}
                ref={Ref1}
            />
            <primitive
                object={gltf1.scene.clone()}
                position={[3.2, -2.5, -8.1]}
                scale={[0.77,0.9,0.9]}
                rotation={[0,-1.6,0]}
                ref={Ref1}
            />
        </group>  

                <group>
                   <primitive
                    object={gltf1.scene.clone()}
                    position={[17.2, -2.5, -3.5]}
                    scale={[0.77,0.9,0.9]}
                    rotation={[0,1.6,0]}
                    ref={Ref1}
                    />
                    <primitive
                        object={gltf1.scene.clone()}
                        position={[17.2, -2.5, -4.8]}
                        scale={[0.77,0.9,0.9]}
                        rotation={[0,1.6,0]}
                        ref={Ref1}
                    />
                    <primitive
                        object={gltf1.scene.clone()}
                        position={[17.2, -2.5, -6.3]}
                        scale={[0.77,0.9,0.9]}
                        rotation={[0,1.6,0]}
                        ref={Ref1}
                    />
                    <primitive
                        object={gltf1.scene.clone()}
                        position={[17.2, -2.5, -7.8]}
                        scale={[0.77,0.9,0.9]}
                        rotation={[0,1.6,0]}
                        ref={Ref1}
                    />
            </group>

        
    {/* Stoelen eerste stopcontacttafel */}
        {/* 1e rij */}
        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[9, -2.5, -1.1]}
            scale={[0.77,0.9,0.9]}
            ref={Ref1}
            />
        </group>  

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[9.6, -2.5, -1.1]}
            scale={[0.77,0.9,0.9]}
            ref={Ref1}
            />
        </group>
        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[10.3, -2.5, -1.1]}
            scale={[0.77,0.9,0.9]}
            ref={Ref1}
            />
        </group>    

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[11, -2.5, -1.1]}
            scale={[0.77,0.9,0.9]}
            ref={Ref1}
            />
        </group>    

        {/* 2e rij */}

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[9, -2.5, 0.3]}
            scale={[0.77,0.9,0.9]}
            rotation={[0,3.1,0]}
            ref={Ref1}
            />
        </group>  

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[9.6, -2.5, 0.3]}
            scale={[0.77,0.9,0.9]}
            rotation={[0,3.1,0]}
            ref={Ref1}
            />
        </group>
        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[10.3, -2.5, 0.3]}
            scale={[0.77,0.9,0.9]}
            rotation={[0,3.1,0]}
            ref={Ref1}
            />
        </group>    

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[11, -2.5, 0.3]}
            scale={[0.77,0.9,0.9]}
            rotation={[0,3.1,0]}
            ref={Ref1}
            />
        </group>    

    {/* stoelen 2e stopcontacttafel */}

        {/* rij 1 */}

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[9, -2.5, 1.7]}
            scale={[0.77,0.9,0.9]}
            ref={Ref1}
            />
        </group>  

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[9.6, -2.5, 1.7]}
            scale={[0.77,0.9,0.9]}
            ref={Ref1}
            />
        </group>
        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[10.3, -2.5, 1.7]}
            scale={[0.77,0.9,0.9]}
            ref={Ref1}
            />
        </group>    

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[11, -2.5, 1.7]}
            scale={[0.77,0.9,0.9]}
            ref={Ref1}
            />
        </group>    

        {/* rij 2 */}

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[9, -2.5, 3.1]}
            scale={[0.77,0.9,0.9]}
            rotation={[0,3.1,0]}
            ref={Ref1}
            />
        </group>  

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[9.6, -2.5, 3.1]}
            scale={[0.77,0.9,0.9]}
            rotation={[0,3.1,0]}
            ref={Ref1}
            />
        </group>
        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[10.3, -2.5, 3.1]}
            scale={[0.77,0.9,0.9]}
            rotation={[0,3.1,0]}
            ref={Ref1}
            />
        </group>    

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[11, -2.5, 3.1]}
            scale={[0.77,0.9,0.9]}
            rotation={[0,3.1,0]}
            ref={Ref1}
            />
        </group>    


       {/* Stoelen kot  */}
       <group>
            <primitive
                object={gltf1.scene.clone()}
                position={[10.5, -2.5, -5.9]}
                scale={[0.77,0.9,0.9]}
                rotation={[0,-1.6,0]}
                ref={Ref1}
            />
            <primitive
                object={gltf1.scene.clone()}
                position={[10.5, -2.5, -6.5]}
                scale={[0.77,0.9,0.9]}
                rotation={[0,-1.6,0]}
                ref={Ref1}
            />
        </group>  
        
        <group>
            <primitive
                object={gltf1.scene.clone()}
                position={[9.8, -2.5, -5.9]}
                scale={[0.77,0.9,0.9]}
                rotation={[0,1.6,0]}
                ref={Ref1}
            />
            <primitive
                object={gltf1.scene.clone()}
                position={[9.8, -2.5, -6.5]}
                scale={[0.77,0.9,0.9]}
                rotation={[0,1.6,0]}
                ref={Ref1}
            />
        </group>   
    </group>
  );
};
