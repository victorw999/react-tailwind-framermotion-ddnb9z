import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MyComponent } from './MyComponent';

function LeftPanel({ isOpen, setIsOpen }) {
  return (
    <div className="w-4/12 bg-gray-200 flex flex-col items-center justify-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9, rotate: '3deg' }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-none"
        onClick={() => setIsOpen(!isOpen)}
        layout
      >
        {isOpen ? 'Close Modal' : 'Open Modal'}
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isOpen ? (
          <motion.div
            key="animated_box"
            initial={{
              rotate: '0deg',
              scale: 0,
            }}
            animate={{
              rotate: '360deg',
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            exit={{ rotate: '0deg', scale: 0 }}
            transition={{
              duration: 1,
              ease: 'backInOut',
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            className="bg-blue-300 w-16 mx-0 my-10 text-white font-bold py-2 px-4  rounded-none aspect-square  flex align-center justify-center text-center "
          >
            box
          </motion.div>
        ) : (
          ''
        )}
      </AnimatePresence>
      {/* <MyComponent isVisible={isOpen} /> */}
    </div>
  );
}

export default LeftPanel;
