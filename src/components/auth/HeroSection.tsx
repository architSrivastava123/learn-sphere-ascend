
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="hidden md:flex w-1/2 bg-gradient-to-br from-indigo-600 to-violet-600 justify-center items-center p-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%">
            <pattern
              id="pattern-circles"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
            >
              <circle id="pattern-circle" cx="10" cy="10" r="1.5" fill="#fff"></circle>
            </pattern>
            <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
      </div>
      
      <div className="relative z-10 max-w-md">
        <div className="text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mb-8"
          >
            <div className="mx-auto w-24 h-24 bg-white/20 rounded-xl p-4 backdrop-blur-sm mb-6">
              <svg 
                viewBox="0 0 24 24" 
                className="w-full h-full text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                <path d="M8 7h6"></path>
                <path d="M8 11h8"></path>
                <path d="M8 15h6"></path>
              </svg>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
              Your Personalized Study Assistant
            </h2>
            <p className="text-white/90 text-md md:text-lg max-w-sm mx-auto">
              Organize your study schedule, track your progress, and achieve your academic goals with our AI-powered study planner.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-xs mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white">85%</div>
                <div className="text-white/80 text-sm">Increase in study efficiency</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-white">10k+</div>
                <div className="text-white/80 text-sm">Students already using</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="flex justify-center mt-8 space-x-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <div className="h-1 w-8 rounded-full bg-white/80" />
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="h-1 w-1 rounded-full bg-white/30"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
