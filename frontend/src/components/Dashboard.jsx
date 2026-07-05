import React from "react";
import Sidebar from "./Sidebar";
import { useUser } from "@clerk/react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user, isLoaded } = useUser();
  const date = new Date();
  const data = [
    {
      icon: "./document.png",
      score: "24",
      title: "Total Quizzes",
      subtitle: "+3 this week",
    },
    {
      icon: "./document.png",
      score: "82%",
      title: "Average Score",
      subtitle: "+5 vs last month",
    },
    {
      icon: "./document.png",
      score: "98%",
      title: "Best Score",
      subtitle: "Javascript fundamentals",
    },
    {
      icon: "./document.png",
      score: "67",
      title: "Total Questions",
      subtitle: "+12 this week",
    },
  ];
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
  const navigate= useNavigate();
  return (
    <>
      <div className="pt-18 sm:pl-56 md:pl-64 m-8">
        <Sidebar />
        <div className="text-left ">
          <h1 className="font-bold text-3xl md:text-5xl">
            Hello,{" "}
            <span className="bg-linear-to-r from-ai-gradient-from to-ai-gradient-to bg-clip-text text-transparent">
              {user?.firstName}
            </span>
          </h1>
          <p className="text-gray-400 text-[9px] md:text-[13px] max-w-lg  my-1 md:my-2">
            {date.toLocaleDateString("en-US", {
              weekday: "long",
            })}
            {", "}
            {date.getDate()}{" "}
            {date.toLocaleDateString("en-US", {
              month: "long",
            })}
            {" • "}Here is your learning snapshot.
          </p>
        </div>
        <div className="flex flex-row gap-2 mt-5">
          {data.map((value, index) => (
            <div
              key={index}
              className="flex-1 bg-navbar shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] p-3 md:p-6 rounded-2xl border border-ai-border my-3  flex flex-col  md:gap-2   "
            >
              <div className="flex items-center font-bold ">
                <img
                  src={value.icon}
                  className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
                  alt="img"
                />{" "}
                <br />
              </div>
              
              <p className="bg-linear-to-r text-base md:text-4xl lg:text-5xl font-bold from-ai-gradient-from to-ai-gradient-to bg-clip-text text-transparent">
                {value.score}
              </p>
               <div className="flex flex-col justify-between gap-1 md:gap-2">
              <h3 className="text-[7px] md:text-[12px] lg:text-sm font-bold">{value.title}</h3>
             
              <p className="text-gray-400 w-full border-none outline-none focus:outline-none focus:ring-0 text-[5.3px] md:text-[10px] lg:text-sm resize-none ">
                {value.subtitle}
              </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm items-center my-6">
          <div className="font-bold">Recent Activity</div>
          <p onClick={()=>navigate('/history')} className="hover:text-purple-400 text-[12px] md:text-sm text-[#a044ce] cursor-pointer ">
            View All &gt;
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {quiz.slice(-5).map((value, index) => (
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
                  <h3 className="font-bold text-[12px] md:text-base" >
                    {value.title.length
                      > 20
                      ? `${value.title.substring(0, 20)}...`
                      : value.title}
                  </h3>
                  <p className="text-gray-400 text-[9px] md:text-[12px]">
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

export default Dashboard;
