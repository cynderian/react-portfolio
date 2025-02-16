import React from 'react';
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

export default function TextMotion({ text }: { text: string }) {
  return <motion.h1
    initial = {{ x: -25, opacity: 0}}
    animate = {{ x: 0, opacity: 1}}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    {text}
  </motion.h1>
}