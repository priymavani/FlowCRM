/**
 * Animation design tokens from DESIGN.md and PROJECT.md
 */

// GSAP Standard Section Scroll Reveal Settings
export const SCROLL_REVEAL_DEFAULTS = {
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.15,
};

// Framer Motion Transition Presets
export const TRANSITIONS = {
  default: { type: "spring", stiffness: 300, damping: 30 },
  smooth: { ease: [0.25, 1, 0.5, 1], duration: 0.8 }, // power3.out equivalent
  hover: { type: "spring", stiffness: 400, damping: 25 },
};

// Reusable Framer Motion Variants
export const ANIMATION_VARIANTS = {
  // Fade Up Reveal for single items or staggered lists
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        ...TRANSITIONS.smooth,
        delay: custom * 0.15,
      },
    }),
  },

  // Staggered Container for child lists
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  },

  // Premium Hover Scale for Cards (1 -> 1.03)
  cardHover: {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.03,
      y: -4,
      transition: TRANSITIONS.hover,
    },
  },

  // Premium Hover translation for Buttons (TranslateY -3px)
  buttonHover: {
    rest: { y: 0 },
    hover: {
      y: -3,
      transition: TRANSITIONS.hover,
    },
  },

  // Premium Rotate for Icons (Rotate 6 degrees)
  iconHover: {
    rest: { rotate: 0 },
    hover: {
      rotate: 6,
      transition: TRANSITIONS.hover,
    },
  },

  // Mobile Menu Drawer transitions
  mobileMenu: {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
        duration: 0.6,
      },
    },
    exit: {
      x: "100%",
      transition: {
        ease: [0.7, 0, 0.84, 0], // easeInExpo
        duration: 0.4,
      },
    },
  },

  // Mobile Menu Backdrop
  backdrop: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  },
};
