
import { useState, useEffect } from "react";
import AuthForm from "../components/auth/AuthForm";
import HeroSection from "../components/auth/HeroSection";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Redirect to dashboard if user is already authenticated
  useEffect(() => {
    if (user && !loading) {
      navigate('/dashboard');
    }
  }, [user, loading, navigate]);

  const toggleAuthMode = () => {
    setAuthMode(authMode === "login" ? "signup" : "login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50">
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
