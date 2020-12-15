import * as THREE from "three";
import { useBox } from "@react-three/cannon";
import { Box } from "@react-three/drei";

export default (props) => {
  const color = '0x999999'
  const opacity = 0.75;
  const mass = 0; // kg

  const elivatorShaft_args = [1.8, 2.4, 8];
  const elivatorShaft_position = [-1, 1, 1.7];
  const elivatorShaft_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [elivatorShaft_ref] = useBox(() => ({ ...props, mass,
    args: elivatorShaft_args,
    rotation: elivatorShaft_rotation,
    position: elivatorShaft_position,
  }));
  const dinningroomBar_args = [8.5, 1, 2];
  const dinningroomBar_position = [-10.8, -2.5, -0.7];
  const dinningroomBar_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [dinningroomBar_ref] = useBox(() => ({ ...props, mass,
    args: dinningroomBar_args,
    rotation: dinningroomBar_rotation,
    position: dinningroomBar_position,
  }));
  const dinningroomSmallWall_args = [8.5, 0.4, 4];
  const dinningroomSmallWall_position = [-10.8, -2, 2.5];
  const dinningroomSmallWall_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [dinningroomSmallWall_ref] = useBox(() => ({ ...props, mass,
    args: dinningroomSmallWall_args,
    rotation: dinningroomSmallWall_rotation,
    position: dinningroomSmallWall_position,
  }));

  /* exteriorWalls */
  const exteriorWall_RS_args = [0.4, 17, 8];
  const exteriorWall_RS_position = [-18, 1, -2];
  const exteriorWall_RS_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [exteriorWall_RS_ref] = useBox(() => ({ ...props, mass,
    args: exteriorWall_RS_args,
    rotation: exteriorWall_RS_rotation,
    position: exteriorWall_RS_position,
  }));

  const exteriorWall_LS_args = [0.4, 17, 8];
  const exteriorWall_LS_position = [18.2, 1, -2];
  const exteriorWall_LS_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [exteriorWall_LS_ref] = useBox(() => ({ ...props, mass,
    args: exteriorWall_LS_args,
    rotation: exteriorWall_LS_rotation,
    position: exteriorWall_LS_position,
  }));

  const exteriorWall_BS_args = [38, 0.4, 8];
  const exteriorWall_BS_position = [0, 1, 5];
  const exteriorWall_BS_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [exteriorWall_BS_ref] = useBox(() => ({ ...props, mass,
    args: exteriorWall_BS_args,
    rotation: exteriorWall_BS_rotation,
    position: exteriorWall_BS_position,
  }));

  const exteriorWall_FS_12_args = [38, 0.4, 5];
  const exteriorWall_FS_12_position = [0, 2, -10.5];
  const exteriorWall_FS_12_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [exteriorWall_FS_12_ref] = useBox(() => ({ ...props, mass,
    args: exteriorWall_FS_12_args,
    rotation: exteriorWall_FS_12_rotation,
    position: exteriorWall_FS_12_position,
  }));
  const exteriorWall_FS_0R_args = [14, 0.4, 2];
  const exteriorWall_FS_0R_position = [-11, -2, -10.5];
  const exteriorWall_FS_0R_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [exteriorWall_FS_0R_ref] = useBox(() => ({ ...props, mass,
    args: exteriorWall_FS_0R_args,
    rotation: exteriorWall_FS_0R_rotation,
    position: exteriorWall_FS_0R_position,
  }));
  const exteriorWall_FS_0L_args = [16, 0.4, 2];
  const exteriorWall_FS_0L_position = [10, -2, -10.5];
  const exteriorWall_FS_0L_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [exteriorWall_FS_0L_ref] = useBox(() => ({ ...props, mass,
    args: exteriorWall_FS_0L_args,
    rotation: exteriorWall_FS_0L_rotation,
    position: exteriorWall_FS_0L_position,
  }));

  /* interiorWalls */
  const interiorWall_inkom_FS_R_args = [0.4, 6, 8];
  const interiorWall_inkom_FS_R_position = [-4.3, 1, -7.2];
  const interiorWall_inkom_FS_R_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [interiorWall_inkom_FS_R_ref] = useBox(() => ({ ...props, mass,
    args: interiorWall_inkom_FS_R_args,
    rotation: interiorWall_inkom_FS_R_rotation,
    position: interiorWall_inkom_FS_R_position,
  }));
  const interiorWall_inkom_FS_L_args = [0.4, 6, 8];
  const interiorWall_inkom_FS_L_position = [2.1, 1, -7.2];
  const interiorWall_inkom_FS_L_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [interiorWall_inkom_FS_L_ref] = useBox(() => ({ ...props, mass,
    args: interiorWall_inkom_FS_L_args,
    rotation: interiorWall_inkom_FS_L_rotation,
    position: interiorWall_inkom_FS_L_position,
  }));
  const interiorWall_inkom_BS_R_args = [0.4, 6, 8];
  const interiorWall_inkom_BS_R_position = [-4.3, 1, 1.4];
  const interiorWall_inkom_BS_R_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [interiorWall_inkom_BS_R_ref] = useBox(() => ({ ...props, mass,
    args: interiorWall_inkom_BS_R_args,
    rotation: interiorWall_inkom_BS_R_rotation,
    position: interiorWall_inkom_BS_R_position,
  }));
  const interiorWall_inkom_BS_L_args = [0.4, 6, 8];
  const interiorWall_inkom_BS_L_position = [2.1, 1, 1.4];
  const interiorWall_inkom_BS_L_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [interiorWall_inkom_BS_L_ref] = useBox(() => ({ ...props, mass,
    args: interiorWall_inkom_BS_L_args,
    rotation: interiorWall_inkom_BS_L_rotation,
    position: interiorWall_inkom_BS_L_position,
  }));
  const interiorWall_inkom_FS_R_0_args = [1.5, 0.4, 3];
  const interiorWall_inkom_FS_R_0_position = [-3.5, -1.8, -7.6];
  const interiorWall_inkom_FS_R_0_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [interiorWall_inkom_FS_R_0_ref] = useBox(() => ({ ...props, mass,
    args: interiorWall_inkom_FS_R_0_args,
    rotation: interiorWall_inkom_FS_R_0_rotation,
    position: interiorWall_inkom_FS_R_0_position,
  }));
  const interiorWall_inkom_FS_L_0_args = [1.5, 0.4, 3];
  const interiorWall_inkom_FS_L_0_position = [1.3, -1.8, -7.6];
  const interiorWall_inkom_FS_L_0_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [interiorWall_inkom_FS_L_0_ref] = useBox(() => ({ ...props, mass,
    args: interiorWall_inkom_FS_L_0_args,
    rotation: interiorWall_inkom_FS_L_0_rotation,
    position: interiorWall_inkom_FS_L_0_position,
  }));


  return (
    <group> 
      {/* free spacings */}
      <Box args={elivatorShaft_args} ref={elivatorShaft_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={dinningroomBar_args} ref={dinningroomBar_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={dinningroomSmallWall_args} ref={dinningroomSmallWall_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>

	  {/* exteriorWalls */}
      <Box args={exteriorWall_RS_args} ref={exteriorWall_RS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={exteriorWall_LS_args} ref={exteriorWall_LS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={exteriorWall_BS_args} ref={exteriorWall_BS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={exteriorWall_FS_12_args} ref={exteriorWall_FS_12_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={exteriorWall_FS_0R_args} ref={exteriorWall_FS_0R_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={exteriorWall_FS_0L_args} ref={exteriorWall_FS_0L_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>

	  {/* interiorWalls */}
      <Box args={interiorWall_inkom_FS_R_args} ref={interiorWall_inkom_FS_R_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={interiorWall_inkom_FS_L_args} ref={interiorWall_inkom_FS_L_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={interiorWall_inkom_BS_R_args} ref={interiorWall_inkom_BS_R_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={interiorWall_inkom_BS_L_args} ref={interiorWall_inkom_BS_L_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={interiorWall_inkom_FS_R_0_args} ref={interiorWall_inkom_FS_R_0_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={interiorWall_inkom_FS_L_0_args} ref={interiorWall_inkom_FS_L_0_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
    </group>
  );
}; 

