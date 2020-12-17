import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import modelPath from "./models/seatGrid.glb";

export default () => {
    const {nodes, materials} = useGLTF(modelPath, true);
    const seatGridRef = useRef();

    console.log("seatGrid:", nodes);
    console.log("sg materials:", materials);

    return (
        <group>
            <mesh
                geometry={nodes.Leuning.geometry}
                scale={[0.015, 0.2, 0.19]}
                position={[10, 1, -9.1]}
                rotation={[0, 3.14159, 0]}
                material={materials["Leuning"]}
                castShadow={true}
            />
        </group>
    );
};
