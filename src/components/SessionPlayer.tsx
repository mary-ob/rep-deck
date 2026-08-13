import workoutData from "../data/my-workout.json";
import { useKeyboardTrigger } from "../hooks/useKeyboardTrigger";
import { useSessionPlayer } from "../hooks/useSessionPlayer";
import type { Program, Session } from "../types";
import "./SessionPlayer.css";

const program: Program = workoutData as Program;

export default function SessionPlayer() {
  const { screen, goToNext } = useSessionPlayer(program.sessions[0] as Session);

  useKeyboardTrigger(goToNext);

  return (
    <div className="session-player">
      <span className="header">{screen.phase}</span>
      <span className="main">
        <h1>{screen.title}</h1>
        <p>{screen.notes}</p>
        <button onClick={goToNext}>Next</button>
      </span>
    </div>
  );
}
