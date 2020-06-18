import React from "react";
import ButtonStyle from "./StyleOfButton";

const ApiData = () => {
  //aasuming that this data is coming from REST APi
  const incomingData = [
    {
      id: "police",
      name: "Police",
      state: "idle"
    },
    {
      id: "fire",
      name: "Fire",
      state: "active"
    },
    {
      id: "hospital",
      name: "Hospital",
      state: "ringing"
    }
  ];
  return (
    <>
      <div className="card">
        <div className="card-header">Help-Line Desk</div>
        <ul className="list-group list-group-flush">
          {incomingData.map((data, index) => {
            return (
              <>
                <ButtonStyle
                  key={index}
                  id={data.id}
                  name={data.name}
                  state={data.state}
                />

                <br />
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default ApiData;
