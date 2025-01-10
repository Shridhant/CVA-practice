"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface RotateTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function Words({
  words,
  interval = 3000,
  className = "",
}: RotateTextProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className={`inline-block ${className}`}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
}
