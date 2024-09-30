import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import wxtLogo from '/wxt.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
 
      <div className='w-[900px] p-6 outline-none border-none'>
      <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h2 className='text-center font-semibold text-xl'>
            ChatGPT-Writer 
        </h2>
      </div>

  );
}

export default App;
