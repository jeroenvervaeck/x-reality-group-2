import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "react-three-fiber";
import { useSphere } from "@react-three/cannon";
import { PointerLockControls, Sphere } from "@react-three/drei";
import { KeyboardControls } from "App/lib";

const BOX_SIZE = 0.5; // m
const VELOCITY = {
  FORWARD_DIRECTION: 10,
  RIGHT_DIRECTION: 5,
};

export default (props) => {
  console.log("Physics");
  const pointerRef = useRef();
  const args = BOX_SIZE; // radius in m
  const mass = 75; // kg
  // const position = [-1, -2, -3];
  const position = [-6, 1.3, -5];
  const [playerRef, playerApi] = useSphere(() => ({
    ...props,
    args,
    mass,
    position,
  }));

  useEffect(() => {
    console.info("useEffect: KeyboardControls");
    KeyboardControls.addEventListeners();
    // KeyboardControls.setKeyboardAzerty();

    return KeyboardControls.removeEventListeners;
  }, []);

  // Store Player velocity
  const velocity = useRef([0, 0, 0]);
  useEffect(() => {
    playerApi.velocity.subscribe((v) => (velocity.current = v));
  }, []);

  useFrame(() => {
    const camera = pointerRef.current.getObject();
    const player = playerRef.current;

    // Match Player direction to Camera direction.
    player.quaternion.copy(camera.quaternion);

    // Move Player
    const velocityVector = new THREE.Vector3(
      KeyboardControls.rightDirection * VELOCITY.RIGHT_DIRECTION,
      0,
      KeyboardControls.forwardDirection * -VELOCITY.FORWARD_DIRECTION
    );
    velocityVector.applyQuaternion(player.quaternion);
    velocityVector.y = velocity.current[1]; // Use stored velocity in Y direction (gravity).
    playerApi.velocity.copy(velocityVector);

    // Match Camera position to Player position.
    camera.position.copy(player.position);
    camera.position.y += 1.25; // 1,75 m
  });

  return (
    <>
      <PointerLockControls ref={pointerRef} />
      <Sphere args={[BOX_SIZE, 8, 8]} ref={playerRef}>
        <meshBasicMaterial color={0x00ff00} wireframe={true} />
      </Sphere>
    </>
  );
};
