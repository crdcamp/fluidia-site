import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InitialOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // After component mounts, set a timer to hide the overlay
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 2000); // 2 seconds delay before fading starts

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: showOverlay ? 1 : 0 }}
      transition={{ duration: 1.5 }} // Fade out over 1.5 seconds
      className={`fixed inset-0 z-50 bg-black ${!showOverlay && 'pointer-events-none'}`}
    />
  );
};

export default InitialOverlay;