import React, { useRef } from "react";
import {useGLTF, useMatcapTexture} from "@react-three/drei";

import modelPath from "./models/GroteTafel.glb";

export default () => {
    const {nodes, materials} = useGLTF(modelPath, true);

    console.log("Nodes:", nodes);
    // console.log("Materials:", materials);
    //796D6B_DED3CB_C6BAB1_ADA09B
    return (
        <group>
            <primitive // Big Table B14
                object={nodes.Scene.clone()}
                // scale={[0.05, 1, 0.05]}
                position={[-8, 0.3, 0.95]}
                material={materials["Material.001"]}
                castShadow={true}
            />
        </group>
    );
};
