import { motion, AnimatePresence } from 'framer-motion';

export const MyComponent = ({ isVisible }) => (
  <AnimatePresence mode="popLayout">
    {isVisible && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-red-500 w-16 mx-0 my-10 text-white font-bold py-2 px-4  rounded-none aspect-square  flex align-center justify-center text-center "
      >
        {' '}
        red{' '}
      </motion.div>
    )}
  </AnimatePresence>
);
