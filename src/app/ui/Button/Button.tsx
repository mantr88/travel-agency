import css from "./Button.module.css";

interface BtnProps {
  children: string;
  extraСlassName?: string;
}

function Button({ children, extraСlassName }: BtnProps) {
  return (
    <button className={`${css.mainButton} ${extraСlassName}`}>
      {children}
    </button>
  );
}

export default Button;
