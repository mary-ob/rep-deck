import { useCountdown } from "../hooks/useCountdown";

export default function Countdown({ seconds }: { seconds: number }) {
  const remaining = useCountdown(seconds);
  return <p>{remaining}</p>;
}
