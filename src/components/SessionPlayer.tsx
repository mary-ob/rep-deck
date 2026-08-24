import workoutData from "../data/my-workout.json";
import { useKeyboardTrigger } from "../hooks/useKeyboardTrigger";
import { useSessionPlayer } from "../hooks/useSessionPlayer";
import { DURATION_TYPE, type Program, type Session } from "../types";
import Countdown from "./Countdown";
import "./SessionPlayer.css";

const program = workoutData as Program;
const session = program.sessions[0] as Session;

export default function SessionPlayer() {
  const { screen, goToNext, goToPrev, index } = useSessionPlayer(session);

  useKeyboardTrigger(goToNext);

  return (
    <div className="session-player">
      <span className="header">{screen.phase}</span>
      <span className="main">
        <h1>{screen.title}</h1>
        <p>{screen.notes}</p>
        {screen.durationType === DURATION_TYPE.reps && (
          <p>Reps: {screen.durationCount}</p>
        )}
        {screen.durationType === DURATION_TYPE.seconds &&
          screen.durationCount && (
            <Countdown
              key={`${screen.phase}-${screen.title}`} // TODO - use stable id from data model
              seconds={screen.durationCount}
              audioCue={session.audioCue}
            />
          )}
        {index !== 0 && <button onClick={goToPrev}>Back</button>}
        <button onClick={goToNext}>Next</button>
      </span>
    </div>
  );
}
