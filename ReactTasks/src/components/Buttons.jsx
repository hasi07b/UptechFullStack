import React, { useContext } from "react";
import { userContext } from "../App";
// import "../style/Buttons.css";
const Buttons = ({ add, deleteV }) => {
  const data = useContext(userContext);
  console.log(data.user);
  return (
    <>
      <h1 onClick={data.chang}>welcome {data.user}</h1>
      <button onClick={add}>Add </button>
      <button onClick={deleteV}>Delete </button>
      <button
        onClick={data.colorChange}
        style={{
          backgroundColor: data.theme === "light" ? "white" : "black",
          color: data.theme === "light" ? "black" : "white",
        }}
      >
        Chang Color
      </button>
    </>
  );
};

export default Buttons;
