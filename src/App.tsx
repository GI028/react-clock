import AnalogClock from "./Componets/AnalogClock"
import useTime from "./Helpers/CustomHooks/useTime";

function App() {
  const time = useTime({
    hours: 12,
    minutes: 0,
    seconds: 0,
  });
  return (
      <div className="analog-clock-container">
        <AnalogClock time={time}/>
      </div>
  )
}

export default App
