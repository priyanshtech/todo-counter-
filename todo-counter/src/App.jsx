import Counter from "./components/Counter";
import Todo from "./components/Todo";
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
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-12">
     
      <Counter />
      <Todo />

    </div>
  );
}
