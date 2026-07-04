import React, { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import { ThemeContext } from "../ThemeContext";

function History() {
  const { theme } = useContext(ThemeContext);
  const [search, setsearch] = useState("");
  const quiz = [
    { title: "JavaScript Basics", date: "2023-01-01", questions: 10, score: 9 },
    { title: "React Components", date: "2023-01-02", questions: 15, score: 12 },
    {
      title: "Node.js Fundamentals",
      date: "2023-01-03",
      questions: 20,
      score: 18,
    },
    {
      title: "Python Programming",
      date: "2023-01-04",
      questions: 25,
      score: 22,
    },
    { title: "JavaScript Basics", date: "2023-01-01", questions: 10, score: 8 },
    { title: "React Components", date: "2023-01-02", questions: 15, score: 12 },
    {
      title: "Node.js Fundamentals",
      date: "2023-01-03",
      questions: 20,
      score: 18,
    },
    {
      title: "Python Programming",
      date: "2023-01-04",
      questions: 25,
      score: 22,
    },
    { title: "JavaScript Basics", date: "2023-01-01", questions: 10, score: 8 },
    { title: "React Components", date: "2023-01-02", questions: 15, score: 12 },
    {
      title: "Node.js Fundamentals",
      date: "2023-01-03",
      questions: 20,
      score: 18,
    },
    {
      title: "Python Programming",
      date: "2023-01-04",
      questions: 25,
      score: 22,
    },
  ];
  const handleDownload = (value, e) => {
    e.stopPropagation();
    alert("Download started!"); // Prevent the click event from propagating to the parent div
  };
  const handleOpenQuiz = (value) => {
    alert(`Opening quiz: ${value.title}`);
  };
  return (
    <>
      <div className="pt-18 sm:pl-56 md:pl-64 m-8">
        <Sidebar />
        <div className="text-left  ">
          <h1 className="font-bold text-3xl md:text-5xl">
            Quiz {/* add text here*/}
            <span className="bg-linear-to-r from-ai-gradient-from to-ai-gradient-to bg-clip-text text-transparent">
              History
            </span>
          </h1>
          <p className="text-gray-400 text-[9px] md:text-[13px] max-w-lg  my-1 md:my-2">
            All your previously generated and completed quizzes.
          </p>
        </div>
        <div className="flex gap-2 justify-center items-center shadow-[0_0_20px_rgba(168,85,247,0.2)] rounded-2xl my-8 p-4 bg-navbar ">
          <img src={"./search.png"} className="w-3 h-3 md:w-4 md:h-4" />
          <input
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            type="text"
            placeholder="Search quizzes..."
            className={
              theme === "dark"
                ? "placeholder:text-gray-400 w-full border-none outline-none focus:outline-none focus:ring-0 text-[12px] md:text-sm resize-none"
                : "placeholder:text-gray-500 w-full border-none outline-none focus:outline-none focus:ring-0 text-[12px] md:text-sm resize-none"
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          {quiz.map((value, index) => (
            <div
              key={index}
              onClick={() => handleOpenQuiz(value)}
              className=" cursor-pointer flex justify-between items-center shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] rounded-2xl p-4 bg-navbar "
            >
              <div className="flex gap-4 items-center">
                <img
                  src="./document.png"
                  alt="Document"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-sm md:text-base">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-[9px] md:text-[13px]">
                    {value.date} . {value.questions} questions
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center justify-center">
                <p
                  className={`text-[12px] md:text-[14px] ${
                    (value.score / value.questions) * 100 > 85
                      ? "text-green-500"
                      : (value.score / value.questions) * 100 >= 40
                        ? "text-yellow-500"
                        : "text-red-500"
                  }`}
                >
                  {((value.score / value.questions) * 100).toFixed(0)}%
                </p>
                <button
                  onClick={(e) => handleDownload(value, e)}
                  className="cursor-pointer hover:bg-purple-500/20 text-amber-50 p-2  text-[12px] md:text-base  rounded-full  "
                >
                  <img
                    src="./downloads.png"
                    alt="Download"
                    className="w-4 h-4 md:w-5 md:h-5  "
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default History;
