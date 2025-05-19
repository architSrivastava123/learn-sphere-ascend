
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, ListTodo, BookOpen, Settings } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Study<span className="text-indigo-600">Planner</span>
          </h1>
          <Button 
            onClick={signOut} 
            variant="outline"
            className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
          >
            Sign Out
          </Button>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 font-bold text-xl">{user?.user_metadata.name?.charAt(0) || 'S'}</span>
                </div>
                <div>
                  <h2 className="font-semibold text-lg">{user?.user_metadata.name || 'Student'}</h2>
                  <p className="text-sm text-slate-500">{user?.email}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Calendar
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <ListTodo className="mr-2 h-4 w-4" />
                  Tasks
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Courses
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="progress">Progress</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Today's Tasks</CardTitle>
                      <CardDescription>Complete your tasks for today</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-md">
                          <div>
                            <p className="font-medium">Math Assignment</p>
                            <p className="text-sm text-slate-500">Due today at 5:00 PM</p>
                          </div>
                          <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-md">
                          <div>
                            <p className="font-medium">Physics Reading</p>
                            <p className="text-sm text-slate-500">Due today at 8:00 PM</p>
                          </div>
                          <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Study Time</CardTitle>
                      <CardDescription>Your study sessions this week</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-center">
                          <p className="text-xl font-bold text-indigo-600">12</p>
                          <p className="text-xs text-slate-500">Hours</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-indigo-600">5</p>
                          <p className="text-xs text-slate-500">Subjects</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xl font-bold text-indigo-600">8</p>
                          <p className="text-xs text-slate-500">Sessions</p>
                        </div>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2.5">
                        <div className="bg-indigo-600 h-2.5 rounded-full w-2/3"></div>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">67% of weekly goal completed</p>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Exams</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                        <div>
                          <h3 className="font-medium">Biology Midterm</h3>
                          <p className="text-sm text-slate-500">Chapter 5-8</p>
                        </div>
                        <div className="text-right">
                          <p className="text-indigo-600 font-medium">May 25, 2025</p>
                          <p className="text-sm text-slate-500">10:00 AM</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                        <div>
                          <h3 className="font-medium">Chemistry Quiz</h3>
                          <p className="text-sm text-slate-500">Organic Chemistry</p>
                        </div>
                        <div className="text-right">
                          <p className="text-indigo-600 font-medium">May 27, 2025</p>
                          <p className="text-sm text-slate-500">2:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="schedule">
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Schedule</CardTitle>
                    <CardDescription>Your planned study sessions for the week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-slate-500 py-8">Schedule content will appear here</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="progress">
                <Card>
                  <CardHeader>
                    <CardTitle>Study Progress</CardTitle>
                    <CardDescription>Track your learning progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-slate-500 py-8">Progress tracking will appear here</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
