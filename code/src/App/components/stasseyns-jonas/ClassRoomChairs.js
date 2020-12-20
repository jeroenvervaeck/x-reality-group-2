import React from "react";
import {useGLTF} from "@react-three/drei";

import modelPath from "../meermans-indy/glb/rondeStoel.glb";

export default () => {
    const {nodes, materials} = useGLTF(modelPath, true);

    // console.log("Nodes:", nodes);
    // console.log("Materials:", materials);

    const firstFloorY = 0.6
    const secondFloorY = 3.2

    return (
        <group>
            <primitive // 2nd floor - Lecturer Chair
                object={nodes.Scene.clone()}
                position={[9.8, 3.3, 3.8]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />


            <primitive // 2nd floor - First Row
                object={nodes.Scene.clone()}
                position={[7.3, 3.3, 1]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[7.3, 3.3, 1.65]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[7.3, 3.3, 2.3]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[7.3, 3.3, 2.95]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />


            <primitive // 2nd floor - Second Row
                object={nodes.Scene.clone()}
                position={[5.3, 3.3, 1]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[5.3, 3.3, 1.65]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[5.3, 3.3, 2.3]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[5.3, 3.3, 2.95]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />


            <primitive // 2nd floor - Third Row
                object={nodes.Scene.clone()}
                position={[3.3, 3.3, 1]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[3.3, 3.3, 1.65]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[3.3, 3.3, 2.3]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[3.3, 3.3, 2.95]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />

            <primitive // 1st floor - Lecturer Chair
                object={nodes.Scene.clone()}
                position={[9.8, firstFloorY, 3.8]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />


            <primitive // 1st floor - First Row
                object={nodes.Scene.clone()}
                position={[7.3, firstFloorY, 1]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[7.3, firstFloorY, 1.65]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[7.3, firstFloorY, 2.3]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[7.3, firstFloorY, 2.95]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />


            <primitive // 1st floor - Second Row
                object={nodes.Scene.clone()}
                position={[5.3, firstFloorY, 1]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[5.3, firstFloorY, 1.65]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[5.3, firstFloorY, 2.3]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[5.3, firstFloorY, 2.95]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />


            <primitive // 1st floor - Third Row
                object={nodes.Scene.clone()}
                position={[3.3, firstFloorY, 1]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[3.3, firstFloorY, 1.65]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[3.3, firstFloorY, 2.3]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[3.3, firstFloorY, 2.95]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />


            <primitive // B24
                object={nodes.Scene.clone()}
                position={[-12.1, secondFloorY, -5.2]}
                rotation={[0, 0, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-12.75, secondFloorY, -5.2]}
                rotation={[0, 0, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-13.4, secondFloorY, -5.2]}
                rotation={[0, 0, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-14.05, secondFloorY, -5.2]}
                rotation={[0, 0, 0]}
                scale={[0.77, 0.9, 0.9]}
            />

            <primitive // B24
                object={nodes.Scene.clone()}
                position={[-15.2, secondFloorY, -5.2]}
                rotation={[0, 0, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-15.85, secondFloorY, -5.2]}
                rotation={[0, 0, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-16.5, secondFloorY, -5.2]}
                rotation={[0, 0, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-17.15, secondFloorY, -5.2]}
                rotation={[0, 0, 0]}
                scale={[0.77, 0.9, 0.9]}
            />


            <primitive // B24
                object={nodes.Scene.clone()}
                position={[-12.1, secondFloorY, -8.7]}
                rotation={[0, 0, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-12.75, secondFloorY, -8.7]}
                rotation={[0, 0, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-13.4, secondFloorY, -8.7]}
                rotation={[0, 0, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-14.05, secondFloorY, -8.7]}
                rotation={[0, 0, 0]}
                scale={[0.77, 0.9, 0.9]}
            />

            <primitive // B24
                object={nodes.Scene.clone()}
                position={[-15.2, secondFloorY, -8.7]}
                rotation={[0, 0, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-15.85, secondFloorY, -8.7]}
                rotation={[0, 0, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-16.5, secondFloorY, -8.7]}
                rotation={[0, 0, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-17.15, secondFloorY, -8.7]}
                rotation={[0, 0, 0]}
                scale={[0.77, 0.9, 0.9]}
            />


            <primitive // B24
                object={nodes.Scene.clone()}
                position={[-12.1, secondFloorY, -3.6]}
                rotation={[0, 3.142, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-12.75, secondFloorY, -3.6]}
                rotation={[0, 3.142, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-13.4, secondFloorY, -3.6]}
                rotation={[0, 3.142, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-14.05, secondFloorY, -3.6]}
                rotation={[0, 3.142, 0]}
                scale={[0.77, 0.9, 0.9]}
            />

            <primitive // B24
                object={nodes.Scene.clone()}
                position={[-15.2, secondFloorY, -3.6]}
                rotation={[0, 3.142, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-15.85, secondFloorY, -3.6]}
                rotation={[0, 3.142, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-16.5, secondFloorY, -3.6]}
                rotation={[0, 3.142, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-17.15, secondFloorY, -3.6]}
                rotation={[0, 3.142, 0]}
                scale={[0.77, 0.9, 0.9]}
            />


            <primitive // B24
                object={nodes.Scene.clone()}
                position={[-12.1, secondFloorY, -7.1]}
                rotation={[0, 3.142, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-12.75, secondFloorY, -7.1]}
                rotation={[0, 3.142, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-13.4, secondFloorY, -7.1]}
                rotation={[0, 3.142, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-14.05, secondFloorY, -7.1]}
                rotation={[0, 3.142, 0]}
                scale={[0.77, 0.9, 0.9]}
            />

            <primitive // B24
                object={nodes.Scene.clone()}
                position={[-15.2, secondFloorY, -7.1]}
                rotation={[0, 3.142, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-15.85, secondFloorY, -7.1]}
                rotation={[0, 3.142, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-16.5, secondFloorY, -7.1]}
                rotation={[0, 3.142, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[-17.15, secondFloorY, -7.1]}
                rotation={[0, 3.142, 0]}
                scale={[0.77, 0.9, 0.9]}
            />

            <primitive // B24 Lecturer
                object={nodes.Scene.clone()}
                position={[-10.2, secondFloorY, -9]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />


            <primitive // B22
                object={nodes.Scene.clone()}
                position={[13.3, secondFloorY, 1.05]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[13.3, secondFloorY, 1.70]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[13.3, secondFloorY, 2.35]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[13.3, secondFloorY, 3]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />


            <primitive // B22
                object={nodes.Scene.clone()}
                position={[14.9, secondFloorY, 1.05]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[14.9, secondFloorY, 1.70]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[14.9, secondFloorY, 2.35]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[14.9, secondFloorY, 3]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />


            <primitive // B22
                object={nodes.Scene.clone()}
                position={[16.5, secondFloorY, 1.05]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[16.5, secondFloorY, 1.70]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[16.5, secondFloorY, 2.35]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[16.5, secondFloorY, 3]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />

            <primitive // B22 Lecturer
                object={nodes.Scene.clone()}
                position={[11.6, secondFloorY, 2.4]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />





            <primitive // B22
                object={nodes.Scene.clone()}
                position={[13.3, firstFloorY, 1.05]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[13.3, firstFloorY, 1.70]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[13.3, firstFloorY, 2.35]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[13.3, firstFloorY, 3]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />


            <primitive // B22
                object={nodes.Scene.clone()}
                position={[14.9, firstFloorY, 1.05]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[14.9, firstFloorY, 1.70]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[14.9, firstFloorY, 2.35]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[14.9, firstFloorY, 3]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />


            <primitive // B22
                object={nodes.Scene.clone()}
                position={[16.5, firstFloorY, 1.05]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[16.5, firstFloorY, 1.70]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[16.5, firstFloorY, 2.35]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
            <primitive
                object={nodes.Scene.clone()}
                position={[16.5, firstFloorY, 3]}
                rotation={[0, -1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />

            <primitive // B22 Lecturer
                object={nodes.Scene.clone()}
                position={[11.6, firstFloorY, 2.4]}
                rotation={[0, 1.5707, 0]}
                scale={[0.77, 0.9, 0.9]}
            />
        </group>
    );
};

