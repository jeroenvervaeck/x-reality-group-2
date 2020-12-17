import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import modelPath from "./models/OvaleTafels.glb";

export default () => {
    const {nodes, materials} = useGLTF(modelPath, true);
    const seatGridRef = useRef();

    console.log("OvaleTafels:", nodes);
    console.log("OT materials:", materials);

    return (
        <group>
            <mesh
                geometry={nodes.Table.geometry}
                scale={[1, 0.02, 1]}
                position={[-15, 1, 0]}
                material={materials["TableWhite"]}
                castShadow={true}
            />
            <mesh
                geometry={nodes.Table.geometry}
                scale={[1, 0.02, 1]}
                position={[-11, 1, 0]}
                material={materials["TableWhite"]}
                castShadow={true}
            />
            <mesh
                geometry={nodes.Table.geometry}
                scale={[1, 0.02, 1]}
                position={[-15, 1, 0]}
                material={materials["TableWhite"]}
                castShadow={true}
            />
            <mesh
                geometry={nodes.Table.geometry}
                scale={[1, 0.02, 1]}
                position={[-15, 1, 0]}
                material={materials["TableWhite"]}
                castShadow={true}
            />
            <mesh
                geometry={nodes.Table.geometry}
                scale={[1, 0.02, 1]}
                position={[-15, 1, 0]}
                material={materials["TableWhite"]}
                castShadow={true}
            />
            <mesh
                geometry={nodes.Table.geometry}
                scale={[1, 0.02, 1]}
                position={[-15, 1, 0]}
                material={materials["TableWhite"]}
                castShadow={true}
            />
            <mesh
                geometry={nodes.Table.geometry}
                scale={[1, 0.02, 1]}
                position={[-15, 1, 0]}
                material={materials["TableWhite"]}
                castShadow={true}
            />
        </group>
    );
};
