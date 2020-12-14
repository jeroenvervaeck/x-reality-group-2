import React, { useRef } from "react";

export default () => {
  const light = useRef();

  return (
    <>
      { true && <ambientLight intensity={0.9} /> }
      { true && <directionalLight intensity={0.5} position={[10, 10, 5]} ref={light} /> }
      { false && <pointLight intensity={1.12} position={[0, 0, 0]} /> }
    </>
  );
};
