import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../pages/hooks/useAuth";
import { toast } from "react-toastify";


const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast("Successful logout");
        navigate('/');
      })
      .catch(error => {
        console.log('Error during logout: ', error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#ff52d9] font-bold" : "text-gray-500"
          }
        >
          Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-page"
          className={({ isActive }) =>
            isActive ? "text-[#ff52d9] font-bold" : "text-gray-500"
          }
        >
     Contact Us
        </NavLink>
      </li>
     
    </>
  );
	return (
		<div>
		
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navLinks}
      </ul>
    </div>
    <a className=" font-bold text-[#f72b70] text-xl md:text-2xl lg:text-3xl">PONNO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLinks}
    </ul>
  </div>
  {/* <div className="navbar-end">
  <ul className="menu menu-horizontal px-1">
     <Link to="sign-up"> <li className="btn md:btn-md btn-sm mr-2 bg-pink-600 hover:bg-pink-500 text-black">Sign Up</li></Link>
      <Link to="sign-in"><li className="btn md:btn-md btn-sm bg-cyan-600 hover:bg-cyan-500 text-black ">Sign In</li></Link>
    </ul>
  </div> */}
  <div className="navbar-end z-50">
          {user ? (
            <div className="dropdown dropdown-end">
              <div className="w-10 h-10" tabIndex={0}>
                <img className="rounded-full" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="profile" />
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
              
                <li className="disabled"><a>{user.displayName}</a></li>
                <li className="disabled"><a>{user.email}</a></li>
                <li>
                  <button className="btn btn-error btn-sm" onClick={handleLogout}>Log Out</button>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <Link to='/sign-up'><button className="btn btn-secondary btn-sm">Login</button></Link>
            </div>
          )}
        </div>
</div>
		</div>
	);
};

export default Navbar;

