// import { useState } from "react";
// import Banner from "../Banner/Banner";
// import PopularClasses from "../PopularClasses/PopularClasses";
// import PopularInstructor from "../PopularInstructor/PopularInstructor";

// const Home = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
//       <button className="mt-96" onClick={toggleDarkMode}>
//         {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//       </button>
//       <Banner></Banner>
//       <PopularClasses></PopularClasses>
//       <PopularInstructor></PopularInstructor>
//     </div>
//   );
// };

// export default Home;






import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;