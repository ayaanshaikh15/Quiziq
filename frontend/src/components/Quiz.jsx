import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();
  const {id}=useParams();
  const quiz = [
  {
    id: 1,
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Database"],
    answer: "Library",
  },
  {
    id: 2,
    question: "Which hook is used for state?",
    options: ["useEffect", "useState", "useMemo", "useRef"],
    answer: "useState",
  },
  {
    id: 1,
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Database"],
    answer: "Library",
  },
];
const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
 const [score, setscore] = useState(0);
  const currentQuestion = quiz[currentIndex];
  useEffect(() => {
    const handleFullscreenChange = () => {
      // If user exits fullscreen (Esc, F11, etc.)
      if (!document.fullscreenElement) {
        navigate(-1);
      }
    };
     
    document.addEventListener(
      "fullscreenchange",
      handleFullscreenChange
    );
    //cleaning
    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenChange
      );
    };
  }, [navigate]);
 
   
  const handleSubmit = () => {
    if(selectedOption == quiz[currentIndex].answer)
   {
    setscore((prev)=>prev+1);
   }
    // Save answer here if needed

    if (currentIndex < quiz.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption("");
    } else {
       navigate("/score", {
      state: {
        score:
          selectedOption === quiz[currentIndex].answer
            ? score + 1
            : score,
        totalQuestions: quiz.length,
        
      },
    });
    }
  };
  const progress = (currentIndex / quiz.length) * 100;
  return (
    <div >
      <div className="h-18 flex justify-between items-center mx-5 ">
        
         <div className="text-gray-400 text-[12px]" >
          Questions<br/>
         <p className="text-xl "><span className="text-3xl text-purple-400">{currentIndex + 1}</span> / {quiz.length}</p>
      </div>
      <div>
        {new Date().getDate()}
      </div>
      </div>
     
  <div className="w-full mt-1 h-1 bg-gray-400 rounded-full overflow-hidden">
  <div
    className="h-full bg-purple-400 rounded-full transition-all duration-500 ease-in-out"
    style={{ width: `${progress}%` }}
  />
  
  </div>
      
  <div className="flex  justify-center items-center h-screen -mt-10">
      <div className=" w-[99%]
      md:w-[60%] lg:w-[40%]
       p-10 rounded-2xl  " >
      <div className="  flex justify-between items-center shadow-[0_0_20px_rgba(168,85,247,0.2)] rounded-2xl p-7 bg-navbar text-sm sm:text-[15px]" >{currentQuestion.question}</div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-5">
      {currentQuestion.options.map((option) => (
  <label key={option} className="cursor-pointer">
    <input
      type="radio"
      name="option"
      value={option}
      checked={selectedOption === option}
      onChange={() => setSelectedOption(option)}
      className="peer hidden"
    />

    <div className="p-4 rounded-2xl  transition-all text-[11px] text-gray-400 sm:text-sm
    shadow-[0_0_20px_rgba(168,85,247,0.2)] bg-navbar
                    peer-checked:shadow-[0_0_20px_rgba(168,85,247,0.4)]
                    peer-checked:border-purple-400
                      peer-checked:border
                    peer-checked:bg-navbar">
      {option}
    </div>
  </label>
))}

    </div>
    <div className="flex w-full justify-end">
    <button className="cursor-pointer  hover:bg-purple-400  mt-3 bg-purple-500 flex justify-between items-center shadow-[0_0_20px_rgba(168,85,247,0.2)] rounded-xl px-6 py-2  text-[11px] sm:text-sm"
        onClick={handleSubmit}
        disabled={!selectedOption}
      >
        {currentIndex === quiz.length - 1 ? "Finish" : "Submit"}
      </button>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Quiz;