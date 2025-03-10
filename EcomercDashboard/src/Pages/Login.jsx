import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const Loginform= async ()=>{
      const auth = localStorage.getItem('user');
      if(auth){
        navigate('/')
      }
        let result = await fetch('http://localhost:8047/login',{
          method: 'post',
          body: JSON.stringify({email,password}),
          headers:{'content-Type':'application/json'},
        })
        result = await (await result).json();
        console.log(result);
        if(result.name){
          localStorage.setItem('user',JSON.stringify(result));
          navigate('/');
        }else{
          alert('Your email or password is not available');
          
        }
        


        

    }
  return (
    <div>
    <div className='flex justify-center item-center w-full h-[90vh]'>
      <div className='w-[350px] h-[400px] bg-sky-500/100 shadow-lg absolute mt-20 rounded flex justify-center text-center items-center'>
      <div className='flex flex-col gap-10'>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter your Email' className='outline-none py-1 px-3 '/>
      <input type="Password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your Password' className='outline-none py-1 px-3 '/>
      <button className='py-1 px-3 bg-[#3776ed] text-sm text-white' onClick={Loginform}>Login Now</button>
      </div>
      </div>
    </div>
  </div>
  );
}

export default Login;
