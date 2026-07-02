import React from 'react'
import Sidebar from './Sidebar'
import { useUser } from '@clerk/react';

function Dashboard() {
  const { user, isLoaded } = useUser();
  return (
    <>
     <div className="pt-18 sm:pl-56 md:pl-64 m-8">
        <Sidebar/>
         <div className="text-left ">
         <h1 className="font-bold text-3xl md:text-5xl">
          
              Hello, {" "} {user?.firstName}
              
            </h1>
        <p className="text-gray-400 text-[9px] md:text-[13px] max-w-lg  my-1 md:my-2">Four simple steps from topic to results.</p>
      </div>
     </div>
    </>
  )
}

export default Dashboard