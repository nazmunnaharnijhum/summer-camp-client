import { useContext } from "react";
import {  Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const NavBar = ({toggleDarkMode}) => {
  const {user, logOut} = useContext(AuthContext);
  

  const handleLogOut = () => {
    logOut()
    .then(() =>{})
    .catch(error => console.log(error));
  }

    const navOptions = <>
    <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        
        {
          user ? <>
          <li><Link to="/dashboard">
        <button className="btn ">Dashboard</button></Link></li>
          <li className="tooltip" data-tip={user.displayName}>
          <img style={{width:'60px'}} src={user.photoURL} />
          </li>
          <li><button onClick={handleLogOut} className="btn btn-ghost">Log Out</button></li>
          </> : 
          <>
            <li><Link to="/login">Login</Link></li>
          </>
        }
        
    </>
 
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-25 text-white font-bold max-w-screen-xl mx-auto bg-black ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <img className="w-[150px] h-20" src="https://i.ibb.co/sWnt98n/360-F-389306425-z-Asi-EURL3pnv-NC3g-Pot-VFrz5wh-Xz-Msi-B-removebg-preview.png" alt="" />
    <a className="btn btn-ghost normal-case text-xl">ZenZone Camp</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="toggle " onClick={toggleDarkMode}>
        </button>
  </div>
</div>
        </>
    );
};

export default NavBar;