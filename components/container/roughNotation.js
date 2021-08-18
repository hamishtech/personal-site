import { useState } from "react";
import { RoughNotation } from "react-rough-notation";

const AnimatedRN = ({ children }) => {
  let [hover, setHover] = useState(false);
  return (
    <div
      className='hover:text-blue-500'
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      {" "}
      <RoughNotation type='underline' show={true} color='#3b81f6' show={hover}>
        {children}
      </RoughNotation>
    </div>
  );
};

export default AnimatedRN;
