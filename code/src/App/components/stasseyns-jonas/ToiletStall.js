import React, {useRef, useState} from "react";
import {useGLTF} from "@react-three/drei";

import modelPath from "./models/Toilet.glb";
import {useFrame} from "react-three-fiber";

export default () => {
    const {nodes, materials} = useGLTF(modelPath, true);

    // console.log("Nodes:", nodes);
    // console.log("Materials:", materials);
    const FFLD = useRef()
    const FFRD = useRef()
    const SFLD = useRef()
    const SFRD = useRef()

    const [stateFFLD, setActiveFFLD] = useState(false)
    const [stateFFRD, setActiveFFRD] = useState(false)
    const [stateSFLD, setActiveSFLD] = useState(false)
    const [stateSFRD, setActiveSFRD] = useState(false)


    useFrame(() => {
        // console.log(door)
        if (stateFFLD && FFLD.current.rotation.y >= 0) {
            console.log('animation in progress...')
            console.log(FFLD.current.rotation.y)
            FFLD.current.rotation.y -= 0.01
            FFLD.current.position.z += 0.004
            FFLD.current.position.x += 0.004
        }
        if (stateFFRD && FFRD.current.rotation.y >= 0) {
            console.log('animation in progress...')
            console.log(FFRD.current.rotation.y)
            FFRD.current.rotation.y -= 0.01
            FFRD.current.position.z += 0.004
            FFRD.current.position.x += 0.004
        }
        if (stateSFLD && SFLD.current.rotation.y >= 0) {
            console.log('animation in progress...')
            console.log(SFLD.current.rotation.y)
            SFLD.current.rotation.y -= 0.01
            SFLD.current.position.z += 0.004
            SFLD.current.position.x += 0.004
        }
        if (stateSFRD && SFRD.current.rotation.y >= 0) {
            console.log('animation in progress...')
            console.log(SFRD.current.rotation.y)
            SFRD.current.rotation.y -= 0.01
            SFRD.current.position.z += 0.004
            SFRD.current.position.x += 0.004
        }

    })

    return (
        <group>
            <mesh // Second Floor - Right Door
                geometry={nodes.Door.geometry}
                scale={[0.6, 1, 0.02]}
                rotation={[0, 1.5708, 0]}
                position={[-8, 4, -9.5]}
                material={materials["Material.004"]}
                castShadow={true}
                ref={SFRD}
                onClick={e => setActiveSFRD(true)}
            />
            <mesh // Second Floor - Left Door
                geometry={nodes.Door.geometry}
                scale={[0.6, 1, 0.02]}
                rotation={[0, 1.5708, 0]}
                position={[-8, 4, -8.2]}
                material={materials["Material.004"]}
                castShadow={true}
                ref={SFLD}
                onClick={e => setActiveSFLD(true)}
            />
            <mesh // Left Toilet Walls
                geometry={nodes.Toilet.children[0].geometry}
                scale={[0.65, 1, 0.012]}
                rotation={[0, 0, 0]}
                position={[-8.65, 4, -7.6]}
                material={materials["Material.004"]}
                castShadow={true}
            />
            <mesh // Left Toilet Walls
                geometry={nodes.Toilet.children[0].geometry}
                scale={[0.65, 1, 0.012]}
                rotation={[0, 0, 0]}
                position={[-8.65, 4, -8.9]}
                material={materials["Material.004"]}
                castShadow={true}
            />
            <mesh // Left Toilet
                geometry={nodes.Toilet.children[1].geometry}
                scale={[0.7, 1, 0.01]}
                rotation={[0, 0, 0]}
                position={[-8.6, 4, -7.7]}
                material={materials["Material.004"]}
                castShadow={true}
            />
            <mesh // Right Toilet
                geometry={nodes.Toilet.children[1].geometry}
                scale={[0.7, 1, 0.01]}
                rotation={[0, 0, 0]}
                position={[-8.6, 4, -9]}
                material={materials["Material.004"]}
                castShadow={true}
            />
            <mesh // Left Flush Buttons
                geometry={nodes.Flush.children[0].geometry}
                scale={[1, 1, 1]}
                rotation={[0, 0, -1.5707]}
                position={[-9.3, 4, -8.275]}
                material={materials["Button"]}
                castShadow={true}
            />
            <mesh // Left Flush
                geometry={nodes.Flush.children[1].geometry}
                scale={[1, 1, 1]}
                rotation={[0, 0, -1.5707]}
                position={[-9.3, 4, -8.275]}
                material={materials["Material.004"]}
                castShadow={true}
            />
            <mesh // Right Flush Buttons
                geometry={nodes.Flush.children[0].geometry}
                scale={[1, 1, 1]}
                rotation={[0, 0, -1.5707]}
                position={[-9.3, 4, -9.575]}
                material={materials["Button"]}
                castShadow={true}
            />
            <mesh // Right Flush
                geometry={nodes.Flush.children[1].geometry}
                scale={[1, 1, 1]}
                rotation={[0, 0, -1.5707]}
                position={[-9.3, 4, -9.575]}
                material={materials["Material.004"]}
                castShadow={true}
            />

            <mesh // First Floor - Right Door
                geometry={nodes.Door.geometry}
                scale={[0.6, 1, 0.02]}
                rotation={[0, 1.5708, 0]}
                position={[-8, 1.3, -9.5]}
                material={materials["Material.004"]}
                castShadow={true}
                ref={FFRD}
                onClick={e => setActiveFFRD(true)}
            />
            <mesh // First Floor - Left Door
                geometry={nodes.Door.geometry}
                scale={[0.6, 1, 0.02]}
                rotation={[0, 1.5708, 0]}
                position={[-8, 1.3, -8.2]}
                material={materials["Material.004"]}
                castShadow={true}
                ref={FFLD}
                onClick={e => setActiveFFLD(true)}
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
            <mesh // Left Toilet
                geometry={nodes.Toilet.children[1].geometry}
                scale={[0.7, 1, 0.01]}
                rotation={[0, 0, 0]}
                position={[-8.6, 1.3, -7.7]}
                material={materials["Material.004"]}
                castShadow={true}
            />
            <mesh // Right Toilet
                geometry={nodes.Toilet.children[1].geometry}
                scale={[0.7, 1, 0.01]}
                rotation={[0, 0, 0]}
                position={[-8.6, 1.3, -9]}
                material={materials["Material.004"]}
                castShadow={true}
            />
            <mesh // Left Flush Buttons
                geometry={nodes.Flush.children[0].geometry}
                scale={[1, 1, 1]}
                rotation={[0, 0, -1.5707]}
                position={[-9.3, 1.3, -8.275]}
                material={materials["Button"]}
                castShadow={true}
            />
            <mesh // Left Flush
                geometry={nodes.Flush.children[1].geometry}
                scale={[1, 1, 1]}
                rotation={[0, 0, -1.5707]}
                position={[-9.3, 1.3, -8.275]}
                material={materials["Material.004"]}
                castShadow={true}
            />
            <mesh // Right Flush Buttons
                geometry={nodes.Flush.children[0].geometry}
                scale={[1, 1, 1]}
                rotation={[0, 0, -1.5707]}
                position={[-9.3, 1.3, -9.575]}
                material={materials["Button"]}
                castShadow={true}
            />
            <mesh // Right Flush
                geometry={nodes.Flush.children[1].geometry}
                scale={[1, 1, 1]}
                rotation={[0, 0, -1.5707]}
                position={[-9.3, 1.3, -9.575]}
                material={materials["Material.004"]}
                castShadow={true}
            />
        </group>
    );
};

