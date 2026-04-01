import React, { useState } from "react";
import Counter from "./Counter";
import Buttons from "./Buttons";
const Application = () => {
  const [count, setCount] = useState(0);

  //Function to add and delete value old method
  //   const add = function () {
  //     setCount(count + 1);
  //   };

  //   const deleteV = function () {
  //     setCount(count - 1);
  //   };

  const add = () => setCount((prev) => prev + 1);
  const deleteV = () => setCount((prev) => prev - 1);
  return (
    <>
      {/* here below hum nay function and chk code bnaya ha and bd mai hum nay sb ko change kr dia according to task and task is written in App.jsx */}
      {/* <h1>count: {count}</h1> */}
      {/* <button onClick={add} id="btn1">
        add
      </button>
      <button onClick={deleteV} id="btn2">
        delete
      </button> */}

      <Counter count={count} />
      <Buttons count={count} add={add} deleteV={deleteV} />
      
    </>
  );
};
export default Application;
