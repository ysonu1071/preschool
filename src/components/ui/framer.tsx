import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'scale-in' | 'bounce-in';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  duration = 500,
  threshold = 0.1,
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Create the observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0) scale(1)';
              if (once) {
                observerRef.current?.unobserve(element);
              }
            }, delay);
          } else if (!once) {
            element.style.opacity = '0';
            if (animation === 'fade-in-up') {
              element.style.transform = 'translateY(20px)';
            } else if (animation === 'scale-in') {
              element.style.transform = 'scale(0.95)';
            } else if (animation === 'bounce-in') {
              element.style.transform = 'scale(0.8)';
            }
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    // Set initial styles
    element.style.opacity = '0';
    element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
    
    if (animation === 'fade-in-up') {
      element.style.transform = 'translateY(20px)';
    } else if (animation === 'scale-in') {
      element.style.transform = 'scale(0.95)';
    } else if (animation === 'bounce-in') {
      element.style.transform = 'scale(0.8)';
    }

    // Start observing
    observerRef.current.observe(element);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [animation, delay, duration, once, threshold]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
};

export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  containerDelay?: number;
  animation?: 'fade-in' | 'fade-in-up' | 'scale-in' | 'bounce-in';
}> = ({
  children,
  className,
  staggerDelay = 100,
  containerDelay = 0,
  animation = 'fade-in-up',
}) => {
  const childrenArray = React.Children.toArray(children);
  
  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <AnimatedElement 
          key={index} 
          animation={animation} 
          delay={containerDelay + (index * staggerDelay)}
        >
          {child}
        </AnimatedElement>
      ))}
    </div>
  );
};
