import React, { useRef } from "react";

export default () => {
  const light = useRef();

  return (
    <>
      { true && <ambientLight intensity={0.9} /> }
      { true && <directionalLight intensity={0.5} position={[10, 10, 5]} ref={light} /> }
      { false && <spotLight position={[30, 30, 30]} angle={0.15} penumbra={1} castShadow={true} />}
    </>
  );
};
