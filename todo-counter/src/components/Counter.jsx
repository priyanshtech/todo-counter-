import {useState} from "react";

function Control({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`
  px-4 py-2 rounded-lg text-xl font-bold
  flex items-center justify-center
  transition-transform duration-150 active:scale-75
  ${className}
`}

    >
      {children}
    </button>
  );
}

export default function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl w-80">
      <h2 className="text-3xl font-bold mb-4 text-center">Counter</h2>
      <p className="text-center text-3xl font-semibold mb-4">{count}</p>
      <div className="flex justify-center gap-4">
        <Control
            onClick={() => setCount(count + 1)}
            className="bg-green-600 "
                >
             +
            </Control>

        <Control onClick={()=> setCount(x=>x>0? x-1:x)}
            className="bg-green-600">-</Control>
      </div>
    </div>
  );
}
