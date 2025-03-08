"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Users, BookOpen, Award, CheckCircle2, Play, FileText, Code, PenTool } from "lucide-react"

// This would typically come from an API
const learningPaths = [
  {
    id: "frontend-developer",
    title: "Frontend Developer Path",
    description: "Master modern frontend development with HTML, CSS, JavaScript, and React",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop",
    level: "Beginner to Intermediate",
    duration: "4 months",
    students: 2845,
    modules: [
      {
        id: "frontend-basics",
        title: "Web Development Fundamentals",
        description: "Learn the core concepts of how the web works",
        lessons: [
          {
            title: "How the Web Works",
            type: "video",
            duration: "15 min",
            completed: true,
          },
          {
            title: "Introduction to HTML",
            type: "video",
            duration: "25 min",
            completed: true,
          },
          {
            title: "HTML Practice Exercise",
            type: "exercise",
            duration: "45 min",
            completed: true,
          },
          {
            title: "Introduction to CSS",
            type: "video",
            duration: "30 min",
            completed: false,
          },
          {
            title: "CSS Styling Basics",
            type: "reading",
            duration: "20 min",
            completed: false,
          },
        ],
        progress: 60,
      },
      {
        id: "javascript-essentials",
        title: "JavaScript Essentials",
        description: "Master the fundamentals of JavaScript programming",
        lessons: [
          {
            title: "JavaScript Basics",
            type: "video",
            duration: "30 min",
            completed: false,
          },
          {
            title: "Variables and Data Types",
            type: "video",
            duration: "25 min",
            completed: false,
          },
          {
            title: "Control Flow",
            type: "reading",
            duration: "15 min",
            completed: false,
          },
          {
            title: "Functions and Scope",
            type: "video",
            duration: "35 min",
            completed: false,
          },
          {
            title: "JavaScript Coding Challenge",
            type: "exercise",
            duration: "60 min",
            completed: false,
          },
        ],
        progress: 0,
      },
      {
        id: "react-fundamentals",
        title: "React Fundamentals",
        description: "Learn to build interactive UIs with React",
        lessons: [
          {
            title: "Introduction to React",
            type: "video",
            duration: "25 min",
            completed: false,
          },
          {
            title: "Components and Props",
            type: "video",
            duration: "30 min",
            completed: false,
          },
          {
            title: "State and Lifecycle",
            type: "video",
            duration: "35 min",
            completed: false,
          },
          {
            title: "Building a Todo App",
            type: "exercise",
            duration: "90 min",
            completed: false,
          },
        ],
        progress: 0,
      },
    ],
  },
  {
    id: "backend-developer",
    title: "Backend Developer Path",
    description: "Build robust server-side applications with Node.js, Express, and MongoDB",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
    level: "Intermediate",
    duration: "5 months",
    students: 1923,
    modules: [
      {
        id: "nodejs-basics",
        title: "Node.js Fundamentals",
        description: "Learn the core concepts of Node.js",
        lessons: [
          {
            title: "Introduction to Node.js",
            type: "video",
            duration: "25 min",
            completed: false,
          },
          {
            title: "Node.js Modules",
            type: "video",
            duration: "30 min",
            completed: false,
          },
          {
            title: "File System Operations",
            type: "exercise",
            duration: "45 min",
            completed: false,
          },
        ],
        progress: 0,
      },
      {
        id: "express-framework",
        title: "Express.js Framework",
        description: "Build web applications with Express.js",
        lessons: [
          {
            title: "Introduction to Express",
            type: "video",
            duration: "30 min",
            completed: false,
          },
          {
            title: "Routing in Express",
            type: "video",
            duration: "25 min",
            completed: false,
          },
          {
            title: "Middleware",
            type: "reading",
            duration: "20 min",
            completed: false,
          },
          {
            title: "Building a REST API",
            type: "exercise",
            duration: "60 min",
            completed: false,
          },
        ],
        progress: 0,
      },
      {
        id: "mongodb-database",
        title: "MongoDB Database",
        description: "Learn to work with MongoDB for data storage",
        lessons: [
          {
            title: "Introduction to MongoDB",
            type: "video",
            duration: "35 min",
            completed: false,
          },
          {
            title: "CRUD Operations",
            type: "video",
            duration: "40 min",
            completed: false,
          },
          {
            title: "MongoDB with Node.js",
            type: "exercise",
            duration: "50 min",
            completed: false,
          },
        ],
        progress: 0,
      },
    ],
  },
  {
    id: "fullstack-mern",
    title: "Full Stack MERN Developer",
    description: "Become a complete developer by mastering both frontend and backend technologies",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    level: "Intermediate to Advanced",
    duration: "6 months",
    students: 3156,
    modules: [
      {
        id: "mern-fundamentals",
        title: "MERN Stack Fundamentals",
        description: "Learn the core concepts of the MERN stack",
        lessons: [
          {
            title: "Introduction to MERN Stack",
            type: "video",
            duration: "25 min",
            completed: false,
          },
          {
            title: "Setting Up Your Development Environment",
            type: "video",
            duration: "30 min",
            completed: false,
          },
          {
            title: "Full Stack Architecture",
            type: "reading",
            duration: "20 min",
            completed: false,
          },
        ],
        progress: 0,
      },
      {
        id: "react-frontend",
        title: "React Frontend Development",
        description: "Build interactive user interfaces with React",
        lessons: [
          {
            title: "React Components and Props",
            type: "video",
            duration: "35 min",
            completed: false,
          },
          {
            title: "State Management with Redux",
            type: "video",
            duration: "45 min",
            completed: false,
          },
          {
            title: "Building a Dashboard UI",
            type: "exercise",
            duration: "90 min",
            completed: false,
          },
        ],
        progress: 0,
      },
      {
        id: "nodejs-backend",
        title: "Node.js Backend Development",
        description: "Create robust server-side applications",
        lessons: [
          {
            title: "RESTful API Design",
            type: "video",
            duration: "30 min",
            completed: false,
          },
          {
            title: "Authentication with JWT",
            type: "video",
            duration: "40 min",
            completed: false,
          },
          {
            title: "Building a Backend API",
            type: "exercise",
            duration: "75 min",
            completed: false,
          },
        ],
        progress: 0,
      },
    ],
  },
]

export default function LearningPathPage() {
  const params = useParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")
  const [currentPath, setCurrentPath] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    const pathId = params.pathId as string
    const path = learningPaths.find((p) => p.id === pathId)

    if (path) {
      setCurrentPath(path)
    } else {
      // Redirect to learning paths if path not found
      router.push("/learning-paths")
    }

    setIsLoading(false)
  }, [params.pathId, router])

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="flex items-center justify-center h-[60vh]">
          <div className="animate-pulse space-y-4 w-full max-w-3xl">
            <div className="h-8 bg-muted rounded-md w-1/3"></div>
            <div className="h-4 bg-muted rounded-md w-2/3"></div>
            <div className="h-64 bg-muted rounded-md w-full"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-20 bg-muted rounded-md"></div>
              <div className="h-20 bg-muted rounded-md"></div>
              <div className="h-20 bg-muted rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!currentPath) {
    return (
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <h1 className="text-2xl font-bold mb-4">Learning Path Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The learning path you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <a href="/learning-paths">Browse All Learning Paths</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <Button variant="ghost" className="mb-4" onClick={() => router.push("/learning-paths")}>
        ← Back to all paths
      </Button>

      <div className="relative h-[300px] w-full rounded-xl overflow-hidden mb-6">
        <Image src={currentPath.image || "/placeholder.svg"} alt={currentPath.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <Badge className="mb-2 bg-primary">{currentPath.level}</Badge>
          <h1 className="text-3xl font-bold text-white mb-2">{currentPath.title}</h1>
          <p className="text-white/90 max-w-3xl">{currentPath.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="discussion">Discussion</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About This Learning Path</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                      <Clock className="h-6 w-6 text-primary mb-1" />
                      <span className="text-sm font-medium">{currentPath.duration}</span>
                      <span className="text-xs text-muted-foreground">Duration</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                      <BookOpen className="h-6 w-6 text-primary mb-1" />
                      <span className="text-sm font-medium">{currentPath.modules.length}</span>
                      <span className="text-xs text-muted-foreground">Modules</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                      <Users className="h-6 w-6 text-primary mb-1" />
                      <span className="text-sm font-medium">{currentPath.students.toLocaleString()}</span>
                      <span className="text-xs text-muted-foreground">Students</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                      <Award className="h-6 w-6 text-primary mb-1" />
                      <span className="text-sm font-medium">Certificate</span>
                      <span className="text-xs text-muted-foreground">On Completion</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">What You'll Learn</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {currentPath.id === "frontend-developer" ? (
                        <>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span>Build responsive websites with HTML5 and CSS3</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span>Create interactive web applications with JavaScript</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span>Develop modern UIs with React and component-based architecture</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span>Implement state management with Redux</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span>Optimize web performance and accessibility</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span>Deploy frontend applications to production</span>
                          </li>
                        </>
                      ) : currentPath.id === "backend-developer" ? (
                        <>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span>Build server-side applications with Node.js</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span>Create RESTful APIs with Express.js</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span>Design and implement MongoDB database schemas</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span>Implement authentication and authorization</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span>Handle file uploads and data processing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span>Deploy backend applications to production</span>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span>Build full-stack applications with the MERN stack</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span>Create responsive UIs with React and Material UI</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span>Develop RESTful APIs with Node.js and Express</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span>Design and implement MongoDB database schemas</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span>Implement authentication and state management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                            <span>Deploy full-stack applications to production</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">Path Description</h3>
                    <div className="space-y-4 text-muted-foreground">
                      {currentPath.id === "frontend-developer" ? (
                        <>
                          <p>
                            The Frontend Developer Path is designed to take you from a beginner to a professional
                            frontend developer. You'll learn how to build beautiful, interactive, and responsive
                            websites and web applications using modern technologies and best practices.
                          </p>
                          <p>
                            Starting with the fundamentals of HTML and CSS, you'll progress to JavaScript programming
                            and then to building complex user interfaces with React. Along the way, you'll work on
                            real-world projects that will help you build a strong portfolio.
                          </p>
                          <p>
                            By the end of this path, you'll have the skills and confidence to build professional-grade
                            frontend applications and be ready for a career as a frontend developer.
                          </p>
                        </>
                      ) : currentPath.id === "backend-developer" ? (
                        <>
                          <p>
                            The Backend Developer Path focuses on building robust, scalable server-side applications
                            using Node.js, Express, and MongoDB. This path is perfect for those who want to specialize
                            in creating the logic and infrastructure that powers web applications.
                          </p>
                          <p>
                            You'll learn how to design and implement RESTful APIs, work with databases, handle
                            authentication and authorization, process data, and deploy your applications to production
                            environments.
                          </p>
                          <p>
                            By completing this path, you'll have the skills needed to build secure, efficient backend
                            systems and be ready for a career as a backend developer.
                          </p>
                        </>
                      ) : (
                        <>
                          <p>
                            The Full Stack MERN Developer Path combines frontend and backend development to give you a
                            comprehensive understanding of the entire web development process. You'll learn to build
                            complete web applications from scratch using MongoDB, Express, React, and Node.js.
                          </p>
                          <p>
                            This path covers both client-side and server-side development, database design, API
                            development, authentication, state management, and deployment. You'll build several
                            full-stack projects that demonstrate your ability to create complete web applications.
                          </p>
                          <p>
                            Upon completion, you'll be equipped with the skills needed to work as a full-stack
                            developer, capable of handling all aspects of web application development.
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Progress</CardTitle>
                  <CardDescription>Track your journey through this learning path</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Overall Completion</span>
                        <span>15%</span>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>

                    <div className="space-y-4">
                      {currentPath.modules.map((module: any, index: number) => (
                        <div key={module.id} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <h4 className="font-medium">{module.title}</h4>
                            <Badge variant="outline">{module.progress}% complete</Badge>
                          </div>
                          <Progress value={module.progress} className="h-1.5" />
                        </div>
                      ))}
                    </div>

                    <Button className="w-full">Continue Learning</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Curriculum</CardTitle>
                  <CardDescription>Detailed breakdown of all modules and lessons</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {currentPath.modules.map((module: any, moduleIndex: number) => (
                      <AccordionItem key={module.id} value={module.id}>
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex flex-col items-start text-left">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">
                                Module {moduleIndex + 1}: {module.title}
                              </span>
                              <Badge variant="outline" className="ml-2">
                                {module.lessons.length} lessons
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{module.description}</p>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4 pt-2">
                            {module.lessons.map((lesson: any, lessonIndex: number) => (
                              <div
                                key={lessonIndex}
                                className={`flex items-start p-3 rounded-md ${
                                  lesson.completed
                                    ? "bg-green-50 dark:bg-green-950/20 border border-green-100 dark:border-green-900"
                                    : "bg-muted"
                                }`}
                              >
                                <div className="flex-shrink-0 mr-3 mt-1">
                                  {lesson.completed ? (
                                    <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                                    </div>
                                  ) : lesson.type === "video" ? (
                                    <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                      <Play className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                    </div>
                                  ) : lesson.type === "reading" ? (
                                    <div className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                      <FileText className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                                    </div>
                                  ) : (
                                    <div className="h-6 w-6 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                                      <Code className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                                    </div>
                                  )}
                                </div>
                                <div className="flex-1">
                                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <h4 className="font-medium">{lesson.title}</h4>
                                    <div className="flex items-center mt-1 sm:mt-0">
                                      <Badge variant="outline" className="mr-2">
                                        {lesson.type === "video"
                                          ? "Video"
                                          : lesson.type === "reading"
                                            ? "Reading"
                                            : "Exercise"}
                                      </Badge>
                                      <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Resources</CardTitle>
                  <CardDescription>Additional materials to support your learning</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Recommended Books</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentPath.id === "frontend-developer" ? (
                          <>
                            <Card>
                              <CardContent className="p-4 flex gap-4">
                                <div className="w-16 h-20 bg-muted rounded-md flex-shrink-0"></div>
                                <div>
                                  <h4 className="font-medium">Eloquent JavaScript</h4>
                                  <p className="text-sm text-muted-foreground">Marijn Haverbeke</p>
                                </div>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="p-4 flex gap-4">
                                <div className="w-16 h-20 bg-muted rounded-md flex-shrink-0"></div>
                                <div>
                                  <h4 className="font-medium">CSS: The Definitive Guide</h4>
                                  <p className="text-sm text-muted-foreground">Eric Meyer & Estelle Weyl</p>
                                </div>
                              </CardContent>
                            </Card>
                          </>
                        ) : currentPath.id === "backend-developer" ? (
                          <>
                            <Card>
                              <CardContent className="p-4 flex gap-4">
                                <div className="w-16 h-20 bg-muted rounded-md flex-shrink-0"></div>
                                <div>
                                  <h4 className="font-medium">Node.js Design Patterns</h4>
                                  <p className="text-sm text-muted-foreground">Mario Casciaro</p>
                                </div>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="p-4 flex gap-4">
                                <div className="w-16 h-20 bg-muted rounded-md flex-shrink-0"></div>
                                <div>
                                  <h4 className="font-medium">MongoDB: The Definitive Guide</h4>
                                  <p className="text-sm text-muted-foreground">Kristina Chodorow</p>
                                </div>
                              </CardContent>
                            </Card>
                          </>
                        ) : (
                          <>
                            <Card>
                              <CardContent className="p-4 flex gap-4">
                                <div className="w-16 h-20 bg-muted rounded-md flex-shrink-0"></div>
                                <div>
                                  <h4 className="font-medium">MERN Stack Guide</h4>
                                  <p className="text-sm text-muted-foreground">Maximilian Schwarzmüller</p>
                                </div>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="p-4 flex gap-4">
                                <div className="w-16 h-20 bg-muted rounded-md flex-shrink-0"></div>
                                <div>
                                  <h4 className="font-medium">Full Stack React Projects</h4>
                                  <p className="text-sm text-muted-foreground">Shama Hoque</p>
                                </div>
                              </CardContent>
                            </Card>
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3">Downloadable Resources</h3>
                      <div className="space-y-2">
                        <Card>
                          <CardContent className="p-4 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <FileText className="h-5 w-5 text-primary" />
                              <span>Course Syllabus</span>
                            </div>
                            <Button size="sm" variant="outline">
                              Download
                            </Button>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <Code className="h-5 w-5 text-primary" />
                              <span>Starter Code Repository</span>
                            </div>
                            <Button size="sm" variant="outline">
                              Access
                            </Button>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                              <PenTool className="h-5 w-5 text-primary" />
                              <span>Cheat Sheets</span>
                            </div>
                            <Button size="sm" variant="outline">
                              Download
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="discussion" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Community Discussion</CardTitle>
                  <CardDescription>Connect with other students in this learning path</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">
                      Join the discussion to ask questions and share your progress.
                    </p>
                    <Button>Access Discussion Forum</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Start Learning</CardTitle>
              <CardDescription>Begin your journey on this path</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Your Progress</h4>
                    <Badge>Just Started</Badge>
                  </div>
                  <Progress value={15} className="h-2 mb-2" />
                  <p className="text-sm text-muted-foreground">15% complete</p>
                </div>

                <div className="flex flex-col gap-2">
                  <Button size="lg" className="w-full">
                    Continue Learning
                  </Button>
                  <Button size="lg" variant="outline" className="w-full">
                    View Roadmap
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prerequisites</CardTitle>
              <CardDescription>Recommended knowledge before starting</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {currentPath.id === "frontend-developer" ? (
                  <>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span>Basic computer skills</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span>Understanding of how websites work</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span>No prior coding experience required</span>
                    </li>
                  </>
                ) : currentPath.id === "backend-developer" ? (
                  <>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span>Basic JavaScript knowledge</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span>Understanding of web concepts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span>Familiarity with command line</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span>JavaScript fundamentals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span>Basic HTML and CSS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span>Understanding of web development concepts</span>
                    </li>
                  </>
                )}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community</CardTitle>
              <CardDescription>Learn together with others</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{currentPath.students.toLocaleString()} students</p>
                    <p className="text-sm text-muted-foreground">Currently enrolled</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Join Discussion Forum
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

