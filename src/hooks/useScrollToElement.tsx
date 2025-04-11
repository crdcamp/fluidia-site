import { useRef, RefObject } from 'react';

export function useScrollToElement() {
  const elementRef = useRef<HTMLDivElement>(null);
  
  const scrollToElement = () => {
    elementRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };
  
  return { elementRef, scrollToElement };
}

// Generic scroll function that can be used with any ref
export const scrollToRef = (ref: RefObject<HTMLElement>) => {
  ref.current?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
};