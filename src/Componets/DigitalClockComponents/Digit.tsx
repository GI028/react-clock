type DigitProps<T extends number | string> = {
  digits: T[];
  selected: T;
};
export default function Digit<T extends number | string>({
  digits,
  selected,
}: DigitProps<T>) {
  let index = digits.findIndex(d => d === selected);
  index = index < 0 ? 0 : index;
  return (      
    <div className="digit">
      <div style={{transform:`translateY(${-index}lh)`}}>
        {digits.map((digit) => (
          <div key={digit}>{digit}</div>
        ))}
      </div>
    </div>
  );
}
