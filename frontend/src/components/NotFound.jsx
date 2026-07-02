import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen text-xl sm:text-3xl lg:text-4xl font-bold">
   404 - Page Not Found
     <button onClick={()=>navigate('/home')} className="bg-primary  hover:bg-primary-hover text-amber-50 p-2 md:p-3 text-[12px] sm:text-sm md:text-base border border-ai-bubble rounded-xl  ">Go Back to home</button>   
    </div>
  )
}

export default NotFound