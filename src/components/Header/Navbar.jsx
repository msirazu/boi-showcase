import { NavLink } from 'react-router'

const Navbar = () => {
const navActive = ({isActive}) => {
  return `font-bold border border-green-300 rounded-md ${isActive ? 'text-green-500' : 'text-red-500'}`
}
    return (
        <div className="navbar bg-base-100 shadow-sm work-sans">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 capitalize gap-2">
      <li><NavLink className={navActive} to='/'>home</NavLink></li>
      <li><NavLink>listed books</NavLink></li>
      <li><a>pages to read</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <a className="btn capitalize bg-[#14A70B] text-white rounded-lg">sign in</a>
    <a className="btn capitalize bg-[#4EBECF] text-white rounded-lg">sign up</a>
  </div>
</div>
    );
};

export default Navbar;