import React from "react";
import { Physics } from "@react-three/cannon";

import Player from "./Player";
import Base from "./Base";
import Collision_floor from "./Collision_floor";
import Collision_wall from "./Collision_wall";
import Collision_assets from "./Collision_assets";

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
   
        { true && <Collision_floor />}
        { false && <Collision_wall />}
        { true && <Collision_assets />}

        { true && <Campus />}
        { true && <Lighting />}
        { true && <Base />}

        { true && <Assets />}

      </Physics>
    </>
  );
};
