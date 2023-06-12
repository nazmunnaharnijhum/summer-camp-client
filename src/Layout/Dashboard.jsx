import { FaCalendarAlt, FaHome,  FaPeopleArrows,  FaShoppingCart, FaUsers, FaWallet, FaWpforms } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
    const [cart] = useCart();
//TODO: load data from the server to have dynamic isAdmin based on Data
    // const  isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-[#e79e37]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full">
      {/* Sidebar content here */}
      {
        isAdmin ? <>
        <li>
        <NavLink to="/dashboard/manageclasses"><FaWpforms></FaWpforms> Manage Classes
        </NavLink>
        
        </li>
      <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> Manage users</NavLink></li>
     
        </> :  isInstructor ? <>
        <li>
        <NavLink to="/dashboard/addClass"><FaShoppingCart></FaShoppingCart> Add a Class
        </NavLink>
        
        </li>
      <li><NavLink to="/dashboard/myclasses"><FaCalendarAlt></FaCalendarAlt> My Classes</NavLink></li>
     
        </> : <>
        <li>
        <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Selected Classes<span className="badge bg-pink-300">+{cart?.length || 0}</span>
        </NavLink>
        
        </li>
      <li><NavLink to="/dashboard/enrolled"><FaCalendarAlt></FaCalendarAlt> My Enrolled Classes</NavLink></li>
      <li><NavLink to="/dashboard/myhistory"><FaWallet></FaWallet>Payment History</NavLink></li>
        </>
       
      }
      
      
      
      

      <div className="divider"></div>
      <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
      <li><NavLink to="/classes"><FaPeopleArrows></FaPeopleArrows> Classes</NavLink></li>
      <li></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;