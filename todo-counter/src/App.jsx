import Counter from "./components/Counter";
import Todo from "./components/Todo";
import ThemeToggle from "./components/ThemeToggle"; 
import { useContext } from "react";
import {ThemeContext} from "./context/ThemeProvider";

export default function App() {
  const { theme ,num, handleNum} = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col items-center gap-10 py-12 
      ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}
    ><h1 className="text-5xl font-bold mb-8">TASK MANAGER</h1>
    <button onClick={handleNum} className="border-2 border-2 px-2 rounded-lg">increase me {num}</button>
      <ThemeToggle/>
      <Counter/>
      <Todo/>
    </div>
  );
}
