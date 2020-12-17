import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import modelPath from "./models/OvaleTafels.glb";

export default () => {
    const {nodes, materials} = useGLTF(modelPath, true);

    console.log("Nodes:", nodes);
    console.log("Materials:", materials);

    return (
        <group>
            <mesh
                geometry={nodes.Table.geometry}
                scale={[1, 0.025, 1]}
                position={[-15, 1.3, 0]}
                material={materials["TableWhite"]}
                castShadow={true}
            />
            <mesh
                geometry={nodes.Table.geometry}
                scale={[1, 0.025, 1]}
                position={[-11, 1.3, 0]}
                material={materials["TableWhite"]}
                castShadow={true}
            />
            <mesh
                geometry={nodes.Table.geometry}
                scale={[1, 0.025, 1]}
                position={[-15, 1.3, 3]}
                material={materials["TableWhite"]}
                castShadow={true}
            />
            <mesh
                geometry={nodes.Table.geometry}
                scale={[1, 0.025, 1]}
                position={[-11, 1.3, 3]}
                material={materials["TableWhite"]}
                castShadow={true}
            />
            <mesh
                geometry={nodes.Table.geometry}
                scale={[1, 0.025, 1]}
                position={[-15, 1.3, -3]}
                material={materials["TableWhite"]}
                castShadow={true}
            />
            <mesh
                geometry={nodes.Table.geometry}
                scale={[1, 0.025, 1]}
                position={[-15, 1.3, -6]}
                material={materials["TableWhite"]}
                castShadow={true}
            />
            <mesh
                geometry={nodes.Table.geometry}
                scale={[1, 0.025, 1]}
                position={[-11, 1.3, -6]}
                material={materials["TableWhite"]}
                castShadow={true}
            />
        </group>
    );
};
