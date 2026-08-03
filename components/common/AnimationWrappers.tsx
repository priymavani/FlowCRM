"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ANIMATION_VARIANTS } from "@/constants/animations";

interface AnimationWrapperProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export function FadeIn({ children, delay = 0, duration = 0.5, className, ...props }: AnimationWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ ease: "easeOut", duration, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface FadeUpProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export function FadeUp({ children, delay = 0, className, ...props }: FadeUpProps) {
  return (
    <motion.div
      variants={ANIMATION_VARIANTS.fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={delay}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={ANIMATION_VARIANTS.staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, duration = 0.5, className, ...props }: AnimationWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 300, damping: 25, delay, duration }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface SlideInProps extends AnimationWrapperProps {
  direction?: "left" | "right" | "up" | "down";
}

export function SlideIn({ children, direction = "left", delay = 0, duration = 0.6, className, ...props }: SlideInProps) {
  const directionMap = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: 50 },
    down: { x: 0, y: -50 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ ease: [0.25, 1, 0.5, 1], duration, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
