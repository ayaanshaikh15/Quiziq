import { useClerk } from '@clerk/react';
import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext';

function Model({open,setopen,msg,func}) {
   if(!open) return null;
   
   const {theme} = useContext(ThemeContext);
  return (
    <div onClick={()=>setopen(false)} className="fixed inset-0 flex justify-center items-center blur-full bg-black/40 ">
      <div className="flex flex-col  bg-sidebar p-6 shadow-[0_0_20px_rgba(168,85,247,0.2)] rounded-2xl gap-2 w-[90%] sm:w-[400px] md:w-[500px] lg:w-[600px] border border-ai-border">
          <h4>{msg}</h4>
            <div className="flex gap-4 mt-4">
                <button onClick={()=>{setopen(false)}} className={` ${theme=='light'? 'hover:bg-gray-100':'hover:bg-[#3a233d]' } border border-ai-border text-gray-400 px-4 py-2 rounded-lg w-full text-sm cursor-pointer`}>
                    Cancel
                </button>
                <button onClick={()=>{func(); setopen(false);}} className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-4 py-2 rounded-lg w-full text-sm">
                    Logout
                </button>
            </div>
      </div>
        {/* <button onClick={(e)=>{e.stopPropagation(); setopen(false);}} className="absolute top-5 right-5 text-white text-2xl font-bold">X</button>
    */}</div> 
  )
}

export default Model