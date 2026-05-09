import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logoImg from "@/assets/logo.png";

export const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while preloader is active
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setLoading(false);
      // Wait for the zoom animation to finish before enabling scroll
      setTimeout(() => {
        document.body.style.overflow = "unset";
      }, 1000); 
    }, 2200);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink overflow-hidden"
        >
          {/* Logo Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
            exit={{ scale: 25, opacity: 0 }}
            transition={{ 
              duration: 1, 
              ease: "easeOut",
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              exit: { duration: 0.8, ease: "easeInOut" } 
            }}
            className="flex flex-col items-center relative z-10"
          >
            {/* The Logo itself */}
            <img 
              src={logoImg} 
              alt="Ice Park Logo" 
              className="w-32 md:w-44 drop-shadow-xl relative z-10" 
            />
          </motion.div>

          {/* Progress Elements that fade out cleanly before the zoom */}
          <motion.div 
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
            className="absolute bottom-1/4 flex flex-col items-center"
          >
            {/* Sleek Progress Bar */}
            <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20"
              />
            </div>
            
            {/* Subtle Loading Text */}
            <motion.span 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-4 text-[10px] tracking-[0.4em] uppercase text-primary/80 font-semibold"
            >
              Crafting Joy
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
