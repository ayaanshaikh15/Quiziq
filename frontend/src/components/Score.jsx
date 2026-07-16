import { useUser } from "@clerk/react";
import { useLocation, useNavigate } from "react-router-dom";
import ScoreCircle from "./ScoreCircle";

function Score() {
   const { state } = useLocation();
   const { user, isLoaded } = useUser();
   const handleExitFullscreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
};
   const navigate= useNavigate();
   const per=((state.score/state.totalQuestions)*100).toFixed(0)
  return (
    <div className="text-center  flex flex-col justify-center items-center h-screen w-full">
        <div className="flex flex-col gap-3 mb-15" >
        <h1>Quiz Completed!</h1>

      <h1 className="font-bold text-3xl md:text-5xl">
            {per >= 80 ? "Well Done":(per >=75 ? "Very Good":(per >= 50?"Good":"Retry"))},{" "}

            <span className="bg-linear-to-r from-ai-gradient-from to-ai-gradient-to bg-clip-text text-transparent">
              {user?.firstName}
            </span>
       </h1>
      
        </div>
      <div className=" border
      md:w-[50%] lg:w-[30%]
       border-gray-500 bg-purple-300/10 p-10 rounded-2xl  ">
      <div className="flex w-full items-center justify-center ">
       
       <ScoreCircle score={state.score} per={per} totalQuestions={state.totalQuestions}/>
      </div>
       <div className="flex mt-10 gap-2 text-center">
  {/* Total */}
  <div className="flex-1 p-5 flex flex-col justify-center items-center text-primary bg-primary/10 rounded-2xl">
    <h2>{state.totalQuestions}</h2>
    <p className="text-[10px] text-gray-400">Total</p>
  </div>

  {/* Incorrect */}
  <div className="flex-1 p-5 flex flex-col justify-center items-center text-red-700 bg-red-700/10 rounded-2xl">
    <h2 className="sm:text-lg">{state.totalQuestions - state.score}</h2>
    <p className="text-[10px] text-gray-400">Incorrect</p>
  </div>

  {/* Correct */}
  <div className="flex-1 p-5 flex flex-col justify-center items-center text-green-500 bg-green-500/20 rounded-2xl">
    <h2>{state.score}</h2>
    <p className="text-[10px] text-gray-400">Correct</p>
  </div>
</div>
       <div className="flex w-full mt-8   gap-2 items-center justify-center ">
          <button className="px-5 w-full text-white py-2 hover:bg-purple-400 bg-purple-500 rounded-xl text-[10px] md:text-[12px]">
            Start Again
          </button>
          <button
           onClick={()=>{navigate('/dashboard');
            handleExitFullscreen()}} 
            className="px-5 w-full py-2
              hover:bg-gray-400/10 border border-gray-500 rounded-xl text-[10px] md:text-[12px]">
            Dashboard 
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Score;