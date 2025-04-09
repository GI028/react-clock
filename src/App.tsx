import AnalogClock from "./Componets/AnalogClock";
import DigitalClock from "./Componets/DigitalClock";
import Digit from "./Componets/DigitalClockComponents/Digit";
import ThemeSwicher from "./Componets/ThemeSwicher";
import useTime from "./Helpers/CustomHooks/useTime";

function App() {
  const time = useTime({
    hours: 12,
    minutes: 0,
    seconds: 0,
    period: "AM",
  });
  return (
    <div className="analog-clock-container">
      <AnalogClock
        time={time}
        top="R. Giovanni"
        bottom={
          <>
            <div className="digital-clock-container">
              <Digit digits={["AM", "PM"]} selected={time.period} />
            </div>
            <div className="digital-clock-container">
              <DigitalClock time={time} />
            </div>
          </>
        }
      />
      <ThemeSwicher />
    </div>
  );
}

export default App;
