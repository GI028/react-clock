import { useEffect, useRef, useState } from "react";
import { Time } from "../../types/Time";

function timeAreSames(time1: Time, time2: Time) {
  return (
    time1.hours === time2.hours &&
    time1.minutes === time2.minutes &&
    time1.seconds === time2.seconds
  );
}
function useTime(defaultTime: Time): Time {
  const [_, setState] = useState<boolean>(false);
  const refresh = () => setState((current) => !current);
  const ref = useRef<Time>(defaultTime);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const newTime: Time = {
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      };
      const oldTime = ref.current;
      // console.log(ref.current);
      if (!timeAreSames(oldTime, newTime)) {
        ref.current = newTime;
        refresh();
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return ref.current;
}

export default useTime;
