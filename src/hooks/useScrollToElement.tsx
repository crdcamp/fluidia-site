import { useRef } from 'react';

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