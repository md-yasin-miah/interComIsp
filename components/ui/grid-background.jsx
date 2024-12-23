"use client";
import React from "react";
import { motion } from "framer-motion";

export const GridBackground = ({
  animationDot=true
}) => {
  const rows = 10;
  const cols = 10;
  
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-primary-pattern opacity-30 dark:opacity-90" />
      
      {/* Animated Dots */}
      {animationDot&&
      <div className="absolute inset-0">
        {Array.from({ length: rows * cols }).map((_, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          
          return (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 1, 0],
                opacity: [0, 0.6, 0.6, 0]
              }}
              transition={{
                duration: 4,
                delay: (row + col) * 0.1,
                repeat: Infinity,
                repeatDelay: Math.random() * 2
              }}
              className="absolute w-1.5 h-1.5 bg-gradient-to-r from-primary to-secondary dark:from-white dark:to-white rounded-full"
              style={{
                top: `${(row + 1) * (100 / (rows + 1))}%`,
                left: `${(col + 1) * (100 / (cols + 1))}%`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          );
        })}
      </div>
      }
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
    </div>
  );
}; 