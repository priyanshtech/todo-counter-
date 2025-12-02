import Counter from "./components/Counter";
import Todo from "./components/Todo";
import ThemeToggle from "./components/ThemeToggle"; 
import { useState, useEffect } from "react";

function Control({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg ${className}`}
    >
      {children}
    </button>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center gap-10 py-12 
      ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}
    >
      <ThemeToggle theme={theme} setTheme={setTheme} />

      <Counter theme={theme} />
      <Todo theme={theme} />
    </div>
  );
}
