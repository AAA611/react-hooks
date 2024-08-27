import { useCallback, useEffect, useRef } from "react";

const useInterval = (fn: () => void, delay?: number) => {
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const timerCallback = useCallback(fn, []);

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  useEffect(() => {
    if (typeof delay !== "number" || delay < 0) return;

    timerRef.current = setInterval(timerCallback, delay);

    return clear;
  }, [delay]);

  return clear
};

export default useInterval;
