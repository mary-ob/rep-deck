import { useEffect } from 'react';

export function useKeyboardTrigger(callback: (e: KeyboardEvent) => void, { keys = ['Space', 'Enter'], target }: { keys?: string[], target?: React.RefObject<HTMLElement> } = {}) {
  useEffect(() => {
    const element = target?.current ?? window;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (keys.includes(e.code)) {
        e.preventDefault();
        callback(e);
      }
    };

    element.addEventListener('keydown', handleKeyDown as EventListener);
    return () => element.removeEventListener('keydown', handleKeyDown as EventListener);
  }, [callback, keys, target]);
}