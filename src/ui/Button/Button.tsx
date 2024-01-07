import "./Button.css";

interface BtnProps {
  children: string;
  extraСlassName: string;
}

function Button({ children, extraСlassName }: BtnProps) {
  return (
    <button className={`main-button ${extraСlassName}`}>{children}</button>
  );
}

export default Button;
