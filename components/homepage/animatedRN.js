import { useState } from "react";
import { RoughNotation } from "react-rough-notation";

const AnimatedBoxRN = ({ children }) => {
  let [hover, setHover] = useState(false);
  return (
    <div
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      {" "}
      <RoughNotation
        type='box'
        color={hover ? "#3b81f6" : "#9ba3af"}
        show={true}
      >
        {children}
      </RoughNotation>
    </div>
  );
};

export default AnimatedBoxRN;
