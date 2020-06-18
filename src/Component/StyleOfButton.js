import React from "react";
import "../Css/index.css";
import BlinkingLight from "./BlinkingLight";

const ButtonStyle = props => {
  let indicatorOn,
    indicatorOff = "white";

  if (props.state === "ringing") {
    indicatorOn = "green";
  } else if (props.state === "idle") {
    indicatorOn = "green";
    indicatorOff = "green";
  } else {
    indicatorOn = "red";
    indicatorOff = "red";
  }
  return (
    <>
      <button className="btn btn-light">
        <BlinkingLight colorOn={indicatorOn} colorOff={indicatorOff} />
        {props.indicatorOn}
        {props.indicatorOff}
        {props.name}
      </button>
    </>
  );
};

export default ButtonStyle;
