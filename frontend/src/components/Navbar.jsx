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
      <nav className="flex fixed justify-between items-center bg-navbar h-17 top-0 left-0 w-full">
        <div className="text-text mx-6">QuizIQ</div>
        <div className="hidden sm:flex mx-6">
          <header>
            <Show when="signed-out">
              <div className="flex gap-6">
                <button onClick={Toggle}>
                  {theme === "dark" ? (
                    <img src="./lightbtn.png" className="w-7 h-7" alt="light" />
                  ) : (
                    <img src="./darkbtn.png" className="w-8 h-8" alt="dark" />
                  )}
                </button>
                <SignInButton mode="modal">
                  <button className="px-3 py-2 text-sm bg-primary hover:bg-primary-hover text-amber-50 rounded-full ">
                    Get Started
                  </button>
                </SignInButton>
              </div>
            </Show>
            <Show when="signed-in" >
            <UserButton
  appearance={{
    elements: {
      userButtonAvatarBox: "w-16 h-16",
    },
  }}
/>
            </Show>
          </header>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
