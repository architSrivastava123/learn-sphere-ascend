
import { useState } from "react";
import AuthForm from "../components/auth/AuthForm";
import HeroSection from "../components/auth/HeroSection";
import { AnimatePresence, motion } from "framer-motion";

const Index = () => {
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const toggleAuthMode = () => {
    setAuthMode(authMode === "login" ? "signup" : "login");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-12"
      >
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2 tracking-tight">
              Study<span className="text-indigo-600">Planner</span>
            </h1>
            <p className="text-slate-600 text-sm md:text-base">
              Study Smarter, Not Harder
            </p>
          </div>
          
          <AnimatePresence mode="wait">
            <AuthForm 
              key={authMode} 
              authMode={authMode} 
              onToggleMode={toggleAuthMode} 
            />
          </AnimatePresence>
        </div>
      </motion.div>
      
      <HeroSection />
    </div>
  );
};

export default Index;
