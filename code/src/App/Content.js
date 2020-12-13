import React from "react";
import { FlyControls, OrbitControls, Stats } from "@react-three/drei";
import { useControl } from "react-three-gui";
import { World, WorldUseCannon } from "App/components";

export default () => {
  return <>{true && <World />}</>;
};
