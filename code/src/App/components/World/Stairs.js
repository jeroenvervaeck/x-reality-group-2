import * as THREE from "three";
import { useBox } from "@react-three/cannon";
import { Box } from "@react-three/drei";

export default (props) => {
  const angleSlope = 35;
  const angle = THREE.MathUtils.degToRad(-90 + angleSlope);
  const args = [1, 10, 0.2];
  const mass = 0; // kg
  const rotation = [angle, 0, 0];
  const [ref] = useBox(() => ({
    ...props,
    args,
    mass,
    rotation,
  }));

  return (
    <Box args={args} ref={ref}>
      <meshBasicMaterial color={0x999999} opacity={0.25} transparent={true} />
    </Box>
  );
};
