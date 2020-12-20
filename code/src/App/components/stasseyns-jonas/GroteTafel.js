import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import modelPath from "./models/GroteTafel.glb";

export default () => {
    const {nodes, materials} = useGLTF(modelPath, true);

    console.log("Nodes:", nodes);
    // console.log("Materials:", materials);

    return (
        <group>
            <primitive // Big Table B14
                object={nodes.Scene.clone()}
                // scale={[0.05, 1, 0.05]}
                position={[-8, 1, 1]}
                material={materials["Material.001"]}
                castShadow={true}
            />
        </group>
    );
};
