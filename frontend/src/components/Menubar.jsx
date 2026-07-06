
import { useAuth, useClerk, UserButton, useUser } from '@clerk/react';
import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext';
import { useLocation, useNavigate } from 'react-router-dom';


function Menubar({open,setopen}) {
 if(!open) return null;
   const { user, isLoaded } = useUser();
   const {theme} = useContext(ThemeContext);
   const screens=[
        {title:'New Quiz',route:'/home',icon:'./plus.png'},
        {title:'History',route:'/history',icon:'./history.png'},
        {title:'Dashboard',route:'/dashboard',icon:'./dashboard.png'},
        {title:'Settings',route:'/settings',icon:'./setting.png'}
    ];
    const navigate = useNavigate();
    const location = useLocation();
const { signOut } = useClerk();

  return (
    <div  className="grid grid-cols-2 grid-rows-1 sm:hidden fixed inset-0  blur-full bg-black/40  ">
      <div className='h-full' onClick={(e)=>{setopen(false)}}></div>
      <div className="h-full flex flex-col justify-between bg-navbar w-full border border-l border-ai-border ">
    <div  className='flex flex-col justify-center m-4 gap-2' >
      {screens.map((val,index)=>
      <div className={`text-gray-500 cursor-pointer my-1 p-3 hover:text-gray-400 hover:bg-purple-500/20 rounded-2xl ${
      location.pathname === val.route
        ? "bg-primary text-white"
        : "hover:bg-purple-500/20"
    }`} onClick={()=>{navigate(val.route);setopen(false)}} key={index}>
        <span className='text-sm flex items-center gap-2'><img className="w-4 h-4 "  src={val.icon} alt={val.title}/>{" "}{val.title}</span>
      </div>)}
    
     </div>
     
     <footer   className="flex  border-t border-ai-border p-3 gap-2 items-center ">
        <div  className='flex gap-2 cursor-pointer items-center'>
      <UserButton/>
      <span className='text-sm'>{user?.fullName}</span>
   </div>
    </footer>
      </div>
     </div>
  )
}

export default Menubar
