
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Book, BarChart, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Redirect to login if user is not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  const userName = user?.user_metadata.name || 'Student';
  
  const stats = [
    { label: "Study Sessions", value: "12", change: "+3", status: "positive" },
    { label: "Hours Studied", value: "28", change: "+5", status: "positive" },
    { label: "Tasks Completed", value: "18", change: "-2", status: "negative" },
    { label: "Upcoming Deadlines", value: "5", change: "0", status: "neutral" },
  ];
  
  const upcomingTasks = [
    { title: "Physics Assignment", date: "Today", priority: "high" },
    { title: "Math Chapter Review", date: "Tomorrow", priority: "medium" },
    { title: "Literature Essay", date: "May 22", priority: "medium" },
    { title: "History Research", date: "May 24", priority: "low" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Study<span className="text-indigo-600">Planner</span>
            </h1>
            <p className="text-sm text-slate-500">Study smarter, not harder</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center">
              <span className="text-sm font-medium text-slate-600 mr-2">Welcome, {userName}</span>
              <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium text-sm">
                {userName.charAt(0)}
              </div>
            </div>
            <Button 
              onClick={signOut} 
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-slate-800">Welcome back, {userName}</h2>
          <p className="text-slate-600">Here's an overview of your study progress</p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
                  <Badge 
                    className={`
                      ${stat.status === 'positive' ? 'bg-green-100 text-green-800' : ''}
                      ${stat.status === 'negative' ? 'bg-red-100 text-red-800' : ''}
                      ${stat.status === 'neutral' ? 'bg-gray-100 text-gray-800' : ''}
                    `}
                  >
                    {stat.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "overview"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("schedule")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "schedule"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Schedule
            </button>
            <button
              onClick={() => setActiveTab("subjects")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "subjects"
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Subjects
            </button>
          </nav>
        </div>
        
        {/* Content based on active tab */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-white shadow-sm">
                <CardHeader className="pb-1">
                  <CardTitle className="text-lg font-medium">Upcoming Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="divide-y">
                    {upcomingTasks.map((task, index) => (
                      <div key={index} className="py-3 flex justify-between items-center">
                        <div>
                          <p className="font-medium text-slate-800">{task.title}</p>
                          <p className="text-sm text-slate-500">{task.date}</p>
                        </div>
                        <Badge
                          variant="outline"
                          className={`
                            ${task.priority === 'high' ? 'border-red-500 text-red-500' : ''}
                            ${task.priority === 'medium' ? 'border-yellow-500 text-yellow-500' : ''}
                            ${task.priority === 'low' ? 'border-green-500 text-green-500' : ''}
                          `}
                        >
                          {task.priority}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm">
                <CardHeader className="pb-1">
                  <CardTitle className="text-lg font-medium">Weekly Progress</CardTitle>
                </CardHeader>
                <CardContent className="h-64 flex items-center justify-center border-t mt-4">
                  <p className="text-slate-500">Weekly progress chart will appear here</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              <Card className="bg-white shadow-sm">
                <CardHeader className="pb-1">
                  <CardTitle className="text-lg font-medium">Today's Schedule</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-indigo-50 rounded-md border border-indigo-100">
                      <div className="flex justify-between">
                        <p className="font-medium">Calculus</p>
                        <span className="text-sm text-slate-500">9:00 - 10:30 AM</span>
                      </div>
                      <p className="text-sm text-slate-600">Chapter 5: Integration</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-md border border-purple-100">
                      <div className="flex justify-between">
                        <p className="font-medium">Physics</p>
                        <span className="text-sm text-slate-500">1:00 - 2:30 PM</span>
                      </div>
                      <p className="text-sm text-slate-600">Electromagnetic Fields</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-md border border-blue-100">
                      <div className="flex justify-between">
                        <p className="font-medium">Literature</p>
                        <span className="text-sm text-slate-500">4:00 - 5:00 PM</span>
                      </div>
                      <p className="text-sm text-slate-600">Essay Drafting</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-sm">
                <CardHeader className="pb-1">
                  <CardTitle className="text-lg font-medium">Study Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>Take 5-minute breaks every 25 minutes of studying</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>Review your notes within 24 hours of taking them</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>Use active recall instead of passive re-reading</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <span>Stay hydrated and get enough sleep</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
        
        {activeTab === "schedule" && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-center text-slate-600">Your weekly schedule will appear here</p>
          </div>
        )}
        
        {activeTab === "subjects" && (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-center text-slate-600">Your subjects and courses will appear here</p>
          </div>
        )}
      </main>
      
      {/* Bottom Navigation for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around">
          <button className="p-4 text-indigo-600">
            <Book className="h-5 w-5 mx-auto" />
            <span className="text-xs">Tasks</span>
          </button>
          <button className="p-4 text-gray-500">
            <Calendar className="h-5 w-5 mx-auto" />
            <span className="text-xs">Calendar</span>
          </button>
          <button className="p-4 text-gray-500">
            <BarChart className="h-5 w-5 mx-auto" />
            <span className="text-xs">Stats</span>
          </button>
          <button className="p-4 text-gray-500">
            <Settings className="h-5 w-5 mx-auto" />
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
