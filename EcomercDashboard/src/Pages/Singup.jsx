import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Singup = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();
    useEffect(()=>{
      const auth = localStorage.getItem('user'); 
      if(auth) {
        navigate('/');
      }
    })
   
  
    const submitform = async ()=>{
       let result = fetch('http://localhost:8047',{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{'content-Type': 'application/json'},
       });
        result = await (await result).json();
    console.log(result);
    localStorage.setItem('user',JSON.stringify(result));
    Navigate('/')
    
    }
  return (
    <div>
      <div className='flex justify-center item-center w-full h-[90vh]'>
        <div className='w-[350px] h-[400px] bg-sky-500/100 shadow-lg absolute mt-20 rounded flex justify-center text-center items-center'>
        <div className='flex flex-col gap-10'>
        <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' className='outline-none py-1 px-3 '/>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter your Email' className='outline-none py-1 px-3 '/>
        <input type="Password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your Password' className='outline-none py-1 px-3 '/>
        <button className='py-1 px-3 bg-[#3776ed] text-sm text-white' onClick={submitform}>Signup Now</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Singup;
