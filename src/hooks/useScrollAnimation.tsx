import React, { useEffect } from 'react';
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

// Animation presets
export const animations = {
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  },
  
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 } 
    }
  },
  
  fadeInDelayed: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8, 
        delay: 0.3,
        scale: {
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      } 
    }
  },
  
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  },
  
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  },
  
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }
};

// For backward compatibility
export const { fadeUp, fadeIn, fadeInDelayed, staggerContainer, staggerItem, scaleIn } = animations;

interface AnimatedElementProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.RefObject<HTMLDivElement>;
}

export const AnimatedElement = React.forwardRef<HTMLDivElement, AnimatedElementProps>(({ 
  children, 
  variants, 
  className,
  style 
}, forwardedRef) => {
  const controls = useAnimation();
  const [internalRef, inView] = useInView({ 
    threshold: 0.1,
    triggerOnce: true 
  });
  
  // Combine the refs
  const ref = React.useCallback((node: HTMLDivElement | null) => {
    // Set the internal ref for intersection observer
    if (typeof internalRef === 'function') {
      internalRef(node);
    }
    
    // Set the forwarded ref if provided
    if (forwardedRef) {
      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else {
        (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    }
  }, [internalRef, forwardedRef]);
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants || animations.fadeUp}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
});