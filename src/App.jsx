import { useEffect, useRef, useState } from 'react';
import './App.css';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import { motion, useInView } from 'framer-motion'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    console.log('===> red box is in view: ', isInView)
  }, [isInView])
  return (
    <div>
      <small>tutorial: https://youtu.be/znbCa4Rr054?si=1AF_KgTeqa4AkJ81</small>
      <p className="text-red">isOpen: {isOpen.toString()} </p>
      <div className="flex h-[40rem] min-w-[40rem]  border-2 border-red-500 border-solid  m-auto">
        <LeftPanel isOpen={isOpen} setIsOpen={setIsOpen} />
        <RightPanel isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="filler h-[150vh] bg-pink-100"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className=' flex h-[40rem] bg-gray-500 border-[5rem] border-black border-solid'>
        <span className="text-white text-xl bold text-center w-full">reveal while in view</span>
      </motion.div>

      <div ref={ref}
        className="bg-red-500 h-[40rem] transition duration-1000"></div>
    </div>
  );
}

export default App;
