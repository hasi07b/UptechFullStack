import React from "react";
// import "../style/Buttons.css";
const Buttons = ({ add, deleteV }) => {
  return (
    <>
      <button onClick={add}>Add </button>
      <button onClick={deleteV}>Delete </button>
    </>
  );
};

export default Buttons;
