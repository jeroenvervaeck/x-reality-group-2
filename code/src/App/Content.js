import React from "react";
import { FlyControls, OrbitControls, Stats } from "@react-three/drei";
import { useControl } from "react-three-gui";
import { Campus, WorldUseCannon } from "App/components";

export default () => {
  return <>{true && <Campus />}</>;
};
