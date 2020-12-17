import * as THREE from "three";
import { useBox } from "@react-three/cannon";
import { Box } from "@react-three/drei";

export default (props) => {
  const color = '0x999999'
  const opacity = 0.50;
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
  const dinningroomColumn_1_args = [0.4, 0.4, 4];
  const dinningroomColumn_1_position = [-11.2, -2, -8.8];
  const dinningroomColumn_1_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [dinningroomColumn_1_ref] = useBox(() => ({ ...props, mass,
    args: dinningroomColumn_1_args,
    rotation: dinningroomColumn_1_rotation,
    position: dinningroomColumn_1_position,
  }));
  const dinningroomColumn_2_args = [0.4, 0.4, 4];
  const dinningroomColumn_2_position = [-11.2, -2, -4.2];
  const dinningroomColumn_2_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [dinningroomColumn_2_ref] = useBox(() => ({ ...props, mass,
    args: dinningroomColumn_2_args,
    rotation: dinningroomColumn_2_rotation,
    position: dinningroomColumn_2_position,
  }));
  const dinningroomColumn_3_args = [0.4, 0.4, 4];
  const dinningroomColumn_3_position = [-15.7, -2, -8.8];
  const dinningroomColumn_3_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [dinningroomColumn_3_ref] = useBox(() => ({ ...props, mass,
    args: dinningroomColumn_3_args,
    rotation: dinningroomColumn_3_rotation,
    position: dinningroomColumn_3_position,
  }));
  const dinningroomColumn_4_args = [0.4, 0.4, 4];
  const dinningroomColumn_4_position = [-15.7, -2, -4.2];
  const dinningroomColumn_4_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [dinningroomColumn_4_ref] = useBox(() => ({ ...props, mass,
    args: dinningroomColumn_4_args,
    rotation: dinningroomColumn_4_rotation,
    position: dinningroomColumn_4_position,
  }));
  const dinningroomColumn_5_args = [0.4, 0.4, 4];
  const dinningroomColumn_5_position = [-7, -2, -8.8];
  const dinningroomColumn_5_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [dinningroomColumn_5_ref] = useBox(() => ({ ...props, mass,
    args: dinningroomColumn_5_args,
    rotation: dinningroomColumn_5_rotation,
    position: dinningroomColumn_5_position,
  }));
  const dinningroomColumn_6_args = [0.4, 0.4, 4];
  const dinningroomColumn_6_position = [-7, -2, -4.2];
  const dinningroomColumn_6_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [dinningroomColumn_6_ref] = useBox(() => ({ ...props, mass,
    args: dinningroomColumn_6_args,
    rotation: dinningroomColumn_6_rotation,
    position: dinningroomColumn_6_position,
  }));
  const libraryBar_BS_args = [3, 0.6, 2];
  const libraryBar_BS_position = [5.5, -1.5, 2.3];
  const libraryBar_BS_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [libraryBar_BS_ref] = useBox(() => ({ ...props, mass,
    args: libraryBar_BS_args,
    rotation: libraryBar_BS_rotation,
    position: libraryBar_BS_position,
  }));
  const libraryBar_FS_args = [3, 0.6, 2];
  const libraryBar_FS_position = [5.5, -1.5, -0.3];
  const libraryBar_FS_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [libraryBar_FS_ref] = useBox(() => ({ ...props, mass,
    args: libraryBar_FS_args,
    rotation: libraryBar_FS_rotation,
    position: libraryBar_FS_position,
  }));
  const libraryBar_MS_args = [0.6, 2, 2];
  const libraryBar_MS_position = [7, -1.5, 1];
  const libraryBar_MS_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [libraryBar_MS_ref] = useBox(() => ({ ...props, mass,
    args: libraryBar_MS_args,
    rotation: libraryBar_MS_rotation,
    position: libraryBar_MS_position,
  }));
  const libraryDesk_middel_BS_args = [3, 1.5, 1];
  const libraryDesk_middel_BS_position = [10, -2, 2.5];
  const libraryDesk_middel_BS_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [libraryDesk_middel_BS_ref] = useBox(() => ({ ...props, mass,
    args: libraryDesk_middel_BS_args,
    rotation: libraryDesk_middel_BS_rotation,
    position: libraryDesk_middel_BS_position,
  }));
  const libraryDesk_middel_FS_args = [3, 1.5, 1];
  const libraryDesk_middel_FS_position = [10, -2, -0.3];
  const libraryDesk_middel_FS_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [libraryDesk_middel_FS_ref] = useBox(() => ({ ...props, mass,
    args: libraryDesk_middel_FS_args,
    rotation: libraryDesk_middel_FS_rotation,
    position: libraryDesk_middel_FS_position,
  }));

  const libraryRoom_LS_args = [0.5, 3, 2];
  const libraryRoom_LS_position = [8.5, -1.5, -6.5];
  const libraryRoom_LS_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [libraryRoom_LS_ref] = useBox(() => ({ ...props, mass,
    args: libraryRoom_LS_args,
    rotation: libraryRoom_LS_rotation,
    position: libraryRoom_LS_position,
  }));
  const libraryRoom_RS_args = [0.5, 3, 2];
  const libraryRoom_RS_position = [11.9, -1.5, -6.5];
  const libraryRoom_RS_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [libraryRoom_RS_ref] = useBox(() => ({ ...props, mass,
    args: libraryRoom_RS_args,
    rotation: libraryRoom_RS_rotation,
    position: libraryRoom_RS_position,
  }));
  const libraryRoom_MS_args = [3, 0.4, 2];
  const libraryRoom_MS_position = [10, -1.5, -8.2];
  const libraryRoom_MS_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [libraryRoom_MS_ref] = useBox(() => ({ ...props, mass,
    args: libraryRoom_MS_args,
    rotation: libraryRoom_MS_rotation,
    position: libraryRoom_MS_position,
  }));
  const libraryDesk_LS_args = [0.7, 5, 0.6];
  const libraryDesk_LS_position = [2.8, -2.7, -7.3];
  const libraryDesk_LS_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [libraryDesk_LS_ref] = useBox(() => ({ ...props, mass,
    args: libraryDesk_LS_args,
    rotation: libraryDesk_LS_rotation,
    position: libraryDesk_LS_position,
  }));
  const libraryDesk_RS_args = [0.7, 6, 0.6];
  const libraryDesk_RS_position = [17.8, -2.7, -6.3];
  const libraryDesk_RS_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [libraryDesk_RS_ref] = useBox(() => ({ ...props, mass,
    args: libraryDesk_RS_args,
    rotation: libraryDesk_RS_rotation,
    position: libraryDesk_RS_position,
  }));
  const libraryDesk_MS_args = [16, 0.7, 0.6];
  const libraryDesk_MS_position = [9.5, -2.7, -9.8];
  const libraryDesk_MS_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [libraryDesk_MS_ref] = useBox(() => ({ ...props, mass,
    args: libraryDesk_MS_args,
    rotation: libraryDesk_MS_rotation,
    position: libraryDesk_MS_position,
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
  const exteriorWall_FS_box_12_args = [6, 3, 5];
  const exteriorWall_FS_box_12_position = [-1, 2, -8.9];
  const exteriorWall_FS_box_12_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [exteriorWall_FS_box_12_ref] = useBox(() => ({ ...props, mass,
    args: exteriorWall_FS_box_12_args,
    rotation: exteriorWall_FS_box_12_rotation,
    position: exteriorWall_FS_box_12_position,
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
  const interiorWall_inkom_FS_L_position = [2, 1, -7.1];
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
  const interiorWall_inkom_BS_L_args = [0.4, 6.4, 8];
  const interiorWall_inkom_BS_L_position = [2.1, 1, 1.6];
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
  const interiorWall_toilet_BS_1_args = [1.5, 0.2, 6];
  const interiorWall_toilet_BS_1_position = [-5, 2, -4.2];
  const interiorWall_toilet_BS_1_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [interiorWall_toilet_BS_1_ref] = useBox(() => ({ ...props, mass,
    args: interiorWall_toilet_BS_1_args,
    rotation: interiorWall_toilet_BS_1_rotation,
    position: interiorWall_toilet_BS_1_position,
  }));
  const interiorWall_toilet_BS_2_args = [1.5, 0.2, 6];
  const interiorWall_toilet_BS_2_position = [-8.2, 2, -4.2];
  const interiorWall_toilet_BS_2_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [interiorWall_toilet_BS_2_ref] = useBox(() => ({ ...props, mass,
    args: interiorWall_toilet_BS_2_args,
    rotation: interiorWall_toilet_BS_2_rotation,
    position: interiorWall_toilet_BS_2_position,
  }));
  const interiorWall_toilet_RS_args = [7, 0.2, 6];
  const interiorWall_toilet_RS_position = [-9.5, 2, -7.2];
  const interiorWall_toilet_RS_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
  const [interiorWall_toilet_RS_ref] = useBox(() => ({ ...props, mass,
    args: interiorWall_toilet_RS_args,
    rotation: interiorWall_toilet_RS_rotation,
    position: interiorWall_toilet_RS_position,
  }));
  const interiorWall_smallwall_RS_args = [0.8, 0.2, 6];
  const interiorWall_smallwall_RS_position = [-9.5, 2, -1.9];
  const interiorWall_smallwall_RS_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
  const [interiorWall_smallwall_RS_ref] = useBox(() => ({ ...props, mass,
    args: interiorWall_smallwall_RS_args,
    rotation: interiorWall_smallwall_RS_rotation,
    position: interiorWall_smallwall_RS_position,
  }));
  const interiorWall_BS_2_args = [13, 0.2, 3];
  const interiorWall_BS_2_position = [-10.5, 4, -1.5];
  const interiorWall_BS_2_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [interiorWall_BS_2_ref] = useBox(() => ({ ...props, mass,
    args: interiorWall_BS_2_args,
    rotation: interiorWall_BS_2_rotation,
    position: interiorWall_BS_2_position,
  }));
  const interiorWall_BS_1_args = [5, 0.2, 3];
  const interiorWall_BS_1_position = [-6.8, 1, -1.5];
  const interiorWall_BS_1_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [interiorWall_BS_1_ref] = useBox(() => ({ ...props, mass,
    args: interiorWall_BS_1_args,
    rotation: interiorWall_BS_1_rotation,
    position: interiorWall_BS_1_position,
  }));
  const interiorWall_FS_lokaal_1_args = [1, 0.2, 6];
  const interiorWall_FS_lokaal_1_position = [2.9, 2, -4.5];
  const interiorWall_FS_lokaal_1_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [interiorWall_FS_lokaal_1_ref] = useBox(() => ({ ...props, mass,
    args: interiorWall_FS_lokaal_1_args,
    rotation: interiorWall_FS_lokaal_1_rotation,
    position: interiorWall_FS_lokaal_1_position,
  }));
  const interiorWall_FS_lokaal_2_args = [11.4, 0.2, 6];
  const interiorWall_FS_lokaal_2_position = [10.4, 2, -4.5];
  const interiorWall_FS_lokaal_2_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [interiorWall_FS_lokaal_2_ref] = useBox(() => ({ ...props, mass,
    args: interiorWall_FS_lokaal_2_args,
    rotation: interiorWall_FS_lokaal_2_rotation,
    position: interiorWall_FS_lokaal_2_position,
  }));
  const interiorWall_BS_lokaal_1_args = [1, 0.2, 6];
  const interiorWall_BS_lokaal_1_position = [2.9, 2, -1.4];
  const interiorWall_BS_lokaal_1_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [interiorWall_BS_lokaal_1_ref] = useBox(() => ({ ...props, mass,
    args: interiorWall_BS_lokaal_1_args,
    rotation: interiorWall_BS_lokaal_1_rotation,
    position: interiorWall_BS_lokaal_1_position,
  }));
  const interiorWall_BS_lokaal_2_args = [4, 0.2, 6];
  const interiorWall_BS_lokaal_2_position = [6.6, 2, -1.4];
  const interiorWall_BS_lokaal_2_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [interiorWall_BS_lokaal_2_ref] = useBox(() => ({ ...props, mass,
    args: interiorWall_BS_lokaal_2_args,
    rotation: interiorWall_BS_lokaal_2_rotation,
    position: interiorWall_BS_lokaal_2_position,
  }));
  const interiorWall_BS_lokaal_3_args = [1.5, 0.2, 6];
  const interiorWall_BS_lokaal_3_position = [10.7, 2, -1.4];
  const interiorWall_BS_lokaal_3_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [interiorWall_BS_lokaal_3_ref] = useBox(() => ({ ...props, mass,
    args: interiorWall_BS_lokaal_3_args,
    rotation: interiorWall_BS_lokaal_3_rotation,
    position: interiorWall_BS_lokaal_3_position,
  }));
  const interiorWall_BS_lokaal_4_args = [3.6, 0.2, 6];
  const interiorWall_BS_lokaal_4_position = [14.5, 2, -1.4];
  const interiorWall_BS_lokaal_4_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [interiorWall_BS_lokaal_4_ref] = useBox(() => ({ ...props, mass,
    args: interiorWall_BS_lokaal_4_args,
    rotation: interiorWall_BS_lokaal_4_rotation,
    position: interiorWall_BS_lokaal_4_position,
  }));
  const interiorWall_BS_lokaal_5_args = [6, 0.2, 6];
  const interiorWall_BS_lokaal_5_position = [10.7, 2, 2.5];
  const interiorWall_BS_lokaal_5_rotation = [THREE.MathUtils.degToRad(-90), 0, THREE.MathUtils.degToRad(-90)];
  const [interiorWall_BS_lokaal_5_ref] = useBox(() => ({ ...props, mass,
    args: interiorWall_BS_lokaal_5_args,
    rotation: interiorWall_BS_lokaal_5_rotation,
    position: interiorWall_BS_lokaal_5_position,
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
      <Box args={dinningroomColumn_1_args} ref={dinningroomColumn_1_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={dinningroomColumn_2_args} ref={dinningroomColumn_2_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={dinningroomColumn_3_args} ref={dinningroomColumn_3_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={dinningroomColumn_4_args} ref={dinningroomColumn_4_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={dinningroomColumn_5_args} ref={dinningroomColumn_5_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={dinningroomColumn_6_args} ref={dinningroomColumn_6_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={libraryBar_BS_args} ref={libraryBar_BS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={libraryBar_FS_args} ref={libraryBar_FS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={libraryBar_MS_args} ref={libraryBar_MS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={libraryRoom_LS_args} ref={libraryRoom_LS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={libraryRoom_RS_args} ref={libraryRoom_RS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={libraryRoom_MS_args} ref={libraryRoom_MS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={libraryDesk_middel_BS_args} ref={libraryDesk_middel_BS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={libraryDesk_middel_FS_args} ref={libraryDesk_middel_FS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={libraryDesk_LS_args} ref={libraryDesk_LS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={libraryDesk_RS_args} ref={libraryDesk_RS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={libraryDesk_MS_args} ref={libraryDesk_MS_ref} >
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
      <Box args={exteriorWall_FS_box_12_args} ref={exteriorWall_FS_box_12_ref} >
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
      <Box args={interiorWall_toilet_BS_1_args} ref={interiorWall_toilet_BS_1_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={interiorWall_toilet_BS_2_args} ref={interiorWall_toilet_BS_2_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={interiorWall_toilet_RS_args} ref={interiorWall_toilet_RS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={interiorWall_smallwall_RS_args} ref={interiorWall_smallwall_RS_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={interiorWall_BS_2_args} ref={interiorWall_BS_2_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={interiorWall_BS_1_args} ref={interiorWall_BS_1_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={interiorWall_FS_lokaal_1_args} ref={interiorWall_FS_lokaal_1_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={interiorWall_FS_lokaal_2_args} ref={interiorWall_FS_lokaal_2_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={interiorWall_BS_lokaal_1_args} ref={interiorWall_BS_lokaal_1_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={interiorWall_BS_lokaal_2_args} ref={interiorWall_BS_lokaal_2_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={interiorWall_BS_lokaal_3_args} ref={interiorWall_BS_lokaal_3_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={interiorWall_BS_lokaal_4_args} ref={interiorWall_BS_lokaal_4_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={interiorWall_BS_lokaal_5_args} ref={interiorWall_BS_lokaal_5_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
    </group>
  );
}; 

