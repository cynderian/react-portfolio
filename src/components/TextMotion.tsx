import React from 'react';
import { motion } from "motion/react";

interface TextMotionProps {
  text: string;
  delay: number;
}

export default function TextMotion({ text, delay=0 }: TextMotionProps) {
  return <motion.h1
    initial = {{ x: -25, opacity: 0}}
    animate = {{ x: 0, opacity: 1}}
    transition={{ duration: 1, ease: "easeInOut", delay: delay }}
  >
    {text}
  </motion.h1>
}