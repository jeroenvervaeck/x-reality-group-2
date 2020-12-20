import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

import glb_file from "../bekaert-morgane/glb/tafelMetStopcontact_morgbeka.glb";

export default () => {
  const gltf = useGLTF(glb_file, true);
  const Ref1 = useRef();
  
  return (
    <group>
      {/* verdiep 1 */}
      {/* lokaal Extended */}
      <group>
        <group>
          <primitive
            object={gltf.scene.clone()}
  		      position={[3.6, 1.2, 2]}
  		      rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />
          <primitive
            object={gltf.scene.clone()}
  		      position={[5.6, 1.2, 2]}
  		      rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />
          <primitive
            object={gltf.scene.clone()}
  		      position={[7.6, 1.2, 2]}
  		      rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />
        </group>  
        {/* lokaal webdev */}  
        <group>
          <primitive
            object={gltf.scene.clone()}
  		      position={[13, 1.2, 2]}
  		      rotation={[0, 0, 0]}
    	  	  ref={Ref1}
    	    />
          <primitive
            object={gltf.scene.clone()}
  		      position={[14.6, 1.2, 2]}
  		      rotation={[0, 0, 0]}
    	  	  ref={Ref1}
    	    />
          <primitive
            object={gltf.scene.clone()}
  		      position={[16.2, 1.2, 2]}
  		      rotation={[0, 0, 0]}
    	  	  ref={Ref1}
    	    />
        </group>    
      </group>

      {/* verdiep 2 */}
      {/* lokaal Extended */}
      <group>
        <group>
          <primitive
            object={gltf.scene.clone()}
  		      position={[3.6, 3.9, 2]}
  		      rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />
          <primitive
            object={gltf.scene.clone()}
  		      position={[5.6, 3.9, 2]}
  		      rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />
          <primitive
            object={gltf.scene.clone()}
  		      position={[7.6, 3.9, 2]}
  		      rotation={[0, THREE.MathUtils.degToRad(-180), 0]}
    	  	  ref={Ref1}
    	    />
        </group>  
        {/* lokaal webdev */}  
        <group>
          <primitive
            object={gltf.scene.clone()}
  		      position={[13, 3.9, 2]}
  		      rotation={[0, 0, 0]}
    	  	  ref={Ref1}
    	    />
          <primitive
            object={gltf.scene.clone()}
  		      position={[14.6, 3.9, 2]}
  		      rotation={[0, 0, 0]}
    	  	  ref={Ref1}
    	    />
          <primitive
            object={gltf.scene.clone()}
  		      position={[16.2, 3.9, 2]}
  		      rotation={[0, 0, 0]}
    	  	  ref={Ref1}
    	    />
        </group>   


		 {/* Programmeer lokaal */}  
        <group>
		//Rij2 a	
			<primitive
            object={gltf.scene.clone()}
  		      position={[-16.1, 3.9, -7.5]}
  		      rotation={[0, -1.57, 0]}
    	  	  ref={Ref1}
    	    />
          <primitive
            object={gltf.scene.clone()}
  		      position={[-16.1, 3.9, -8.31]}
  		      rotation={[0, 1.57, 0]}
    	  	  ref={Ref1}
    	    />
		//Rij2 b
		<primitive
            object={gltf.scene.clone()}
  		      position={[-13.06, 3.9, -7.5]}
  		      rotation={[0, -1.57, 0]}
    	  	  ref={Ref1}
    	    />
          <primitive
            object={gltf.scene.clone()}
  		      position={[-13.06, 3.9, -8.31]}
  		      rotation={[0, 1.57, 0]}
    	  	  ref={Ref1}
    	    />


//Rij2 a	
			<primitive
            object={gltf.scene.clone()}
  		      position={[-16.1, 3.9, -4]}
  		      rotation={[0, -1.57, 0]}
    	  	  ref={Ref1}
    	    />
          <primitive
            object={gltf.scene.clone()}
  		      position={[-16.1, 3.9, -4.81]}
  		      rotation={[0, 1.57, 0]}
    	  	  ref={Ref1}
    	    />
		//Rij2 b
		<primitive
            object={gltf.scene.clone()}
  		      position={[-13.06, 3.9, -4]}
  		      rotation={[0, -1.57, 0]}
    	  	  ref={Ref1}
    	    />
          <primitive
            object={gltf.scene.clone()}
  		      position={[-13.06, 3.9, -4.81]}
  		      rotation={[0, 1.57, 0]}
    	  	  ref={Ref1}
    	    />

        </group>     
      </group>
    </group>
  );
};
