import { useContext } from 'react';
import ContextTheme from '../context/Theme';

interface ButtonProps {
  setTheme: (theme: string) => void;
}

function Button({ setTheme }: ButtonProps) {
  const theme = useContext(ContextTheme);

  console.log("Button theme:", theme);

  return (
    <button
      style={{ background: theme === "light" ? "red" : "green" }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Change Color
    </button>
  );
}

export default Button;
