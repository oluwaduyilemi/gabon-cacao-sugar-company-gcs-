import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30, 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      damping: 30,    
      stiffness: 60,   
      mass: 0.8,       
    }
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, 
      delayChildren: 0.3,    
    },
  },
};