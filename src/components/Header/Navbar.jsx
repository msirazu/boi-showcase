import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const links = <>
    <NavLink to='/'><li><button className='capitalize'>home</button></li></NavLink>
    <NavLink to='/listed-books'><li><button className='capitalize'>listed books</button></li></NavLink>
    <NavLink to='/about'><li><button className='capitalize'>about</button></li></NavLink>
  </>
  const navActive = ({isActive}) => {
    return `font-bold ${isActive ? 'text-green-500' : 'text-red-500'}`
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
        {links}
      </ul>
    </div>
    <NavLink><button className="btn btn-ghost text-lg lg:text-xl font-bold">Book Vibe</button></NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2">
      <li><NavLink className={navActive} to='/'>Home</NavLink></li>
      <li><NavLink className={navActive} to='/listed-books'>Listed Books</NavLink></li>
      <li><NavLink to='/'>Pages to Read</NavLink></li>
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