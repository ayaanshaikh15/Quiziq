import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ScoreCircle({ score,per, totalQuestions }) {
  
const color =
  per < 35
    ? "#ef4444" // Red
    : per < 60
    ? "#f59e0b" // Yellow
    : "#22c55e"; // Green
  return (
    <div className="w-40 h-40">
     <CircularProgressbar
  value={per}
  text={`${Math.round(per)}%`}
  styles={buildStyles({
    pathColor: color,
    textColor: color,
    trailColor: "#e5e7eb",
    strokeLinecap: "round",
  })}
/>
    </div>
  );
}