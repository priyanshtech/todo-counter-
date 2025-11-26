import Counter from "./components/Counter";
import Todo from "./components/Todo";

export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-12">
      <Counter />
      <Todo />
    </div>
  );
}
