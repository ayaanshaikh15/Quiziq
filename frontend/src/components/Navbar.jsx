import React, { useContext, useState } from "react";

import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import { ThemeContext } from "../ThemeContext";
import Menubar from "./Menubar";
function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const Toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
 const [open, setopen] = useState(false);
 
  return (
  
    <>
      <nav className="flex fixed justify-between items-center bg-navbar h-17 top-0 left-0 w-full border-b border-ai-border px-5">
        <div className="text-text ">QuizIQ</div>
        <div className="flex ">
          <header>
            <Show when="signed-out">
              <div className="flex gap-4 md:gap-6">
                <button onClick={Toggle}>
                  {theme === "dark" ? (
                    <img src="./lightbtn.png" className="w-6 h-6 md:w-7 md:h-7" alt="light" />
                  ) : (
                    <img src="./darkbtn.png" className="w-6 h-6 md:w-8 md:h-8" alt="dark" />
                  )}
                </button>
                <SignInButton mode="modal">
                  <button className="md:px-3 md:py-2 text-[10px] md:text-sm px-3 py-2 sm:flex items-center justify-center  bg-primary hover:bg-primary-hover text-amber-50 rounded-full ">
                    Get Started
                  </button>
                </SignInButton>
              </div>
            </Show>
            <Show when="signed-in" >
            <div className="flex gap-5 md:gap-6">
               
             <button onClick={Toggle} className="flex items-center justify-center  ">
                  {theme === "dark" ? (
                    <img src="./lightbtn.png" className="w-7 h-7 md:w-8 md:h-8" alt="light" />
                  ) : (
                    <img src="./darkbtn.png" className="w-7 h-7 md:w-8 md:h-8" alt="dark" />
                  )}
                </button>
                <div className="hidden sm:flex items-center justify-center">
                  <UserButton/>
                </div>
                <button onClick={() => setopen(!open)} className="flex sm:hidden items-center justify-center">
                    {theme === "dark" ? (
                    <img src="./menulight.png" className="w-6 h-6 " alt="light" />
                  ) : (
                    <img src="./menu.png" className="w-6 h-6" alt="dark" />
                  )}
                </button>
            
</div>
            </Show>
          </header>
        </div>
         <div
      className={`
        fixed inset-0 z-50 mt-17
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
    >
     {open && <Menubar open={open} setopen={setopen} />}
      </div>
       </nav>
    </>
  );
}

export default Navbar;
