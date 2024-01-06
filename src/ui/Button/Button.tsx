import "./Button.css";

interface BtnProps {
  children: string;
}

function Button({ children }: BtnProps) {
  return <button className="main-button">{children}</button>;
}

export default Button;
