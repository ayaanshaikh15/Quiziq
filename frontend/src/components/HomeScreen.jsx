import React, { useContext, useState } from 'react'
import Sidebar from './Sidebar'
import { ThemeContext } from '../ThemeContext';

function HomeScreen() {
   const { theme } = useContext(ThemeContext);
   
    const [Prompt, setPrompt] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      if(Prompt=="")
        return alert("Describe your topic...")
      if(Prompt.length<100)
        return alert("Topic must be of atleast 100 characters");
      alert(Prompt)
    };
  return (
     <div className="pt-18 sm:pl-56 md:pl-64 m-8">
        <Sidebar/>
         <div className="text-left ">
         <h1 className="font-bold text-3xl md:text-5xl">
          
               AI Quiz {" "} {/* add text here*/}
              <span className="bg-linear-to-r from-ai-gradient-from to-ai-gradient-to bg-clip-text text-transparent">
                Generator
              </span>
            </h1>
        <p className="text-gray-400 text-[9px] md:text-[13px] max-w-lg  my-1 md:my-2">Describe your topic and configure settings below</p>
      </div>
      <div className="flex justify-center items-center h-[calc(100vh-30rem)] md:h-[calc(100vh-25rem)] mt-10 ">
            <form onSubmit={(e)=>handleSubmit(e)} className="p-6  shadow-[0_0_20px_rgba(168,85,247,0.3)] max-w-2xl border  rounded-3xl border-ai-border w-full bg-navbar">
              <textarea
                placeholder="Describe your topic..."
                value={Prompt}
                onChange={(e) => {
                setPrompt(e.target.value)
                }}
                
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    
                    handleSubmit(e);
                  }
                }}
                 className={
    theme === "dark"
      ? "placeholder:text-gray-400 w-full border-none outline-none focus:outline-none focus:ring-0 text-[12px] md:text-base resize-none"
      : "placeholder:text-gray-500 w-full border-none outline-none focus:outline-none focus:ring-0 text-[12px] md:text-base resize-none"
  }
             ></textarea>
              <div className="flex justify-between items-center  my-2">
                <div>
                  <br/>
                   <p className="text-gray-400 text-[10px] md:text-base ">character {Prompt.length}/100</p>
                
                </div>
               <input
                  type="submit"
                  className="bg-primary hover:bg-primary-hover text-amber-50 p-2 md:p-3 text-[12px] md:text-base  rounded-full  "
                   value={'Generate'}
                />
                  
                
              </div>
            </form>
          </div>
     </div>
  )
}

export default HomeScreen