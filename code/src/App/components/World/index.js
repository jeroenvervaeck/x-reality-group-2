import React from "react";
import { Physics } from "@react-three/cannon";
import Boxes from "./Boxes";
import Floor from "./Floor";
import Player from "./Player";
import Stairs from "./Stairs";

const GRAVITATIONAL_ACCELERATION = 9.80665; // m/s^2

export default () => {
  const gravity = [0, -GRAVITATIONAL_ACCELERATION, 0];
  return (
    <>
      <Physics gravity={gravity}>
        <Boxes />
        <Floor />
        <Player />
        <Stairs />
      </Physics>
    </>
  );
};
