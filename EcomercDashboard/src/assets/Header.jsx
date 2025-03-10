import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const auth = localStorage.getItem('user'); 
  const Navigate = useNavigate();
 const logout=()=>{
  
  localStorage.clear()
  Navigate('/Signup')
 } 

  return (
    <div>
      <div className='w-[100%] h-[70px] bg-sky-500/100 text-white font-'>
        <ul className='flex justify-center gap-5 sm:gap-40 pt-7'>
            <li><Link to={'/'}  className='hover:text-[#000]'>Home</Link></li>
            <li><Link to={'/Product'} className='hover:text-[#000]'>Product</Link></li>
            { auth ?<li><Link to={'/logout'} className='hover:text-[#000]' onClick={logout}>Logout</Link></li> :
            <>
            <li><Link to={'/Signup'} className='hover:text-[#000]'>Singup</Link></li>
            <li><Link to={'login'}>Login</Link></li>  </> }
        </ul>
      </div>
    </div>
  );
}

export default Header;
