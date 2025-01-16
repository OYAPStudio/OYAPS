"use client"
import { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let rafId: number;
    
    const moveCursor = (e: MouseEvent) => {
      rafId = requestAnimationFrame(() => {
        if (cursor) {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        }
      });
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={cursorRef} className={styles.cursor} aria-hidden="true">
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 16 16" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M16 0L8 16L0 0L8 4L16 0Z" 
          fill="#00f5ff"
        />
      </svg>
    </div>
  );
};

export default CustomCursor;