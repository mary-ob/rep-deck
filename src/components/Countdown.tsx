import { useCountdown } from "../hooks/useCountdown";

interface CountdownProps {
  seconds: number;
  audioCue: boolean;
}

export default function Countdown({ seconds, audioCue }: CountdownProps) {
  const remaining = useCountdown(seconds, audioCue);
  return <p>{remaining}</p>;
}
