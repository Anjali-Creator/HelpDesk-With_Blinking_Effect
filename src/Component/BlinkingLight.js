import React from "react";
import styled, { keyframes } from "styled-components";

const BlinkingCircle = ({ className, radius = 5 }) => {
  const size = radius * 2;

  return (
    <svg className={className} height={size} width={size}>
      {" "}
      */we can draw a full circle with fixed width ad height*/
      <g>
        <circle className="bulb" cx={radius} cy={radius} r={radius} />
      </g>
    </svg>
  );
};

const animation = ({ colorOn = "yellow", colorOff = "grey" }) => keyframes`
  0%,50% {
    fill: ${colorOn};
  }
  51%,100% {
    fill: ${colorOff};
  }
`;

const BlinkingLight = styled(BlinkingCircle)`
  float: left;
  vertical-align: middle;
  margin: 10px;
  circle.bulb {
    animation: ${props => animation(props)}
      ${props => (props.time ? `${props.time}s` : "1s")} infinite;
  }
`;

export default BlinkingLight;
