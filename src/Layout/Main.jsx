import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { useState } from "react";

const Main = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
    return (
        <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        
            <NavBar
            toggleDarkMode={toggleDarkMode}
            ></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;