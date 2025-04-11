import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InitialOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: showOverlay ? 1 : 0 }}
      transition={{ duration: 1.5}}
      className={`fixed inset-0 z-50 bg-black ${!showOverlay && 'pointer-events-none'}`}
    />
  );
};

export default InitialOverlay;