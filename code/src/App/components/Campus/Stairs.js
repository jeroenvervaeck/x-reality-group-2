import * as THREE from "three";
import { useBox } from "@react-three/cannon";
import { Box, Plane } from "@react-three/drei";

export default (props) => {
  const color = '0x999999'
  const angleSlope = 20;
  const angle = THREE.MathUtils.degToRad(-90 + angleSlope);
  const mass = 0; // kg

  const stair_01_args = [2, 3, 0.2];
  const stair_01_rotation = [-angle, 0, 0];
  const stair_01_position = [-3, -2.3, 2]
  const [stair_01_ref] = useBox(() => ({ ...props, mass,
    args: stair_01_args,
    rotation: stair_01_rotation,
    position: stair_01_position,
  }));

  const plain_01_args = [2, 2, 0.3];
  const plain_01_position = [-3, -1.9, 4.5];
  const plain_01_rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [plain_01_ref] = useBox(() => ({ ...props, mass,
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

  return (
    <group>
      <Box args={stair_01_args} ref={stair_01_ref}>
        <meshBasicMaterial color={color} opacity={0.25} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={plain_01_args} ref={plain_01_ref} >
        <meshBasicMaterial color={color} opacity={0.25} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={stair_02_args} ref={stair_02_ref} >
        <meshBasicMaterial color={color} opacity={0.25} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={plain_02_args} ref={plain_02_ref} >
        <meshBasicMaterial color={color} opacity={0.25} transparent={true} side={THREE.DoubleSide} />
      </Box>
      <Box args={stair_03_args} ref={stair_03_ref}>
        <meshBasicMaterial color={color} opacity={0.25} transparent={true} side={THREE.DoubleSide} />
      </Box>
    </group>
  );
}; 

