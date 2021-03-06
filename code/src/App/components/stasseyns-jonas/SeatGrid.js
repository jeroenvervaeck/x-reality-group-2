import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import modelPath from "./models/seatGrid.glb";

export default () => {
    const {nodes, materials} = useGLTF(modelPath, true);
    const seatGridRef = useRef();

    return (
        <group>
            <mesh
                geometry={nodes.Leuning.geometry}
                scale={[0.015, 0.3, 0.19]}
                position={[8, 0.91, -5.6]}
                rotation={[0, 0, 0]}
                material={materials["Leuning"]}
                castShadow={true}
            />
            <mesh
                geometry={nodes.Cube002.geometry}
                scale={[0.05, 0.2, 0.1745]}
                position={[8.75, 1, -5.6]}
                rotation={[0, 0, 0]}
                material={materials["Material"]}
                castShadow={true}
            />
            <mesh
                geometry={nodes.Tafel.children[0].geometry}
                scale={[0.175, 0.01, 0.1745]}
                position={[8.2, 1, -5.6]}
                rotation={[0, 0, 0]}
                material={materials["Material"]}
                castShadow={true}
            />
            <mesh
                geometry={nodes.Tafel.children[1].geometry}
                scale={[0.175, 0.01, 0.1745]}
                position={[8.2, 1, -5.6]}
                rotation={[0, 0, 0]}
                material={materials["TableEdgeBlack"]}
                castShadow={true}
            />
            <mesh
                geometry={nodes.Leuning.geometry}
                scale={[0.015, 0.3, 0.19]}
                position={[8, 3.61, -5.6]}
                rotation={[0, 0, 0]}
                material={materials["Leuning"]}
                castShadow={true}
            />
            <mesh
                geometry={nodes.Cube002.geometry}
                scale={[0.05, 0.2, 0.1745]}
                position={[8.75, 3.7, -5.6]}
                rotation={[0, 0, 0]}
                material={materials["Material"]}
                castShadow={true}
            />
            <mesh
                geometry={nodes.Tafel.children[0].geometry}
                scale={[0.175, 0.01, 0.1745]}
                position={[8.2, 3.7, -5.6]}
                rotation={[0, 0, 0]}
                material={materials["Material"]}
                castShadow={true}
            />
            <mesh
                geometry={nodes.Tafel.children[1].geometry}
                scale={[0.175, 0.01, 0.1745]}
                position={[8.2, 3.7, -5.6]}
                rotation={[0, 0, 0]}
                material={materials["TableEdgeBlack"]}
                castShadow={true}
            />
        </group>
    );
};
