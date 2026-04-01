import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Application from "./components/Application";
import Counter from "./components/Counter";
import Buttons from "./components/Buttons";
import { createContext, useContext } from "react";

export const userContext = createContext();
function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("aqib")
  const [theme, settheme] = useState("light");

  function colorChange(){
     backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
  }

  // const user = "yahoo baba";
  function chang(){
    let h = document.getElementsByTagName("h1");
    setUser("habibi");
  }

  return (
    <>
      <userContext.Provider value={{user, chang, colorChange}}>
        <Application />
        {/* <Buttons / > */}
      </userContext.Provider>
      {/* <Counter /> */}
      {/* <Counter /> */}
    </>
  );
}

export default App;
