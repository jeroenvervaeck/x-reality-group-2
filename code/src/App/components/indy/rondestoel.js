
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "./glb/rondeStoel.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);
  const Ref1 = useRef();






  
  return (
    <group>
    {/* Stoelen eerste stopcontacttafel */}
        {/* 1e rij */}
        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[9, -2.5, -1.5]}
            scale={[0.77,0.9,0.9]}
            ref={Ref1}
            />
        </group>  

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[9.6, -2.5, -1.5]}
            scale={[0.77,0.9,0.9]}
            ref={Ref1}
            />
        </group>
        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[10.3, -2.5, -1.5]}
            scale={[0.77,0.9,0.9]}
            ref={Ref1}
            />
        </group>    

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[11, -2.5, -1.5]}
            scale={[0.77,0.9,0.9]}
            ref={Ref1}
            />
        </group>    

        {/* 2e rij */}

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[9, -2.5, -0.1]}
            scale={[0.77,0.9,0.9]}
            rotation={[0,3.1,0]}
            ref={Ref1}
            />
        </group>  

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[9.6, -2.5, -0.1]}
            scale={[0.77,0.9,0.9]}
            rotation={[0,3.1,0]}
            ref={Ref1}
            />
        </group>
        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[10.3, -2.5, -0.1]}
            scale={[0.77,0.9,0.9]}
            rotation={[0,3.1,0]}
            ref={Ref1}
            />
        </group>    

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[11, -2.5, -0.1]}
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
            position={[9, -2.5, 1.3]}
            scale={[0.77,0.9,0.9]}
            ref={Ref1}
            />
        </group>  

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[9.6, -2.5, 1.3]}
            scale={[0.77,0.9,0.9]}
            ref={Ref1}
            />
        </group>
        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[10.3, -2.5, 1.3]}
            scale={[0.77,0.9,0.9]}
            ref={Ref1}
            />
        </group>    

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[11, -2.5, 1.3]}
            scale={[0.77,0.9,0.9]}
            ref={Ref1}
            />
        </group>    

        {/* rij 2 */}

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[9, -2.5, 2.7]}
            scale={[0.77,0.9,0.9]}
            rotation={[0,3.1,0]}
            ref={Ref1}
            />
        </group>  

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[9.6, -2.5, 2.7]}
            scale={[0.77,0.9,0.9]}
            rotation={[0,3.1,0]}
            ref={Ref1}
            />
        </group>
        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[10.3, -2.5, 2.7]}
            scale={[0.77,0.9,0.9]}
            rotation={[0,3.1,0]}
            ref={Ref1}
            />
        </group>    

        <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[11, -2.5, 2.7]}
            scale={[0.77,0.9,0.9]}
            rotation={[0,3.1,0]}
            ref={Ref1}
            />
        </group>    


     
    </group>
  );
};
