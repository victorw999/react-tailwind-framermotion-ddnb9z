import React, { useState } from 'react';
import { motion, MotionConfig, useAnimationControls, AnimatePresence } from 'framer-motion';
import { MyComponent } from './MyComponent';

function LeftPanel({ isOpen, setIsOpen }) {
  const flipControls = useAnimationControls()
  const handleFlipClick = () => {
    flipControls.start('flip')
  }
  return (
    <div className="w-4/12 bg-gray-200 flex flex-col items-center justify-center">
      <MotionConfig transition={{
        duration: 0.5, ease: "easeInOut"
      }}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9, rotate: '3deg' }}
          className={` hover:bg-blue-700 text-white 
          font-bold py-2 px-4  rounded-none ${isOpen ? "bg-red-500" : "bg-blue-500"}`  }
          onClick={() => setIsOpen(!isOpen)}
          layout
        >
          {isOpen ? 'Close Modal' : 'Open Modal'}
        </motion.button>

        <button onClick={handleFlipClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-none my-4">Flip it</button>

        <AnimatePresence mode="popLayout">
          {isOpen ? (
            <motion.div
              whileHover="randomTriggerText"
              variants={{
                initial: {
                  rotate: '0deg',
                  scale: 0,
                },
                // animate: {
                //   rotate: '360deg',
                //   scale: 1,
                //   y: [0, 150, -150, -150, 0],
                // },
                exit: { rotate: '0deg', scale: 0 },
                randomTriggerText: {
                  duration: 0.1,
                  x: [0, 15, -15, -15, 0],
                },
                flip: {
                  rotate: '360deg',
                  scale: 1,
                  y: [0, 150, -150, -150, 0],
                }
              }}

              initial="initial"
              animate={flipControls} 
              className="bg-blue-300 w-16 mx-0 my-10 text-white font-bold py-2 px-4  rounded-none aspect-square  flex align-center justify-center text-center "
            >
              box
            </motion.div>
          ) : (
            ''
          )}
        </AnimatePresence>
      </MotionConfig>
      {/* <MyComponent isVisible={isOpen} /> */}
    </div>
  );
}

export default LeftPanel;
