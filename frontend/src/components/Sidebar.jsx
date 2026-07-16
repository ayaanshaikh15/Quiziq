import { useClerk } from '@clerk/react';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Model from './Model';

function Sidebar() {
    const screens=[
        {title:'New Quiz',route:'/home',icon:'./plus.png'},
        {title:'History',route:'/history',icon:'./history.png'},
        {title:'Dashboard',route:'/dashboard',icon:'./dashboard.png'},
        {title:'Settings',route:'/settings',icon:'./setting.png'}
    ];
    const navigate = useNavigate();
    const location = useLocation();
const { signOut } = useClerk();
const [open, setopen] = useState(false)
  return (
    <>
    <div className="hidden  sm:flex fixed top-17 left-0 w-56 md:w-64 h-[calc(100vh-4rem)] flex-col justify-between border-r border-ai-border bg-navbar">
  <div  className='flex flex-col justify-center m-3'>
      {screens.map((val,index)=>
      <div className={`text-gray-500 cursor-pointer my-1 p-4 hover:text-gray-400 hover:bg-purple-500/20 rounded-2xl ${
      location.pathname === val.route
        ? "bg-primary text-white"
        : "hover:bg-purple-500/20"
    }`} onClick={()=>navigate(val.route)} key={index}>
        <span className='text-[14px] flex items-center gap-2'><img className="w-4 h-4 "  src={val.icon} alt={val.title}/>{" "}{val.title}</span>
      </div>)}
    
     </div>
     {open && <Model open={open} setopen={setopen} msg="Are you sure you want to logout?" func={signOut} />}
     <footer onClick={()=>setopen(true)}  className="flex  border-t border-ai-border p-5 gap-2 items-center">
        <div  className='flex gap-2 cursor-pointer items-center'>
      <img  src='./logout.png' className="w-4 h-4  mx-1 " />
      <span className='text-red-500 text-[14px] '>Logout</span>
   </div>
    </footer>
    </div>
    </>
  )
}

export default Sidebar