import { Link, NavLink } from "react-router-dom";
import logo from '../../../images/logo.png'
import useAuth from "../../Hooks/useAuth";


const Navbar = () => {
  const {user, logOut} = useAuth();
    const NavLinks = <>
       <li> <NavLink to="/"><a>Home</a></NavLink></li>
       <li> <NavLink to="/allJobs"><a>All Jobs</a></NavLink></li>
       <li> <NavLink to="/addJob"><a>Add Job</a></NavLink></li>
       <li> <NavLink to="/appliedJob"><a>Applied Job</a></NavLink></li>
       <li> <NavLink to="/blogs"><a>Blogs</a></NavLink></li>
       <li> <NavLink to="/myJob"><a>My Job</a></NavLink></li>
    </>
    return (
        <div className="navbar bg-green-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box font-medium w-52">
       {NavLinks}
      </ul>
    </div>
    <Link to="/">
   <div className="flex items-center cursor-pointer">
   <img src={logo} className="w-16"  alt="" />
    <p className="normal-case text-2xl font-semibold">Job Buzz</p>
   </div>
   </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-medium">
      {NavLinks}
    </ul>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {user ? (
          <>
            
            <div className="flex items-center gap-3">
            <img className="rounded-full w-[40px]" src={user.photoURL} alt="" />
            <span className="mr-2">{user.displayName}</span>
            </div>
            <button onClick={logOut} className="btn btn-ghost">
              LogOut
            </button>
          </>
        ) : (
          <Link to="login">
            <button className="btn btn-ghost">Login</button>
          </Link>
        )}
    </ul>
  </div>
</div>
    );
};

export default Navbar;