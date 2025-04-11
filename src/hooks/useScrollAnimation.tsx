import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, Variants } from 'framer-motion';

interface AnimationProps {
  threshold?: number;
  triggerOnce?: boolean;
  variants?: Variants;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  triggerOnce = true,
  variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }
}: AnimationProps = {}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return { ref, controls, variants };
};

export const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export const AnimatedElement = ({ children, variants, className }: { 
  children: React.ReactNode, 
  variants?: Variants,
  className?: string
}) => {
  const { ref, controls, variants: defaultVariants } = useScrollAnimation({
    variants: variants
  });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};