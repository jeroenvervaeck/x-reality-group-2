import React from "react";
import { Physics } from "@react-three/cannon";

import Player from "./Player";
import Floor from "./Floor";
import Stairs from "./Stairs";

import Campus from "./Campus";
import Lighting from "./Lighting";


import Assets from "./Assets";

const GRAVITATIONAL_ACCELERATION = 9.80665; // m/s^2

export default () => {
  const gravity = [0, -GRAVITATIONAL_ACCELERATION, 0];
  return (
    <>
      <Physics gravity={gravity}>

        <Player />
        { true && <Stairs />}
        { true && <Floor />}

        { true && <Campus />}
        <Lighting />

        { false && <Assets />}

      </Physics>
    </>
  );
};
