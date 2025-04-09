import { Time } from "../types/Time";
import DoubleNumberDigit from "./DigitalClockComponents/DoubleNumberDigit";

type Props = {
  time: Time;
};
export default function DigitalClock({ time }: Props) {
  return (
    <div className="digital-clock">
      <DoubleNumberDigit num={time.hours} />
      <span>:</span>
      <DoubleNumberDigit num={time.minutes} />
      <span>.</span>
      <DoubleNumberDigit num={time.seconds} className="seconds" />
    </div>
  );
}
