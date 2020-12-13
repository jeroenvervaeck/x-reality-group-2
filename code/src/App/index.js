import React from "react";
import { Canvas } from "react-three-fiber";
import Content from "App/Content";

import "./styles.css";

export default () => {
  return (
    <Canvas invalidateFrameloop={false} shadowMap>
      <Content />
    </Canvas>
  );
};
