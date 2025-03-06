import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className='w-[100%] h-[70px] bg-sky-500/100 text-white font-'>
        <ul className='flex justify-center gap-5 sm:gap-40 pt-7'>
            <li><Link to={'/'}  className='hover:text-[#000]'>Home</Link></li>
            <li><Link to={'/Product'} className='hover:text-[#000]'>Product</Link></li>
            <li><Link to={'/Signup'} className='hover:text-[#000]'>Singup</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
