import * as THREE from "three";
import { usePlane } from "@react-three/cannon";
import { Plane } from "@react-three/drei";

const PLANE_SIZE = 10;

export default (props) => {
  const args = [PLANE_SIZE, PLANE_SIZE];
  const mass = 0; // kg
  const rotation = [THREE.MathUtils.degToRad(-90), 0, 0];
  const [ref] = usePlane(() => ({
    ...props,
    mass,
    rotation,
  }));

  return (
    <Plane args={args} ref={ref}>
      <meshBasicMaterial color={0x666666} side={THREE.DoubleSide} />
    </Plane>
  );
};
