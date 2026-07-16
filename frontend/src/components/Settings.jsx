import React, { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import { ThemeContext } from "../ThemeContext";
import Model from "./Model";
import { useClerk } from "@clerk/react";

function Settings() {
  const { theme, setTheme ,issidbarOpen, setissidbarOpen} = useContext(ThemeContext);
  const { signOut } = useClerk();
  const [open, setopen] = useState(false);
   console.log(issidbarOpen)
  return (
    <div className="pt-18 sm:pl-56 md:pl-64 m-5">
      <Sidebar />
      <div className="text-left ">
        <h1 className="font-bold text-3xl md:text-5xl">
          {" "}
          {/* add text here*/}
          <span className="bg-linear-to-r from-ai-gradient-from to-ai-gradient-to bg-clip-text text-transparent">
            Settings
          </span>
        </h1>
        <p className="text-gray-400 text-[9px] md:text-[13px] max-w-lg  my-1 md:my-2">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-10 ">
        <div className=" cursor-pointer flex justify-between items-center shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] rounded-2xl p-4 bg-navbar ">
          <div className="flex gap-4 items-center">
            <img
              src="./document.png"
              alt="Document"
              className="w-5 h-5 md:w-9 md:h-9"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-[12px] md:text-base">Theme</h3>
              <p className="text-gray-400 text-[9px] md:text-[13px]">
                Toggle between light and dark interface
              </p>
            </div>
          </div>
          <div className={`flex gap-4 items-center justify-center ${issidbarOpen ? 'hidden' : 'inline-flex'}`}>
            <label className={`relative   items-center cursor-pointer `}>
              <input
                type="checkbox"
                className="sr-only peer"
                checked={theme === "dark"}
                onChange={() => {
                  setTheme((prev) => (prev === "dark" ? "light" : "dark"));
                }}
              />
              <div
                className="
 w-8 h-4 md:w-11 md:h-6
      rounded-full bg-gray-300
      peer-checked:bg-purple-500
      transition-colors duration-300
      overflow-hidden

      after:content-['']
      after:block
      after:w-3 after:h-3
      md:after:w-5 md:after:h-5
      after:mt-0.5 after:ml-0.5
      after:bg-white
      after:rounded-full
      after:transition-transform
      peer-checked:after:translate-x-4
      md:peer-checked:after:translate-x-5
"
              />
            </label>
          </div>
        </div>
        <div className=" cursor-pointer flex justify-between items-center shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] rounded-2xl p-4 bg-navbar ">
          <div className="flex gap-4 items-center">
            <img
              src="./document.png"
              alt="Document"
              className="w-5 h-5 md:w-9 md:h-9"
            />
            <div className="flex flex-col ">
              <h3 className="font-bold text-[12px] md:text-base">
                Profile Settings
              </h3>
              <p className="text-gray-400 text-[9px] md:text-[13px]">
                Update your name,avatar and bio
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                alert("hello");
              }}
              className="bg-purple-500/40 text-[8px] px-3 py-1 rounded-full md:text-sm md:px-3.5 cursor-pointer"
            >
              Edit
            </button>
          </div>
        </div>
        <div className=" cursor-pointer flex justify-between items-center shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] rounded-2xl p-4 bg-navbar ">
          <div className="flex gap-4 items-center">
            <img
              src="./document.png"
              alt="Document"
              className="w-5 h-5 md:w-9 md:h-9"
            />
            <div className="flex flex-col ">
              <h3 className="font-bold text-[12px] md:text-base">
                Change Password
              </h3>
              <p className="text-gray-400 text-[9px] md:text-[13px]">
                Update your account password securely
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                alert("hello");
              }}
              className="bg-purple-500/40 text-[8px] px-3 py-1 rounded-full md:text-sm md:px-3.5 cursor-pointer"
            >
              change
            </button>
          </div>
        </div>
        <div className=" cursor-pointer flex justify-between items-center shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] rounded-2xl p-4 bg-navbar ">
          <div className="flex gap-4 items-center">
            <img
              src="./document.png"
              alt="Document"
              className="w-5 h-5 md:w-9 md:h-9"
            />
            <div className="flex flex-col ">
              <h3 className="font-bold text-[12px] md:text-base">
                Logout
              </h3>
              <p className="text-gray-400 text-[9px] md:text-[13px]">
                Sign out of your QuizIQ account
              </p>
            </div>
          </div>
          {open && <Model open={open} setopen={setopen} msg="Are you sure you want to logout?" func={signOut} />}
          <div className="flex gap-4 items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setopen(true);
              }}
              className="bg-red-500/40 text-[8px] px-3 py-1 rounded-full md:text-sm md:px-3.5 cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
