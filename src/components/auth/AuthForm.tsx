
import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, User, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface AuthFormProps {
  authMode: "login" | "signup";
  onToggleMode: () => void;
}

const AuthForm = ({ authMode, onToggleMode }: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success(
        authMode === "login" 
          ? "Successfully logged in!" 
          : "Account created successfully!"
      );
    }, 1500);
  };

  const formVariants = {
    hidden: { opacity: 0, x: authMode === "login" ? -20 : 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={formVariants}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">
          {authMode === "login" ? "Welcome back" : "Create account"}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {authMode === "signup" && (
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-700">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="pl-10 bg-slate-50 border-slate-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
            </div>
          )}
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="pl-10 bg-slate-50 border-slate-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-slate-700">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={authMode === "login" ? "••••••••" : "Min. 8 characters"}
                className="pl-10 pr-10 bg-slate-50 border-slate-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
          
          {authMode === "login" && (
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-indigo-600 hover:text-indigo-800"
              >
                Forgot password?
              </button>
            </div>
          )}
          
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                <span>{authMode === "login" ? "Logging in..." : "Creating account..."}</span>
              </div>
            ) : (
              <span>{authMode === "login" ? "Sign In" : "Create My Study Plan"}</span>
            )}
          </Button>
          
          <div className="text-center pt-2">
            <p className="text-sm text-slate-600">
              {authMode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={onToggleMode}
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                {authMode === "login" ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default AuthForm;
