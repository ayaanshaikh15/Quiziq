import React from 'react'
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const screens=[
        {title:'New Quiz',route:'/home',icon:'./plus.png'},
        {title:'History',route:'/history',icon:'./history.png'},
        {title:'Dashboard',route:'/dashboard',icon:'./dashboard.png'},
        {title:'Settings',route:'/settings',icon:'./setting.png'}
    ];
    const navigate = useNavigate();
    

  return (
    <>
    <div className='sm:flex fixed left-0 top-17  hidden md:w-60 border-r   flex-col justify-between bg-navbar  sm:h-167 sm:w-50  border-l border-ai-border'>
     <div  className='flex flex-col justify-center m-3'>
      {screens.map((val,index)=>
      <div className=" cursor-pointer my-1 p-4 hover:bg-purple-400/30 rounded-2xl" onClick={()=>navigate(val.route)} key={index}>
        <span className='text-gray-400 text-[14px] flex items-center gap-2'><img className="w-4 h-4 "  src={val.icon} alt={val.title}/>{" "}{val.title}</span>
      </div>)}
    
     </div>
     <footer className="flex  border-t border-ai-border p-5 gap-2 items-center">
        <div className='flex gap-2 cursor-pointer items-center'>
      <img  src='./logout.png' className="w-4 h-4  mx-1 " />
      <span className='text-red-500 text-[14px] '>Logout</span>
   </div>
    </footer>
    </div>
    </>
  )
}

export default Sidebar