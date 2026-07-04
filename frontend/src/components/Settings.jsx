import React from 'react'
import Sidebar from './Sidebar'

function Settings() {
  return (
    <div className="pt-18 sm:pl-56 md:pl-64 m-8">
        <Sidebar/>
         <div className="text-left ">
         <h1 className="font-bold text-3xl md:text-5xl">
          
                {" "} {/* add text here*/}
              <span className="bg-linear-to-r from-ai-gradient-from to-ai-gradient-to bg-clip-text text-transparent">
               Settings
              </span>
            </h1>
        <p className="text-gray-400 text-[9px] md:text-[13px] max-w-lg  my-1 md:my-2">Manage your account settings and preferences.</p>
      </div>
     </div>
  )
}

export default Settings