
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import glb from "./glb/Tafels_eetzaal_morgbeka.glb";

export default () => {
  const gltf1 = useGLTF(glb, true);

  const Ref1 = useRef();
//   const Ref2 = useRef();

  return (
    <group>
		{/* rij BS */}
		<group>
	        <primitive
	          object={gltf1.scene.clone()}
			  position={[-16, -2, -3.5]}
			  rotation={[0,-1.55,0]}
	  	  	  ref={Ref1}
	  	    />
	      </group>

		  <group>
	        <primitive
	          object={gltf1.scene.clone()}
			  position={[-14.6, -2, -3.5]}
			  rotation={[0,-1.55,0]}
	  	  	  ref={Ref1}
	  	    />
	      </group>   

		<group>
	        <primitive
	          object={gltf1.scene.clone()}
			  position={[-11, -2, -3.5]}
			  rotation={[0,-1.55,0]}
	  	  	  ref={Ref1}
	  	    />
      	</group>   

    <group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-9.6, -2, -3.5]}
		  rotation={[0,-1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group>  

	  <group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-8.2, -2, -3.5]}
		  rotation={[0,-1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group>  

	  <group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-6.8, -2, -3.5]}
		  rotation={[0,-1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group>   
		{/* rij M */}
		<group>
	        <primitive
	          object={gltf1.scene.clone()}
			  position={[-16, -2, -5.5]}
			  rotation={[0,-1.55,0]}
	  	  	  ref={Ref1}
	  	    />
	      </group>

		  <group>
	        <primitive
	          object={gltf1.scene.clone()}
			  position={[-14.6, -2, -5.5]}
			  rotation={[0,-1.55,0]}
	  	  	  ref={Ref1}
	  	    />
	      </group>   

		<group>
	        <primitive
	          object={gltf1.scene.clone()}
			  position={[-11, -2, -5.5]}
			  rotation={[0,-1.55,0]}
	  	  	  ref={Ref1}
	  	    />
      	</group>   

    <group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-9.6, -2, -5.5]}
		  rotation={[0,-1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group>  

	  <group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-8.2, -2, -5.5]}
		  rotation={[0,-1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group>  

	  {/* <group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-6.8, -2, -5.5]}
		  rotation={[0,-1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group>    */}

		{/* rij FS */}
		<group>
	        <primitive
	          object={gltf1.scene.clone()}
			  position={[-16, -2, -8]}
			  rotation={[0,-1.55,0]}
	  	  	  ref={Ref1}
	  	    />
	      </group>

		  <group>
	        <primitive
	          object={gltf1.scene.clone()}
			  position={[-14.6, -2, -8]}
			  rotation={[0,-1.55,0]}
	  	  	  ref={Ref1}
	  	    />
	      </group>   

		<group>
	        <primitive
	          object={gltf1.scene.clone()}
			  position={[-11, -2, -8]}
			  rotation={[0,-1.55,0]}
	  	  	  ref={Ref1}
	  	    />
      	</group>   

    <group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-9.6, -2, -8]}
		  rotation={[0,-1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group>  

	  <group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-8.2, -2, -8]}
		  rotation={[0,-1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group>  

	  {/* <group>
        <primitive
          object={gltf1.scene.clone()}
		  position={[-6.8, -2, -8]}
		  rotation={[0,-1.55,0]}
  	  	  ref={Ref1}
  	    />
      </group>    */}

	  

    </group>
  );
};
