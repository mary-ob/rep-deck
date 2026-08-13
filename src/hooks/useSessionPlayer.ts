import { useState } from "react";
import { type Session } from "../types";

export function useSessionPlayer(session: Session) {
  const [index, setIndex] = useState(0);

  const screens = getScreensForSession(session);
  const currentScreen = screens[index];

  const goToNext = () => {
    const isLastStep = index === screens.length - 1;
    if (!isLastStep) {
      setIndex(index + 1);
    }
  };

  return { screen: currentScreen, goToNext };
}

function getScreensForSession(session: Session) {
  const warmups = session.warmup.map((warmup) => ({
    phase: "Warmup",
    title: warmup.title,
    notes: warmup.notes,
  }));

  const exercises = session.circuit.map((exercise) => ({
    phase: "Circuit",
    title: exercise.title,
    notes: exercise.notes,
    durationType: exercise.durationType,
    durationCount: exercise.durationCount,
  }));

  const cooldowns = session.cooldown.map((cooldown) => ({
    phase: "Cooldown",
    title: cooldown.title,
    notes: cooldown.notes,
  }));

  return [...warmups, ...exercises, ...cooldowns];
}
