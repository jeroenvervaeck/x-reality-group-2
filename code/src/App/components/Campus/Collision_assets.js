import * as THREE from "three";
import { useBox } from "@react-three/cannon";
import { Box } from "@react-three/drei";

export default (props) => {
  const color = '0x999999'
  const opacity = 0.90;

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

  return (
    <group>
      {/* Gelijksvloer */}
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
    </group>
  );
}; 

