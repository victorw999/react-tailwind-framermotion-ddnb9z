import React from 'react';

import { motion, AnimatePresence } from 'framer-motion';

function RightPanel({ isOpen, setIsOpen }) {
  // if (!isOpen) return null;
  // if (!isOpen) return <></>;

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{
            // rotate: '0deg',
            // scale: 0,
            x: -500,
            opacity: 0,
          }}
          animate={{
            // rotate: '180deg',
            // scale: 1,
            x: 0,
            opacity: 1,
          }}
          exit={{
            x: -500,
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className="w-8/12 relative bg-gray-400 py-4 px-6"
        >
          {/* Your modal content goes here */}
          <p>This is the modal content.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="absolute bg-blue-500 text-white hover:bg-blue-700 font-bold rounded-none right-3 top-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            X
          </motion.button>
        </motion.div>
      ) : (
        ''
      )}
    </AnimatePresence>
  );
}

export default RightPanel;
