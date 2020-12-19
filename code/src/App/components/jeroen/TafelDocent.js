import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

import glb_file from "../morgane/glb/Tafels_eetzaal_morgbeka.glb";

export default () => {
  const gltf = useGLTF(glb_file, true);
  const Ref1 = useRef();
  
  return (

	<group>
{/* Tweede verdiep */}
		//Lokaal extended
		<primitive
            object={gltf.scene.clone()}
  		      position={[9.15, 3.9, 3.75]}
  		      rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />	
			
			<primitive
            object={gltf.scene.clone()}
				position={[9.15, 3.9, 2.34]}
  		      rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />
		//Lokaal webdev
		<primitive
            object={gltf.scene.clone()}
  		      position={[11.9, 3.9, 3.75]}
			  rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />
		<primitive
            object={gltf.scene.clone()}
  		      position={[11.9, 3.9, 2.34]}
			  rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />	
			
		//Lokaal programmeren
		<primitive
            object={gltf.scene.clone()}
  		      position={[-10.6, 3.9, -9]}
  		      rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />
		<primitive
            object={gltf.scene.clone()}
  		      position={[-10.6, 3.9, -7.59]}
  		      rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />
			
			//Groot lokaal 
		<primitive
            object={gltf.scene.clone()}
  		      position={[3.6, 3.9, -9]}
  		      rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />
		<primitive
            object={gltf.scene.clone()}
  		      position={[3.6, 3.9, -7.59]}
  		      rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />


{/* Eerste verdiep */}
//Lokaal extended
		<primitive
            object={gltf.scene.clone()}
  		      position={[9.15, 1.2, 3.75]}
  		      rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />	
			
			<primitive
            object={gltf.scene.clone()}
				position={[9.15, 1.2, 2.34]}
  		      rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />
		//Lokaal webdev
		<primitive
            object={gltf.scene.clone()}
  		      position={[11.9, 1.2, 3.75]}
			  rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />
		<primitive
            object={gltf.scene.clone()}
  		      position={[11.9, 1.2, 2.34]}
			  rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />	
			
			
			//Groot lokaal 
		<primitive
            object={gltf.scene.clone()}
  		      position={[3.6, 1.2, -9]}
  		      rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />
		<primitive
            object={gltf.scene.clone()}
  		      position={[3.6, 1.2, -7.59]}
  		      rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />
	</group>

  );
};
 