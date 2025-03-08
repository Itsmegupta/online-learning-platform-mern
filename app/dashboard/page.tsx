"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Trophy, Clock, Calendar } from "lucide-react"
import { Chart } from "@/components/ui/chart"
import { ResponsiveContainer,BarChart,AreaChart, Area, Bar, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"

// Add this import at the top
import { ArrowRight } from "lucide-react"

// Define the data types explicitly
interface ActivityData {
  day: string;
  hours: number;
}
interface ProgressData {
  month: string;
  JavaScript: number;
  Python: number;
  React: number;
}
const activityData: ActivityData[] = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 1.8 },
  { day: "Wed", hours: 3.2 },
  { day: "Thu", hours: 2.0 },
  { day: "Fri", hours: 2.8 },
  { day: "Sat", hours: 4.5 },
  { day: "Sun", hours: 3.9 },
];

const progressData: ProgressData[] = [
  { month: "Jan", JavaScript: 30, Python: 20, React: 10 },
  { month: "Feb", JavaScript: 45, Python: 30, React: 20 },
  { month: "Mar", JavaScript: 55, Python: 45, React: 35 },
  { month: "Apr", JavaScript: 65, Python: 60, React: 50 },
  { month: "May", JavaScript: 75, Python: 70, React: 65 },
  { month: "Jun", JavaScript: 85, Python: 75, React: 75 },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [userProgress, setUserProgress] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching user progress
    const fetchUserProgress = async () => {
      try {
        setIsLoading(true)
        // In a real app, this would be an API call
        // const response = await fetch('/api/user/progress')
        // const data = await response.json()

        // For now, use mock data
        const mockData = {
          enrolledCourses: [
            {
              course: {
                title: "JavaScript Fundamentals",
                slug: "javascript-fundamentals",
                image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070&auto=format&fit=crop",
              },
              progress: 65,
            },
            {
              course: {
                title: "React Development",
                slug: "react-development",
                image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop",
              },
              progress: 30,
            },
            {
              course: {
                title: "Python for Data Science",
                slug: "python-data-science",
                image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2074&auto=format&fit=crop",
              },
              progress: 15,
            },
          ],
          streak: {
            current: 12,
          },
        }

        setUserProgress(mockData)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching user progress:", error)
        setIsLoading(false)
      }
    }

    fetchUserProgress()
  }, [])

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Track your progress and continue learning.</p>
        </div>
        <Button asChild>
          <Link href="/courses">Browse Courses</Link>
        </Button>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid grid-cols-3 md:grid-cols-5 w-full md:w-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses">My Courses</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Courses in Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-2xl font-bold">{userProgress?.enrolledCourses?.length || 0}</span>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800">
                    +1 this week
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 border-purple-200 dark:border-purple-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Completed Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Code className="h-5 w-5 text-purple-500 mr-2" />
                    <span className="text-2xl font-bold">24</span>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800">
                    +5 this week
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Certificates Earned</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 text-amber-500 mr-2" />
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <Badge className="bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800">
                    +1 this month
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-2xl font-bold">{userProgress?.streak?.current || 0} days</span>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
                  >
                    Active
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
                <CardDescription>Your learning hours for the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <Chart>
                    <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="hours" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                    </ResponsiveContainer>
                  </Chart>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Your progress across different technologies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <Chart>
                    <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="JavaScript" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="Python" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="React" stackId="1" stroke="#ffc658" fill="#ffc658" />
                  </AreaChart>
                    </ResponsiveContainer>
                  </Chart>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Courses</CardTitle>
                <CardDescription>Continue where you left off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {isLoading ? (
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex flex-col md:flex-row gap-4 items-start md:items-center animate-pulse"
                        >
                          <div className="w-full md:w-1/4 aspect-video md:aspect-auto md:h-24 bg-muted rounded-md"></div>
                          <div className="flex-1 space-y-2 w-full">
                            <div className="h-4 bg-muted rounded-full w-3/4"></div>
                            <div className="h-2 bg-muted rounded-full w-full"></div>
                            <div className="flex justify-between text-sm">
                              <div className="h-3 bg-muted rounded-full w-1/4"></div>
                              <div className="h-3 bg-muted rounded-full w-1/4"></div>
                            </div>
                          </div>
                          <div className="h-9 bg-muted rounded-md w-24"></div>
                        </div>
                      ))}
                    </div>
                  ) : userProgress?.enrolledCourses?.length > 0 ? (
                    userProgress.enrolledCourses.map((course: any, index: number) => (
                      <div key={index} className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                        <div className="w-full md:w-1/4 aspect-video md:aspect-auto md:h-24 bg-muted rounded-md relative overflow-hidden">
                          {course.course.image && (
                            <img
                              src={course.course.image || "/placeholder.svg"}
                              alt={course.course.title}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                            <h3 className="font-semibold">{course.course.title}</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Clock className="h-4 w-4 mr-1" />
                              Last accessed {index === 0 ? "2 days ago" : index === 1 ? "1 day ago" : "4 days ago"}
                            </div>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                          <div className="flex justify-between text-sm">
                            <span>{course.progress}% complete</span>
                            <span>Module {Math.ceil(course.progress / 20)} of 6</span>
                          </div>
                        </div>
                        <Button size="sm" asChild>
                          <Link href={`/courses/${course.course.slug}`}>Continue</Link>
                        </Button>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground mb-4">You haven't enrolled in any courses yet.</p>
                      <Button asChild>
                        <Link href="/courses">Browse Courses</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Add this section in the "overview" TabsContent after the "Current Courses" card */}
          <Card>
            <CardHeader>
              <CardTitle>Recommended Learning Paths</CardTitle>
              <CardDescription>Structured learning journeys to achieve your goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col h-full">
                      <h3 className="font-semibold mb-2">Full Stack MERN Developer</h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">
                        Master both frontend and backend development with MongoDB, Express, React, and Node.js
                      </p>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">6 months</Badge>
                        <Button size="sm" variant="ghost" asChild>
                          <Link href="/learning-paths/fullstack-mern">
                            View Path <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col h-full">
                      <h3 className="font-semibold mb-2">Frontend Developer</h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">
                        Master modern frontend development with HTML, CSS, JavaScript, and React
                      </p>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">4 months</Badge>
                        <Button size="sm" variant="ghost" asChild>
                          <Link href="/learning-paths/frontend-developer">
                            View Path <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses">
          <Card>
            <CardHeader>
              <CardTitle>My Courses</CardTitle>
              <CardDescription>Manage your enrolled courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userProgress?.enrolledCourses?.map((course: any, index: number) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-40 bg-muted">
                      {course.course.image && (
                        <img
                          src={course.course.image || "/placeholder.svg"}
                          alt={course.course.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-2 right-2">
                        <Badge className="bg-blue-500 text-white border-blue-600">{course.progress}% Complete</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{course.course.title}</h3>
                      <Progress value={course.progress} className="h-1.5 mb-4" />
                      <Button size="sm" className="w-full" asChild>
                        <Link href={`/courses/${course.course.slug}`}>Continue Learning</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="challenges">
          <Card>
            <CardHeader>
              <CardTitle>Coding Challenges</CardTitle>
              <CardDescription>Practice your skills with interactive challenges</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "FizzBuzz Challenge",
                    difficulty: "Beginner",
                    category: "Algorithms",
                    completed: true,
                  },
                  {
                    title: "Palindrome Checker",
                    difficulty: "Beginner",
                    category: "Strings",
                    completed: true,
                  },
                  {
                    title: "Todo App",
                    difficulty: "Intermediate",
                    category: "Web Development",
                    completed: false,
                  },
                  {
                    title: "Binary Search Tree",
                    difficulty: "Intermediate",
                    category: "Data Structures",
                    completed: false,
                  },
                  {
                    title: "Weather App",
                    difficulty: "Intermediate",
                    category: "API Integration",
                    completed: false,
                  },
                  {
                    title: "Pathfinding Visualizer",
                    difficulty: "Advanced",
                    category: "Algorithms",
                    completed: false,
                  },
                ].map((challenge, index) => (
                  <Card
                    key={index}
                    className={`overflow-hidden border-l-4 ${
                      challenge.completed
                        ? "border-l-green-500"
                        : challenge.difficulty === "Beginner"
                          ? "border-l-blue-500"
                          : challenge.difficulty === "Intermediate"
                            ? "border-l-yellow-500"
                            : "border-l-red-500"
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{challenge.title}</h3>
                        {challenge.completed && (
                          <Badge className="bg-green-100 text-green-800 border-green-200">Completed</Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {challenge.difficulty}
                        </Badge>
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                          {challenge.category}
                        </Badge>
                      </div>
                      <Button size="sm" className="w-full" asChild>
                        <Link href={`/challenges/${challenge.title.toLowerCase().replace(/\s+/g, "-")}`}>
                          {challenge.completed ? "View Solution" : "Start Challenge"}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="certificates">
          <Card>
            <CardHeader>
              <CardTitle>My Certificates</CardTitle>
              <CardDescription>View and download your earned certificates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="overflow-hidden border-blue-200 dark:border-blue-800">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 text-center">
                    <Trophy className="h-12 w-12 mx-auto mb-2" />
                    <h3 className="text-xl font-bold">HTML & CSS Basics</h3>
                    <p className="text-blue-100">Certificate of Completion</p>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm text-muted-foreground">Issued: June 15, 2023</div>
                      <Badge>Verified</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        View
                      </Button>
                      <Button size="sm" className="flex-1">
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-purple-200 dark:border-purple-800">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 text-center">
                    <Trophy className="h-12 w-12 mx-auto mb-2" />
                    <h3 className="text-xl font-bold">JavaScript Fundamentals</h3>
                    <p className="text-purple-100">Certificate of Completion</p>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm text-muted-foreground">Issued: August 22, 2023</div>
                      <Badge>Verified</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        View
                      </Button>
                      <Button size="sm" className="flex-1">
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Profile Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <input
                        type="text"
                        className="w-full p-2 rounded-md border border-input bg-background"
                        defaultValue="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <input
                        type="email"
                        className="w-full p-2 rounded-md border border-input bg-background"
                        defaultValue="john.doe@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Learning Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Daily Learning Goal</h4>
                        <p className="text-sm text-muted-foreground">Set your daily learning target</p>
                      </div>
                      <select className="p-2 rounded-md border border-input bg-background" defaultValue="1 hour">
                        <option>15 minutes</option>
                        <option>30 minutes</option>
                        <option selected>1 hour</option>
                        <option>2 hours</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-muted-foreground">Receive updates about your courses</p>
                      </div>
                      <div className="flex items-center h-6">
                        <input
                          type="checkbox"
                          id="notifications"
                          className="h-4 w-4 rounded border-gray-300"
                          defaultChecked
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Dark Mode</h4>
                        <p className="text-sm text-muted-foreground">Toggle between light and dark theme</p>
                      </div>
                      <div className="flex items-center h-6">
                        <input type="checkbox" id="darkmode" className="h-4 w-4 rounded border-gray-300" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

