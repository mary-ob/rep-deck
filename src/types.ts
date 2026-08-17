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
  cooldown: Ramp[];
  audioCue: boolean;
}

export const DURATION_TYPE = {
  seconds: "seconds",
  reps: "reps",
} as const;

export type DurationType = (typeof DURATION_TYPE)[keyof typeof DURATION_TYPE];

interface Exercise {
  title: string;
  notes?: string;
  durationType: DurationType;
  durationCount: number;
}

interface Ramp {
  title: string;
  notes?: string;
}
