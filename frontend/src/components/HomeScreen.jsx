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
     <div className="pt-18 sm:pl-56 md:pl-64 ">
        <Sidebar/>
            
  <section className="h-[calc(100vh-4.25rem)]  p-5 flex items-center justify-center">
         <div className="text-center w-full ">
          <div>
            <h1 className="font-bold text-5xl md:text-7xl">
              <div className="bg-linear-to-r from-ai-gradient-from to-ai-gradient-to bg-clip-text text-transparent">
                AI Quiz
              </div>{" "}
              Generator
            </h1>
            <p className="text-gray-400 text-[10px] md:text-base max-w-lg mx-auto my-4">
              Transform any topic into a focused, interactive quiz in minutes.
              Learn smarter, retain more, and track your growth.
            </p>
          </div>
          <div className="flex justify-center my-12 ">
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
      </section>
     </div>
  )
}

export default HomeScreen