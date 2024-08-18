/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import DarktButton from "../../assets/dark-mode/dark-mode-button.png";
import LightButton from "../../assets/dark-mode/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if(theme === "dark") {
      element.classList.add("dark");
    }
    else {
      element.classList.remove("dark");
    }
  })

  return <div className="relative">
    <img 
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    src={LightButton}  className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300 `}/>
    <img src={DarktButton} onClick={() => setTheme(theme === "light" ? "dark" : "light")}  className={`w-12 cursor-pointer transition-all duration-300 `}/>
  </div>
};

export default DarkMode;
