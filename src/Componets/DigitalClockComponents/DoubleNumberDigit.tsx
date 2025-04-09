import Digit from "./Digit";

type Props = {
  num: number;
} & React.HTMLAttributes<HTMLSpanElement>;

const digits = Array.from({ length: 10 }, (_, i) => i);
export default function DoubleNumberDigit({ num, ...props }: Props) {
  const [firstDigit, secondDigit] = num.toString().padStart(2, "0");
  return (
    <span {...props}>
      <Digit digits={digits} selected={parseInt(firstDigit)} />
      <Digit digits={digits} selected={parseInt(secondDigit)} />
    </span>
  );
}
