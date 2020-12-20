import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import modelPath from "./models/GroteTafel.glb";

export default () => {
    const {nodes, materials} = useGLTF(modelPath, true);

    // console.log("Nodes:", nodes);
    // console.log("Materials:", materials);

    return (
        <group>
            <mesh
                geometry={nodes.bigtable.geometry}
                scale={[1, 0.025, 1]}
                position={[-11, 1.3, -6]}
                material={materials["Material.001"]}
                castShadow={true}
            />
        </group>
    );
};
