import React from "react";
import { Link } from "react-router-dom";
import { GrDown } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className='flex justify-between font-semibold m-6 text-xl'>
      <Link to='/'>
        <p>Logo</p>
      </Link>
      <nav>
        <ul className='flex space-x-6'>
          <Link to='/'>Home</Link>
          <li className='flex dropdown' style={{ cursor: "pointer" }}>
            Shop
            <span className='flex items-end ml-1 text-2xl'>
              <GrDown />
            </span>
          </li>
          <li className='flex dropdown' style={{ cursor: "pointer" }}>
            Categories
            <span className='flex items-end ml-1 text-2xl'>
              <GrDown />
            </span>
          </li>
          <Link to='/blogs'>Blogs</Link>
          <Link to='/contact'>Contact</Link>
        </ul>
      </nav>
      <nav>
        <ul className='flex space-x-4 text-orange-500'>
          <Link to='/signin'>SignIn</Link>
          <Link to='signup'>SignUp</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
