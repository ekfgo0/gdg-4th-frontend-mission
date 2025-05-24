import { useState } from 'react';
import Button from './Button'; // 같은 src 폴더에 있어야 함

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white text-black">
      <h1 className="text-4xl font-bold mb-8">GDG 카운터 예제</h1>

      <div className="text-6xl font-bold mb-8">{count}</div>

      <div className="flex space-x-4 mb-8">
        {[1, 10, 100].map((val) => (
          <Button
            key={val}
            value={val}
            isActive={step === val}
            onClick={setStep}
          />
        ))}
      </div>

      <button
        onClick={() => setCount(count + step)}
        className="px-8 py-3 rounded-full bg-blue-500 text-white font-semibold text-xl hover:bg-blue-600 transition"
      >
        증가
      </button>
    </div>
  );
}

export default App;
