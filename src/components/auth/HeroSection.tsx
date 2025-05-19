
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
          >
            <svg
              className="w-48 h-48 mx-auto mb-6"
              viewBox="0 0 900 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M637.95,193.65h-1.55c-78.02,0-158.93,16.5-207.09,93.13-40.73,64.83-26.27,147.32-4.06,204.5a393.62,393.62,0,0,0,32.2,59.15c3.55,5.36,7.06,10.26,10.39,14.85q9.54,13.11,19.43,25.94a12.86,12.86,0,0,0,11.8,5.51c2.59-.26,5.25-1.55,6.32-4a8.4,8.4,0,0,0,.94-3.4q2.08-16.31,4-32.64c1.66-13.82,3.11-27.67,4.77-41.49q1.52-12.78,3.04-25.54a255.62,255.62,0,0,1,6.81-35.32c9.71-36.65,28.31-73.75,65.6-84.6,37.51-10.93,89.05.71,122.11-17.78,30.59-17.12,42.09-56.85,43.1-92.36.97-36.23-9.11-65.38-40.83-82.43C696.43,196.04,667,193.71,637.95,193.65Z"
                fill="#cccbd9"
              />
              <path
                d="M570,245H312a9.01,9.01,0,0,0-9,9V444a9.01,9.01,0,0,0,9,9H570a9.01,9.01,0,0,0,9-9V254A9.01,9.01,0,0,0,570,245ZM335,273h212a2,2,0,0,1,0,4H335a2,2,0,0,1,0-4Zm0,14h84a2,2,0,0,1,0,4H335a2,2,0,0,1,0-4Zm0,14h212a2,2,0,0,1,0,4H335a2,2,0,0,1,0-4ZM335,315h55a2,2,0,0,1,0,4H335a2,2,0,0,1,0-4ZM335,329h87a2,2,0,0,1,0,4H335a2,2,0,0,1,0-4Zm0,14h212a2,2,0,0,1,0,4H335a2,2,0,0,1,0-4Z"
                fill="#ffffff"
              />
              <path
                d="M549.12,422c0,1.1-.9,2-2,2H335c-1.1,0-2-.9-2-2s.9-2,2-2h212.12c1.1,0,2,.9,2,2Z"
                fill="#ffffff"
              />
              <path
                d="M487,394c0,1.1-.9,2-2,2h-40c-1.1,0-2-.9-2-2s.9-2,2-2h40c1.1,0,2,.9,2,2Z"
                fill="#ffffff"
              />
              <path
                d="M431,394c0,1.1-.9,2-2,2H335c-1.1,0-2-.9-2-2s.9-2,2-2h94c1.1,0,2,.9,2,2Z"
                fill="#ffffff"
              />
              <path
                d="M422,408c0,1.1-.9,2-2,2H335c-1.1,0-2-.9-2-2s.9-2,2-2h85c1.1,0,2,.9,2,2Z"
                fill="#ffffff"
              />
              <path
                d="M549,408c0,1.1-.9,2-2,2H434c-1.1,0-2-.9-2-2s.9-2,2-2h113c1.1,0,2,.9,2,2Z"
                fill="#ffffff"
              />
              <path
                d="M409.59,316h-1.52c32.45,27.17,36.15,75.8,29.46,117.32a285.18,285.18,0,0,1-14.9,55.74c-2.21,5.87-4.51,11.71-7.18,17.38s-5.65,11.3-9.23,16.47c-1.54,2.21-3.15,4.37-4.81,6.5a12.86,12.86,0,0,0,.18,13.01c1.49,2.13,3.81,3.91,6.59,3.28a8.4,8.4,0,0,0,3.17-1.5q13.92-8.73,27.71-17.62c11.3-7.99,22.33-16.3,33.62-24.29q10.35-7.34,20.68-14.72a255.62,255.62,0,0,1,29.06-18.82c32.78-18.35,70.87-31.69,106.99-14.11,36.35,17.67,59.62,63.78,87.33,89.25,25.67,23.55,66.26,23.5,98.74,11.46,33.57-12.51,57.95-37.05,61.35-73.22,4.03-42.91-12.58-82.28-50.83-104.25C775.57,325.15,718.3,316.05,409.59,316Z"
                fill="#ffffff"
                opacity="0.1"
              />
              <path
                d="M745.38,262.1l-19.06-9.79-8.79-25.63L695.25,242.87l-19.58,10.6,18.83,17.63,5.35,25.51,18.29-18.13,26.42-1.33L737.21,251.19Z"
                fill="#f0f9ff"
              />
              <ellipse cx="441" cy="511.5" rx="236" ry="13.5" fill="#ffffff" opacity="0.3" />
              <path
                d="M354,316c0,17.12-13.88,31-31,31s-31-13.88-31-31,13.88-31,31-31S354,298.88,354,316Z"
                fill="#6366f1"
              />
              <path
                d="M301.8,307.17l9.58,7.91,10.93,9.02a2,2,0,0,0,2.76-.16l18.95-20.43"
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              />
              <path
                d="M490.78,124.31l5.38-83.29a7.01,7.01,0,0,1,6.98-6.54H605.84a7.01,7.01,0,0,1,6.98,6.54l5.38,83.29a7.01,7.01,0,0,1-6.98,7.47H497.76A7.01,7.01,0,0,1,490.78,124.31Z"
                fill="#6366f1"
              />
              <path
                d="M516,73c0,1.1-.9,2-2,2h-22a2,2,0,0,1,0-4h22C515.1,71,516,71.9,516,73Z"
                fill="#ffffff"
              />
              <path
                d="M621,72.99a7.52,7.52,0,0,1-2.02,5.52c-2.01,1.86-5.08,2.28-7.7,1.45a9.25,9.25,0,0,1-3.47-2.37,2,2,0,0,1,2.99-2.66,5.25,5.25,0,0,0,1.99,1.3c1.36,.41,2.95,.16,3.97-.77a3.52,3.52,0,0,0,.23-4.92,3.83,3.83,0,0,0-3.21-1.1,11.5,11.5,0,0,0-3.3,1.09,2,2,0,1,1-1.97-3.48,15.49,15.49,0,0,1,4.45-1.47,7.83,7.83,0,0,1,6.54,2.26A7.57,7.57,0,0,1,621,72.99Z"
                fill="#ffffff"
              />
              <path
                d="M575,102a21,21,0,1,1,21,21A21,21,0,0,1,575,102Z"
                fill="#ffffff"
              />
              <path
                d="M601,102a5,5,0,1,1-5-5A5,5,0,0,1,601,102Z"
                fill="#8b5cf6"
              />
              <path
                d="M516,89c0,1.1-.9,2-2,2h-22a2,2,0,0,1,0-4h22C515.1,87,516,87.9,516,89Z"
                fill="#ffffff"
              />
              <path
                d="M516,105c0,1.1-.9,2-2,2h-22a2,2,0,0,1,0-4h22C515.1,103,516,103.9,516,105Z"
                fill="#ffffff"
              />
              <path
                d="M546.27,203.38L495.94,177.01a3,3,0,0,1-1.37-3.38l2.04-7.11a3,3,0,0,1,3.96-1.92l54.84,21.36a3,3,0,0,1,1.66,3.98l-3.99,10.4a3,3,0,0,1-2.96,1.93A3.09,3.09,0,0,1,546.27,203.38Z"
                fill="#8b5cf6"
              />
              <path
                d="M561.62,207.91l-61.78-30.02,5.93-12.2,61.78,30.02Z"
                fill="#f0f9ff"
              />
            </svg>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
              Personalized Study Planner
            </h2>
            <p className="text-white/90 text-md md:text-lg max-w-sm mx-auto">
              Organize your study schedule, track your progress, and achieve your academic goals with our AI-powered study planner.
            </p>
          </motion.div>
          
          <motion.div
            className="flex justify-center mt-8 space-x-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-white/30"
              />
            ))}
            <div className="h-2 w-6 md:h-3 md:w-10 rounded-full bg-white/80" />
            {[5, 6].map((i) => (
              <div 
                key={i} 
                className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-white/30"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
