import * as THREE from "three";
import { useBox } from "@react-three/cannon";
import { Box } from "@react-three/drei";

export default (props) => {
  const color = '0x999999'
  const opacity = 0.10;
  const angleSlope = 20;
  const angle = THREE.MathUtils.degToRad(-90 + angleSlope);
  const mass = 0; // kg

  // Gelijkvloers
  const stair_01_args = [2, 3, 0.2];
  const stair_01_rotation = [-angle, 0, 0];
  const stair_01_position = [-3, -2.3, 2]
  const [stair_01_ref] = useBox(() => ({ ...props, mass,
    args: stair_01_args,
    rotation: stair_01_rotation,
    position: stair_01_position,
  }));

  const plain_01_args = [2, 2, 0.3];
  const plain_01_position = [-3, -1.8, 4.5];
  const plain_01_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [plain_01_ref] = useBox(() => ({ ...props, mass,
    args: plain_01_args,
    rotation: plain_01_rotation,
    position: plain_01_position,
  }));

  const stair_02_args = [0.2, 3, 2];
  const stair_02_rotation = [0, 0, angle];
  const stair_02_position = [-1, -1.4, 4.5];
  const [stair_02_ref] = useBox(() => ({ ...props, mass,
    args: stair_02_args,
    rotation: stair_02_rotation,
    position: stair_02_position,
  }));

  const plain_02_args = [2, 2, 0.3];
  const plain_02_position = [1, -1.1, 4.5];
  const plain_02_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [plain_02_ref] = useBox(() => ({ ...props, mass,
    args: plain_02_args,
    rotation: plain_02_rotation,
    position: plain_02_position,
  }));

  const stair_03_args = [2, 3, 0.2];
  const stair_03_rotation = [angle, 0, 0];
  const stair_03_position = [1, -0.5, 2];
  const [stair_03_ref] = useBox(() => ({ ...props, mass,
    args: stair_03_args,
    rotation: stair_03_rotation,
    position: stair_03_position,
  }));

  // 1e verdiep
  const plain_10_args = [38, 11, 0.4];
  const plain_10_position = [-0.5, 0, -4.8];
  const plain_10_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [plain_10_ref] = useBox(() => ({ ...props, mass,
    args: plain_10_args,
    rotation: plain_10_rotation,
    position: plain_10_position,
  }));

  const plain_10R_args = [15, 5, 0.4];
  const plain_10R_position = [-12, 0, 3.4];
  const plain_10R_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [plain_10R_ref] = useBox(() => ({ ...props, mass,
    args: plain_10R_args,
    rotation: plain_10R_rotation,
    position: plain_10R_position,
  }));

  const plain_10L_args = [16, 5, 0.4];
  const plain_10L_position = [10.5, 0, 3.4];
  const plain_10L_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [plain_10L_ref] = useBox(() => ({ ...props, mass,
    args: plain_10L_args,
    rotation: plain_10L_rotation,
    position: plain_10L_position,
  }));

  const stair_11_args = [2, 3, 0.2];
  const stair_11_rotation = [-angle, 0, 0];
  const stair_11_position = [-3, 0.2, 2]
  const [stair_11_ref] = useBox(() => ({ ...props, mass,
    args: stair_11_args,
    rotation: stair_11_rotation,
    position: stair_11_position,
  }));

  const plain_11_args = [2, 2, 0.3];
  const plain_11_position = [-3, 0.6, 4.5];
  const plain_11_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [plain_11_ref] = useBox(() => ({ ...props, mass,
    args: plain_11_args,
    rotation: plain_11_rotation,
    position: plain_11_position,
  }));

  const stair_12_args = [0.2, 3, 2];
  const stair_12_rotation = [0, 0, angle];
  const stair_12_position = [-1, 1.1, 4.5];
  const [stair_12_ref] = useBox(() => ({ ...props, mass,
    args: stair_12_args,
    rotation: stair_12_rotation,
    position: stair_12_position,
  }));

  const plain_12_args = [2, 2, 0.3];
  const plain_12_position = [1, 1.4, 4.5];
  const plain_12_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [plain_12_ref] = useBox(() => ({ ...props, mass,
    args: plain_12_args,
    rotation: plain_12_rotation,
    position: plain_12_position,
  }));

  const stair_13_args = [2, 3, 0.2];
  const stair_13_rotation = [angle, 0, 0];
  const stair_13_position = [1, 2, 2];
  const [stair_13_ref] = useBox(() => ({ ...props, mass,
    args: stair_13_args,
    rotation: stair_13_rotation,
    position: stair_13_position,
  }));

  // Tweede verdiep
  const plain_20_args = [38, 11, 0.4];
  const plain_20_position = [-0.5, 2.6, -4.8];
  const plain_20_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [plain_20_ref] = useBox(() => ({ ...props, mass,
    args: plain_20_args,
    rotation: plain_20_rotation,
    position: plain_20_position,
  }));

  const plain_20R_args = [15, 5, 0.4];
  const plain_20R_position = [-12, 2.6, 3.4];
  const plain_20R_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [plain_20R_ref] = useBox(() => ({ ...props, mass,
    args: plain_20R_args,
    rotation: plain_20R_rotation,
    position: plain_20R_position,
  }));

  const plain_20L_args = [16, 5, 0.4];
  const plain_20L_position = [10.5, 2.6, 3.4];
  const plain_20L_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [plain_20L_ref] = useBox(() => ({ ...props, mass,
    args: plain_20L_args,
    rotation: plain_20L_rotation,
    position: plain_20L_position,
  }));

  return (
    <group>
      {/* Gelijksvloer */}
      <Box args={stair_01_args} ref={stair_01_ref}>
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={plain_01_args} ref={plain_01_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={stair_02_args} ref={stair_02_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={plain_02_args} ref={plain_02_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={stair_03_args} ref={stair_03_ref}>
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>

      {/* Eerste verdiep */}
      <Box args={plain_10_args} ref={plain_10_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={plain_10R_args} ref={plain_10R_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={plain_10L_args} ref={plain_10L_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={stair_11_args} ref={stair_11_ref}>
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={plain_11_args} ref={plain_11_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={stair_12_args} ref={stair_12_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={plain_12_args} ref={plain_12_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={stair_13_args} ref={stair_13_ref}>
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>

      {/* Tweede verdiep */}
      <Box args={plain_20_args} ref={plain_20_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={plain_20R_args} ref={plain_20R_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={plain_20L_args} ref={plain_20L_ref} >
        <meshBasicMaterial color={color} opacity={opacity} transparent={true} side={THREE.DoubleSide} />
      </Box>
    </group>
  );
}; 

