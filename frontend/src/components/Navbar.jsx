import React, { useContext } from "react";

import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import { ThemeContext } from "../ThemeContext";
function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const Toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <nav className="flex fixed justify-between items-center bg-navbar h-17 top-0 left-0 w-full border-b border-ai-border">
        <div className="text-text mx-6">QuizIQ</div>
        <div className="flex mx-6">
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
            <div className="flex gap-4 md:gap-6">
               
             <button onClick={Toggle} className="flex items-center justify-center  ">
                  {theme === "dark" ? (
                    <img src="./lightbtn.png" className="w-6 h-6 md:w-7 md:h-7" alt="light" />
                  ) : (
                    <img src="./darkbtn.png" className="w-6 h-6 md:w-8 md:h-8" alt="dark" />
                  )}
                </button>
            <UserButton/>
</div>
            </Show>
          </header>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
