import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import modelPath from "./models/Toilet.glb";

export default () => {
    const {nodes, materials} = useGLTF(modelPath, true);

    console.log("Nodes:", nodes);
    console.log("Materials:", materials);

    return (
        <group>
            <mesh // Left Toilet Door
                geometry={nodes.Door.geometry}
                scale={[0.6, 1, 0.02]}
                rotation={[0, 1.5708, 0]}
                position={[-8, 1.3, -9.5]}
                material={materials["Material.004"]}
                castShadow={true}
            />
            <mesh // Right Toilet Door
                geometry={nodes.Door.geometry}
                scale={[0.6, 1, 0.02]}
                rotation={[0, 1.5708, 0]}
                position={[-8, 1.3, -8.2]}
                material={materials["Material.004"]}
                castShadow={true}
            />
            <mesh // Left Toilet Walls
                geometry={nodes.Toilet.children[0].geometry}
                scale={[0.65, 1, 0.012]}
                rotation={[0, 0, 0]}
                position={[-8.65, 1.3, -7.6]}
                material={materials["Material.004"]}
                castShadow={true}
            />
            <mesh // Left Toilet Walls
                geometry={nodes.Toilet.children[0].geometry}
                scale={[0.65, 1, 0.012]}
                rotation={[0, 0, 0]}
                position={[-8.65, 1.3, -8.9]}
                material={materials["Material.004"]}
                castShadow={true}
            />
            <mesh // Left Toilet + Flush
                geometry={nodes.Toilet.children[1].geometry}
                scale={[0.6, 1, 0.01]}
                rotation={[0, 0, 0]}
                position={[-8, 1.3, -7.6]}
                material={materials["Material.004"]}
                castShadow={true}
            />
        </group>
    );
};
