import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "./glb/Stoel_eetzaal_morgbeka.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();
//   const Ref2 = useRef();

  return (
// Rij 1 
	<group>
		// Stoel 12
		<group>
            <primitive
            object={gltf1.scene.clone()}
			position={[-16.1, -2.2, -3.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
		</group>  
		// Stoel 11
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-15.6, -2.2, -3.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group> 

		// Stoel 10
		<group>
            <primitive
            object={gltf1.scene.clone()}
			position={[-14.85, -2.2, -3.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
		</group>  
		// Stoel 9
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-14.25, -2.2, -3.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 8
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-11.2, -2.2, -3.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
		</group>  
		// Stoel 7
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-10.7, -2.2, -3.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 6 
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-9.85, -2.2, -3.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group>   
		// Stoel 5 
		<group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-9.30, -2.2, -3.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 4
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-8.35, -2.2, -3.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 3
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-7.85, -2.2, -3.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group>  

		// Stoel 2 
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-7, -2.2, -3.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 1 
		<group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-6.5, -2.2, -3.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group>  

// Rij 2 
		 // Stoel 12
		<group>
            <primitive
            object={gltf1.scene.clone()}
			position={[-16.1, -2.2, -3.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
		</group>  
		// Stoel 11
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-15.6, -2.2, -3.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group> 

		// Stoel 10
		<group>
            <primitive
            object={gltf1.scene.clone()}
			position={[-14.85, -2.2, -3.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
		</group>  
		// Stoel 9
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-14.25, -2.2, -3.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 8
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-11.2, -2.2, -3.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
		</group>  
		// Stoel 7
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-10.7, -2.2, -3.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 6 
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-9.85, -2.2, -3.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group>   
		// Stoel 5 
		<group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-9.30, -2.2, -3.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 4
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-8.35, -2.2, -3.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 3
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-7.85, -2.2, -3.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group>  

		// Stoel 2 
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-7, -2.2, -3.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group>   
		// Stoel 1 
		<group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-6.5, -2.2, -3.7]}
			rotation={[0,  1.55,0]}
            ref={Ref1}
            />
        </group>

//Rij 3
	// Stoel 12
		<group>
            <primitive
            object={gltf1.scene.clone()}
			position={[-16.1, -2.2, -5.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
		</group>  
		// Stoel 11
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-15.6, -2.2, -5.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group> 

		// Stoel 10
		<group>
            <primitive
            object={gltf1.scene.clone()}
			position={[-14.85, -2.2, -5.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
		</group>  
		// Stoel 9
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-14.25, -2.2, -5.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 8
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-11.2, -2.2, -5.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
		</group>  
		// Stoel 7
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-10.7, -2.2, -5.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 6 
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-9.85, -2.2, -5.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group>   
		// Stoel 5 
		<group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-9.30, -2.2, -5.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 4
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-8.35, -2.2, -5.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 3
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-7.85, -2.2, -5.3]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group> 

// Rij 4 
		// Stoel 12
		<group>
            <primitive
            object={gltf1.scene.clone()}
			position={[-16.1, -2.2, -5.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
		</group>  
		// Stoel 11
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-15.6, -2.2, -5.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group> 

		// Stoel 10
		<group>
            <primitive
            object={gltf1.scene.clone()}
			position={[-14.85, -2.2, -5.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
		</group>  
		// Stoel 9
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-14.25, -2.2, -5.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 8
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-11.2, -2.2, -5.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
		</group>  
		// Stoel 7
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-10.7, -2.2, -5.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 6 
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-9.85, -2.2, -5.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group>   
		// Stoel 5 
		<group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-9.30, -2.2, -5.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 4
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-8.35, -2.2, -5.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 3
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-7.85, -2.2, -5.7]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group>  


//Rij 5
// Stoel 12
		<group>
            <primitive
            object={gltf1.scene.clone()}
			position={[-16.1, -2.2, -7.8]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
		</group>  
		// Stoel 11
	 	<group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-15.6, -2.2, -7.8]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group> 

		// Stoel 10
		<group>
            <primitive
            object={gltf1.scene.clone()}
			position={[-14.85, -2.2, -7.8]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
		</group>  
		// Stoel 9
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-14.25, -2.2, -7.8]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 8
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-11.2, -2.2, -7.8]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
		</group>  
		// Stoel 7
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-10.7, -2.2, -7.8]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 6 
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-9.85, -2.2, -7.8]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group>   
		// Stoel 5 
		<group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-9.30, -2.2, -7.8]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 4
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-8.35, -2.2, -7.8]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 3
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-7.85, -2.2, -7.8]}
			rotation={[0,-1.55,0]}
            ref={Ref1}
            />
        </group> 
//Rij 6
		// Stoel 12
		<group>
            <primitive
            object={gltf1.scene.clone()}
			position={[-16.1, -2.2, -8.2]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
		</group>  
		// Stoel 11
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-15.6, -2.2, -8.2]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group> 

		// Stoel 10
		<group>
            <primitive
            object={gltf1.scene.clone()}
			position={[-14.85, -2.2, -8.2]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
		</group>  
		// Stoel 9
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-14.25, -2.2, -8.2]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 8
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-11.2, -2.2, -8.2]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
		</group>  
		// Stoel 7
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-10.7, -2.2, -8.2]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 6 
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-9.85, -2.2, -8.2]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group>   
		// Stoel 5 
		<group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-9.30, -2.2, -8.2]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 4
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-8.35, -2.2, -8.2]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group>  
		// Stoel 3
		 <group>
            <primitive
            object={gltf1.scene.clone()}
            position={[-7.85, -2.2, -8.2]}
			rotation={[0, 1.55,0]}
            ref={Ref1}
            />
        </group>  
	</group>
  );
};
