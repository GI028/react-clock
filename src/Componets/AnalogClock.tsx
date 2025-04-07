import React, { useEffect, useRef, useState } from "react";

const numbers: number[] = [];
for (let i = 1; i <= 12; i++) {
  numbers.push(i);
}

type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};
function timeAreSames(time1: Time, time2: Time) {
  return (
    time1.hours === time2.hours &&
    time1.minutes === time2.minutes &&
    time1.seconds === time2.seconds
  );
}
export default function AnalogClock() {
  const [_, setState] = useState<boolean>(false);
  const refresh = () => setState((current)=>!current);
  const ref = useRef<Time>({
    hours: 12,
    minutes: 0,
    seconds: 0,
  });
  const time = ref.current;
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
  return (
    <div className="analog-clock">
      {numbers.map((number) => (
        <div
          key={number}
          style={{ "--number": number } as React.CSSProperties as any}
          className={`number ${number % 3 === 0 ? "big" : ""}`}
        >
          <span>{number}</span>
        </div>
      ))}
      <div
        className="minute-hand"
        style={{ transform: `rotate(${getHandAngle(time.minutes, 60, 6)}deg)` }}
      />
      <div
        className="hour-hand"
        style={{ transform: `rotate(${getHandAngle(time.hours, 12, 30)}deg)` }}
      />
      <div
        className="second-hand"
        style={{ transform: `rotate(${getHandAngle(time.seconds, 60, 6)}deg)` }}
      />
      <div className="center-hand" />
    </div>
  );
}

function getHandAngle(value: number, maxValue: number, step: number) {
  return (value % maxValue) * step;
}
