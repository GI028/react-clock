import { ReactNode } from "react";
import { Time } from "../types/Time";

const numbers: number[] = [];
for (let i = 1; i <= 12; i++) {
  numbers.push(i);
}

type Props = {
  time: Time;
  top?: ReactNode;
  right?: ReactNode;
  bottom?: ReactNode;
  left?: ReactNode;
  children?: ReactNode;
};

export default function AnalogClock({ time, ...chidren }: Props) {
  return (
    <div className="analog-clock">
      <div className="internal-container">
        {numbers.map((number) => (
          <div
            key={number}
            style={{ "--number": number } as React.CSSProperties as any}
            className={`number ${number % 3 === 0 ? "big" : ""}`}
          >
            <span>{number}</span>
          </div>
        ))}

        <div className="middle-analog vertical">
          <div className="top">{chidren.top}</div>
          <div className="bottom">{chidren.bottom}</div>
        </div>

        <div className="middle-analog">
          <div className="left">{chidren.right}</div>
          <div className="right">{chidren.left}</div>
        </div>
        <div className="middle-analog">{chidren.children}</div>
        <div
          className="minute-hand"
          style={{
            transform: `rotate(${getHandAngle(time.minutes, 60, 6)}deg)`,
          }}
        />
        <div
          className="hour-hand"
          style={{
            transform: `rotate(${getHandAngle(time.hours, 12, 30)}deg)`,
          }}
        />
        <div
          className="second-hand"
          style={{
            transform: `rotate(${getHandAngle(time.seconds, 60, 6)}deg)`,
          }}
        />
        <div className="center-hand" />
      </div>
    </div>
  );
}

function getHandAngle(value: number, maxValue: number, step: number) {
  return (value % maxValue) * step;
}
