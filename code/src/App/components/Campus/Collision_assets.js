import * as THREE from "three";
import { useBox } from "@react-three/cannon";
import { Box } from "@react-three/drei";

export default (props) => {
  const color = new THREE.Color( 0xff0000 );
  const opacity = 0.8;

  const mass = 0; // kg

  // Gelijkvloers
  const library_printers_args = [0.6, 3, 0.8];
  const library_printers_position = [14.2, -2.3, 1.2];
  const library_printers_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [library_printers_ref] = useBox(() => ({ ...props, mass,
    args: library_printers_args,
    rotation: library_printers_rotation,
    position: library_printers_position,
  }));
  const library_bookshelf_1_FS_args = [0.5, 2.9, 1.6];
  const library_bookshelf_1_FS_position = [15.2, -2.3, -6.4];
  const library_bookshelf_1_FS_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [library_bookshelf_1_FS_ref] = useBox(() => ({ ...props, mass,
    args: library_bookshelf_1_FS_args,
    rotation: library_bookshelf_1_FS_rotation,
    position: library_bookshelf_1_FS_position,
  }));
  const library_bookshelf_2_FS_args = [0.5, 2.9, 1.6];
  const library_bookshelf_2_FS_position = [13.4, -2.3, -6.4];
  const library_bookshelf_2_FS_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [library_bookshelf_2_FS_ref] = useBox(() => ({ ...props, mass,
    args: library_bookshelf_2_FS_args,
    rotation: library_bookshelf_2_FS_rotation,
    position: library_bookshelf_2_FS_position,
  }));
  const library_bookshelf_3_FS_args = [0.5, 2.9, 1.6];
  const library_bookshelf_3_FS_position = [5, -2.3, -6.4];
  const library_bookshelf_3_FS_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [library_bookshelf_3_FS_ref] = useBox(() => ({ ...props, mass,
    args: library_bookshelf_3_FS_args,
    rotation: library_bookshelf_3_FS_rotation,
    position: library_bookshelf_3_FS_position,
  }));
  const library_bookshelf_4_FS_args = [0.5, 2.9, 1.6];
  const library_bookshelf_4_FS_position = [7, -2.3, -6.4];
  const library_bookshelf_4_FS_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [library_bookshelf_4_FS_ref] = useBox(() => ({ ...props, mass,
    args: library_bookshelf_4_FS_args,
    rotation: library_bookshelf_4_FS_rotation,
    position: library_bookshelf_4_FS_position,
  }));
  const library_bookshelf_1_BS_args = [0.5, 2.9, 1.6];
  const library_bookshelf_1_BS_position = [7.8, -2.3, 4.2];
  const library_bookshelf_1_BS_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
  const [library_bookshelf_1_BS_ref] = useBox(() => ({ ...props, mass,
    args: library_bookshelf_1_BS_args,
    rotation: library_bookshelf_1_BS_rotation,
    position: library_bookshelf_1_BS_position,
  }));
  const library_bookshelf_2_BS_args = [0.5, 2.9, 1.6];
  const library_bookshelf_2_BS_position = [4.2, -2.3, 4.2];
  const library_bookshelf_2_BS_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
  const [library_bookshelf_2_BS_ref] = useBox(() => ({ ...props, mass,
    args: library_bookshelf_2_BS_args,
    rotation: library_bookshelf_2_BS_rotation,
    position: library_bookshelf_2_BS_position,
  }));

  // Diningroom
  //Vuilbakken
  const diningroom_Vuilbakken1_args = [1, 0.75, 1]; // x, y, z
  const diningroom_Vuilbakken1_position = [-4.7, -2.3, 0]; // x, z, y
  const diningroom_Vuilbakken1_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
  const [diningroom_Vuilbakken1_ref] = useBox(() => ({ ...props, mass,
    args: diningroom_Vuilbakken1_args,
    rotation: diningroom_Vuilbakken1_rotation,
    position: diningroom_Vuilbakken1_position,
  }));

  const diningroom_Vuilbakken2_args = [1, 0.75, 1]; // x, y, z
  const diningroom_Vuilbakken2_position = [-17.43, -2.3, 3]; // x, z, y
  const diningroom_Vuilbakken2_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
  const [diningroom_Vuilbakken2_ref] = useBox(() => ({ ...props, mass,
    args: diningroom_Vuilbakken2_args,
    rotation: diningroom_Vuilbakken2_rotation,
    position: diningroom_Vuilbakken2_position,
  }));

  //BS
  const diningroom_Tafel_rij1a_args = [1, 5.55, 1]; // x, y, z --> //Grootte 
  const diningroom_Tafel_rij1a_position = [-8.9, -2.4, -3.5]; // x, z, y  --> //position
  const diningroom_Tafel_rij1a_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
  const [diningroom_Tafel_rij1a_ref] = useBox(() => ({ ...props, mass,
    args: diningroom_Tafel_rij1a_args,
    rotation: diningroom_Tafel_rij1a_rotation,
    position: diningroom_Tafel_rij1a_position,
  }));
  const diningroom_Tafel_rij1b_args = [1, 2.8, 1]; // x, y, z --> //Grootte 
  const diningroom_Tafel_rij1b_position = [-15.3, -2.4, -3.5]; // x, z, y  --> //position
  const diningroom_Tafel_rij1b_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
  const [diningroom_Tafel_rij1b_ref] = useBox(() => ({ ...props, mass,
    args: diningroom_Tafel_rij1b_args,
    rotation: diningroom_Tafel_rij1b_rotation,
    position: diningroom_Tafel_rij1b_position,
  }));
  //M
  const diningroom_Tafel_rij2a_args = [1, 4.2, 1]; // x, y, z --> //Grootte 
  const diningroom_Tafel_rij2a_position = [-9.6, -2.4, -5.5]; // x, z, y  --> //position
  const diningroom_Tafel_rij2a_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
  const [diningroom_Tafel_rij2a_ref] = useBox(() => ({ ...props, mass,
    args: diningroom_Tafel_rij2a_args,
    rotation: diningroom_Tafel_rij2a_rotation,
    position: diningroom_Tafel_rij2a_position,
  }));
  const diningroom_Tafel_rij2b_args = [1, 2.8, 1]; // x, y, z --> //Grootte 
  const diningroom_Tafel_rij2b_position = [-15.3, -2.4, -5.5]; // x, z, y  --> //position
  const diningroom_Tafel_rij2b_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
  const [diningroom_Tafel_rij2b_ref] = useBox(() => ({ ...props, mass,
    args: diningroom_Tafel_rij2b_args,
    rotation: diningroom_Tafel_rij2b_rotation,
    position: diningroom_Tafel_rij2b_position,
  }));

  //FS
    const diningroom_Tafel_rij3a_args = [1, 4.2, 1]; // x, y, z --> //Grootte 
    const diningroom_Tafel_rij3a_position = [-9.6, -2.4, -7.95]; // x, z, y  --> //position
    const diningroom_Tafel_rij3a_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
    const [diningroom_Tafel_rij3a_ref] = useBox(() => ({ ...props, mass,
      args: diningroom_Tafel_rij3a_args,
      rotation: diningroom_Tafel_rij3a_rotation,
      position: diningroom_Tafel_rij3a_position,
    }));
    const diningroom_Tafel_rij3b_args = [1, 2.8, 1]; // x, y, z --> //Grootte 
    const diningroom_Tafel_rij3b_position = [-15.3, -2.4, -7.95]; // x, z, y  --> //position
    const diningroom_Tafel_rij3b_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
    const [diningroom_Tafel_rij3b_ref] = useBox(() => ({ ...props, mass,
      args: diningroom_Tafel_rij3b_args,
      rotation: diningroom_Tafel_rij3b_rotation,
      position: diningroom_Tafel_rij3b_position,
    }));

  //Voetbaltafel
  const diningroom_Kickertafel1_args = [0.8, 1.43, 1]; // x, y, z --> //Grootte 
  const diningroom_Kickertafel1_position = [-5.78, -2.4, -5.92]; // x, z, y  --> //position
  const diningroom_Kickertafel1_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
  const [diningroom_Kickertafel1_ref] = useBox(() => ({ ...props, mass,
    args: diningroom_Kickertafel1_args,
    rotation: diningroom_Kickertafel1_rotation,
    position: diningroom_Kickertafel1_position,
  }));

  const diningroom_Kickertafel2_args = [0.8, 1.43, 1]; // x, y, z --> //Grootte 
  const diningroom_Kickertafel2_position = [-5.78, -2.4, -7.35]; // x, z, y  --> //position
  const diningroom_Kickertafel2_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
  const [diningroom_Kickertafel2_ref] = useBox(() => ({ ...props, mass,
    args: diningroom_Kickertafel2_args,
    rotation: diningroom_Kickertafel2_rotation,
    position: diningroom_Kickertafel2_position,
  }));

  //Automaten
  const diningroom_Automaten_args = [1, 3.6, 3.5]; // x, y, z --> //Grootte 
  const diningroom_Automaten_position = [-8.3, -2.4, 1.68]; // x, z, y  --> //position
  const diningroom_Automaten_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
  const [diningroom_Automaten_ref] = useBox(() => ({ ...props, mass,
    args: diningroom_Automaten_args,
    rotation: diningroom_Automaten_rotation,
    position: diningroom_Automaten_position,
  }));

  // Bruine tafels
  const bruine_Tafels_args = [2, 2, 1]; // x, y, z --> //Grootte 
  const bruine_Tafels_position = [0.75, 3, -5.5]; // x, z, y  --> //position
  const bruine_Tafels_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
  const [bruine_Tafels_ref] = useBox(() => ({ ...props, mass,
    args: bruine_Tafels_args,
    rotation: bruine_Tafels_rotation,
    position: bruine_Tafels_position,
  }));

  const bruine_Tafels2_args = [2, 2, 1]; // x, y, z --> //Grootte 
  const bruine_Tafels2_position = [-3, 3, -5.5]; // x, z, y  --> //position
  const bruine_Tafels2_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
  const [bruine_Tafels2_ref] = useBox(() => ({ ...props, mass,
    args: bruine_Tafels2_args,
    rotation: bruine_Tafels2_rotation,
    position: bruine_Tafels2_position,
  }));

  const bruine_Tafels3_args = [2, 2, 1]; // x, y, z --> //Grootte 
  const bruine_Tafels3_position = [-3, 0.2, -5.5]; // x, z, y  --> //position
  const bruine_Tafels3_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
  const [bruine_Tafels3_ref] = useBox(() => ({ ...props, mass,
    args: bruine_Tafels3_args,
    rotation: bruine_Tafels3_rotation,
    position: bruine_Tafels3_position,
  }));
3
  const bruine_Tafels4_args = [2, 2, 1]; // x, y, z --> //Grootte 
  const bruine_Tafels4_position = [0.75, 0.2, -5.5]; // x, z, y  --> //position
  const bruine_Tafels4_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
  const [bruine_Tafels4_ref] = useBox(() => ({ ...props, mass,
    args: bruine_Tafels4_args,
    rotation: bruine_Tafels4_rotation,
    position: bruine_Tafels4_position,
  }));
  
  return ( 
    <group>
      {/* Gelijksvloer */}
      {/* Library */}
      <Box args={library_printers_args} ref={library_printers_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={library_bookshelf_1_FS_args} ref={library_bookshelf_1_FS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={library_bookshelf_2_FS_args} ref={library_bookshelf_2_FS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={library_bookshelf_3_FS_args} ref={library_bookshelf_3_FS_ref} >
        <meshBasicMaterial color={color} opacity3={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={library_bookshelf_4_FS_args} ref={library_bookshelf_4_FS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={library_bookshelf_1_BS_args} ref={library_bookshelf_1_BS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={library_bookshelf_2_BS_args} ref={library_bookshelf_2_BS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      
{/* Diningroom */}
//Vuilbakken
      <Box args={diningroom_Vuilbakken1_args} ref={diningroom_Vuilbakken1_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>

      <Box args={diningroom_Vuilbakken2_args} ref={diningroom_Vuilbakken2_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
 //Rij BS
      <Box args={diningroom_Tafel_rij1a_args} ref={diningroom_Tafel_rij1a_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={diningroom_Tafel_rij1b_args} ref={diningroom_Tafel_rij1b_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
//Rij M
      <Box args={diningroom_Tafel_rij2a_args} ref={diningroom_Tafel_rij2a_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={diningroom_Tafel_rij2b_args} ref={diningroom_Tafel_rij2b_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
//Rij FS
      <Box args={diningroom_Tafel_rij3a_args} ref={diningroom_Tafel_rij3a_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={diningroom_Tafel_rij3b_args} ref={diningroom_Tafel_rij3b_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
//Kickertafel     
      <Box args={diningroom_Kickertafel1_args} ref={diningroom_Kickertafel1_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={diningroom_Kickertafel2_args} ref={diningroom_Kickertafel2_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
//Automaten   
      <Box args={diningroom_Automaten_args} ref={diningroom_Automaten_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
//Broin tafels   
	  <Box args={bruine_Tafels_args} ref={bruine_Tafels_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={bruine_Tafels2_args} ref={bruine_Tafels2_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
	  <Box args={bruine_Tafels3_args} ref={bruine_Tafels3_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={bruine_Tafels4_args} ref={bruine_Tafels4_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
    </group>
  );
}; 

