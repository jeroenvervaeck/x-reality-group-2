import React from "react";
import {useGLTF} from "@react-three/drei";

import modelPath from "../meermans-indy/glb/rondeStoel.glb";

export default () => {
    const {nodes, materials} = useGLTF(modelPath, true);

    console.log("Nodes:", nodes);
    console.log("Materials:", materials);

    return (
        <group>
            <primitive // 2nd floor - Lecturer Chair
                object={nodes.Scene.clone()}
                position={[9.8, 3.3, 3.8]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77,0.9,0.9]}
            />



            <primitive // 2nd floor - First Row
                object={nodes.Scene.clone()}
                position={[7.3, 3.3, 1]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77,0.9,0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[7.3, 3.3, 1.65]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77,0.9,0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[7.3, 3.3, 2.3]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77,0.9,0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[7.3, 3.3, 2.95]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77,0.9,0.9]}
            />



            <primitive // 2nd floor - Second Row
                object={nodes.Scene.clone()}
                position={[5.3, 3.3, 1]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77,0.9,0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[5.3, 3.3, 1.65]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77,0.9,0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[5.3, 3.3, 2.3]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77,0.9,0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[5.3, 3.3, 2.95]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77,0.9,0.9]}
            />



            <primitive // 2nd floor - Third Row
                object={nodes.Scene.clone()}
                position={[3.3, 3.3, 1]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77,0.9,0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[3.3, 3.3, 1.65]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77,0.9,0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[3.3, 3.3, 2.3]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77,0.9,0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[3.3, 3.3, 2.95]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77,0.9,0.9]}
            />
        </group>
    );
};

