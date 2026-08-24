import { useEffect, useRef, useState } from "react";

export function useCountdown(seconds: number, audioCue: boolean) {
  const [remaining, setRemaining] = useState(seconds);

  const audioCueRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioCue) return;
    audioCueRef.current = new Audio("/sounds/ding.wav");
  }, [audioCue]);

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (remaining === 0 && audioCue && audioCueRef.current) {
      audioCueRef.current.currentTime = 0;
      audioCueRef.current.play().catch((err) => {
        console.warn("Playback blocked:", err);
      });
    }
  }, [remaining, audioCue]);

  if (remaining === 0) return "Time's up!";

  return `Time left: ${remaining}`;
}
