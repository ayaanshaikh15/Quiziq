import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import { Link } from "react-router-dom";
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
  const links=[
    {link:'/privacy',title:'Privacy'},
    {link:'/terms',title:'Terms'},
    {link:'/blog',title:'Blog'},
    {link:'/support',title:'Support'},
    {link:'/docs',title:'Docs'}
  ]
  const cards =[
    {
      icon:'./document.png',
      heading:'Enter Your Topic',
      subheading:'Type any subject or paste your syudy material into the prompt box'
    },
    {
      icon:'./processor.png',
      heading:'AI Builds the Quiz',
      subheading:'Our model generates precise multiple-choice questions in seconds'
    },
    {
      icon:'./graduation.png',
      heading:'Take the Quiz',
      subheading:'Answer questions in clean focused,distraction-free interface'
    },
    {
      icon:'./stack.png',
      heading:'Review & Improve',
      subheading:'See your score, correct answers, and track progress over time'
    }
    
  ]
  return (
    <div className="pt-10 sm:pt-12 md:pt-16 ">
      <section className=" h-screen p-5 flex items-center justify-center">
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
      <section className="w-full h-auto px-5">
      <div className="text-center ">
         <h1 className="font-bold text-3xl md:text-5xl">
          
              How it {" "}
              <span className="bg-linear-to-r from-ai-gradient-from to-ai-gradient-to bg-clip-text text-transparent">
                works
              </span>
            </h1>
        <p className="text-gray-400 text-[9px] md:text-[13px] max-w-lg mx-auto my-1 md:my-2">Four simple steps from topic to results.</p>
      </div>
      <div className="flex flex-col md:flex-row  mt-10 md:mt-20">
       {cards.map((value,index)=>
       <div key={index} className=" bg-navbar shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] p-6 rounded-2xl border border-ai-border my-2 md:m-2 flex flex-col gap-4 ">
       <div className="flex items-center font-bold "><img src={value.icon} className="w-9 h-9 md:w-12 md:h-12 " alt="img"/> <span className="text-gray-400 mx-4">0{index+1}</span></div>
       <h3>{value.heading}</h3>
        <p className="text-gray-400 w-full border-none outline-none focus:outline-none focus:ring-0 text-[12px] md:text-[14px] resize-none">{value.subheading}</p>
       </div>
      )}
      </div>
      </section>

      <section className="w-full  h-auto px-5 mt-20 ">
        {/**/}
      <div className="text-center bg-navbar shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] p-8 rounded-2xl border border-ai-border  flex flex-col gap-4 justify-center items-center">
        <div>
         <h1 className="font-bold text-3xl md:text-5xl">
          
              Ready to  {" "}
              <span className="bg-linear-to-r from-ai-gradient-from to-ai-gradient-to bg-clip-text text-transparent">
                start learning
              </span>
            </h1>
        <p className="text-gray-400 text-[10px] md:text-[13px] max-w-lg mx-auto my-2 md:my-2">Join thousands of learners already using QuizIQ to study smarter</p>
         </div>
         <button className="bg-primary  hover:bg-primary-hover text-amber-50 p-2 md:p-3 text-[12px] md:text-base border border-ai-bubble rounded-xl  ">Create your first quiz - free</button>
      </div>
      
      </section>

      <section className="w-full  h-auto  mt-20">
        <div className="flex justify-between items-center bg-navbar h-17  w-full">
        <div className="text-[12px] sm:text-lg mx-6">QuizIQ</div>
        <nav className="flex justify-center items-center gap-4 md:gap-7 ">
           {links.map((value,index)=>
                <Link key={index} to={value.link} className="text-gray-400 text-[9px] sm:text-[12px] md:text-[14px]">{value.title}</Link>
         
           )}
          
         </nav>
        <p className="mx-6 text-[6px] text-gray-400 md:text-[12px]">@ 2025 QiuzIQ, inc.</p>
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;
