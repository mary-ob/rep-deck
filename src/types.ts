export const PHASES = [
  "begin",
  "warmup",
  "circuit",
  "cooldown",
  "end",
] as const;
export type Phase = (typeof PHASES)[number];

export interface Program {
  title: string;
  notes?: string;
  sessions: (Session | null)[];
}

export interface Session {
  title: string;
  notes?: string;
  warmup: Ramp[];
  circuit: Exercise[];
  circuitsCount: number;
  restBetweenCircuits: number;
  restBetweenExercises: number;
  cooldown: Ramp[];
  audioCue: boolean;
}

export interface Exercise {
  title: string;
  notes?: string;
  durationType: "seconds" | "reps";
  durationCount: number;
}

export interface Ramp {
  title: string;
  notes?: string;
}
