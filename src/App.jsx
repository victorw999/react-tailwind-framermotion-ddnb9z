import { useState } from 'react';
import './App.css';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <small>tutorial: https://youtu.be/znbCa4Rr054?si=1AF_KgTeqa4AkJ81</small>
      <p className="text-red">isOpen: {isOpen.toString()} </p>
      <div className="flex h-screen w-screen pr-20 border-2 border-red-500 border-solid  m-auto">
        <LeftPanel isOpen={isOpen} setIsOpen={setIsOpen} />
        <RightPanel isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default App;
