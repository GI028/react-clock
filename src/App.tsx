import AnalogClock from "./Componets/AnalogClock"
import DigitalClock from "./Componets/DigitalClock";
import Digit from "./Componets/DigitalClockComponents/Digit";
import useTime from "./Helpers/CustomHooks/useTime";

function App() {
  const time = useTime({
    hours: 12,
    minutes: 0,
    seconds: 0,
    period:"AM"
  });
  return (
      <div className="analog-clock-container">
        <DigitalClock time={time}/>
        <AnalogClock time={time}/>
        <Digit digits={["AM", "PM"]} selected={time.period} />
      </div>
  )
}

export default App
