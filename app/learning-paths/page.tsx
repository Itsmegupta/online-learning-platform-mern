"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Clock, Users, BookOpen, Award, ArrowRight, CheckCircle2 } from "lucide-react"

const learningPaths = [
  {
    id: "frontend-developer",
    title: "Frontend Developer Path",
    description: "Master modern frontend development with HTML, CSS, JavaScript, and React",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop",
    level: "Beginner to Intermediate",
    duration: "4 months",
    students: 2845,
    modules: 6,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Redux", "Responsive Design"],
    career: ["Frontend Developer", "UI Developer", "React Developer"],
    featured: true,
    category: "web-development",
  },
  {
    id: "backend-developer",
    title: "Backend Developer Path",
    description: "Build robust server-side applications with Node.js, Express, and MongoDB",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
    level: "Intermediate",
    duration: "5 months",
    students: 1923,
    modules: 7,
    skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Authentication", "Database Design"],
    career: ["Backend Developer", "Node.js Developer", "API Developer"],
    featured: true,
    category: "web-development",
  },
  {
    id: "fullstack-mern",
    title: "Full Stack MERN Developer",
    description: "Become a complete developer by mastering both frontend and backend technologies",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    level: "Intermediate to Advanced",
    duration: "6 months",
    students: 3156,
    modules: 9,
    skills: ["React", "Node.js", "Express", "MongoDB", "Full Stack Development", "Deployment"],
    career: ["Full Stack Developer", "MERN Stack Developer", "JavaScript Developer"],
    featured: true,
    category: "web-development",
  },
  {
    id: "data-science",
    title: "Data Science & Machine Learning",
    description: "Learn to analyze data and build machine learning models with Python",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    level: "Intermediate",
    duration: "6 months",
    students: 2134,
    modules: 8,
    skills: ["Python", "Data Analysis", "Machine Learning", "Data Visualization", "Statistics"],
    career: ["Data Scientist", "Machine Learning Engineer", "Data Analyst"],
    featured: false,
    category: "data-science",
  },
  {
    id: "mobile-developer",
    title: "Mobile App Developer",
    description: "Build cross-platform mobile applications with React Native",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070&auto=format&fit=crop",
    level: "Intermediate",
    duration: "4 months",
    students: 1756,
    modules: 6,
    skills: ["React Native", "JavaScript", "Mobile UI/UX", "App Deployment", "API Integration"],
    career: ["Mobile Developer", "React Native Developer", "App Developer"],
    featured: false,
    category: "mobile-development",
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineering",
    description: "Master the tools and practices for modern DevOps and cloud infrastructure",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2070&auto=format&fit=crop",
    level: "Intermediate to Advanced",
    duration: "5 months",
    students: 1245,
    modules: 7,
    skills: ["Docker", "Kubernetes", "CI/CD", "Cloud Services", "Infrastructure as Code"],
    career: ["DevOps Engineer", "Cloud Engineer", "Site Reliability Engineer"],
    featured: false,
    category: "devops",
  },
]

export default function LearningPathsPage() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("all")

  const filteredPaths =
    activeTab === "all" ? learningPaths : learningPaths.filter((path) => path.category === activeTab)

  const selectedPathData = selectedPath ? learningPaths.find((path) => path.id === selectedPath) : null

  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-2 mb-8">
        <h1 className="text-3xl font-bold">Learning Paths</h1>
        <p className="text-muted-foreground">Structured learning journeys to help you achieve your career goals</p>
      </div>

      {selectedPath ? (
        <div className="space-y-6">
          <Button variant="ghost" className="mb-4" onClick={() => setSelectedPath(null)}>
            ← Back to all paths
          </Button>

          {selectedPathData && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <div className="relative h-[300px] w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={selectedPathData.image || "/placeholder.svg"}
                      alt={selectedPathData.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="mb-2 bg-primary">{selectedPathData.level}</Badge>
                      <h1 className="text-2xl font-bold text-white">{selectedPathData.title}</h1>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <p className="mb-4">{selectedPathData.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="flex flex-col items-center justify-center p-3 bg-muted rounded-lg">
                        <Clock className="h-6 w-6 text-primary mb-1" />
                        <span className="text-sm font-medium">{selectedPathData.duration}</span>
                        <span className="text-xs text-muted-foreground">Duration</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-3 bg-muted rounded-lg">
                        <BookOpen className="h-6 w-6 text-primary mb-1" />
                        <span className="text-sm font-medium">{selectedPathData.modules}</span>
                        <span className="text-xs text-muted-foreground">Modules</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-3 bg-muted rounded-lg">
                        <Users className="h-6 w-6 text-primary mb-1" />
                        <span className="text-sm font-medium">{selectedPathData.students.toLocaleString()}</span>
                        <span className="text-xs text-muted-foreground">Students</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-3 bg-muted rounded-lg">
                        <Award className="h-6 w-6 text-primary mb-1" />
                        <span className="text-sm font-medium">Certificate</span>
                        <span className="text-xs text-muted-foreground">On Completion</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-2">Skills You'll Gain</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedPathData.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-2">Career Opportunities</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedPathData.career.map((job, index) => (
                          <Badge key={index} variant="outline" className="border-primary text-primary">
                            {job}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Path Curriculum</CardTitle>
                    <CardDescription>What you'll learn in this path</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Foundations & Prerequisites",
                          description: "Learn the fundamental concepts and tools needed for this path",
                          lessons: 5,
                          completed: true,
                        },
                        {
                          title:
                            selectedPathData.id === "frontend-developer"
                              ? "HTML & CSS Fundamentals"
                              : selectedPathData.id === "backend-developer"
                                ? "Node.js Basics"
                                : selectedPathData.id === "fullstack-mern"
                                  ? "Web Development Fundamentals"
                                  : selectedPathData.id === "data-science"
                                    ? "Python Programming"
                                    : selectedPathData.id === "mobile-developer"
                                      ? "JavaScript for Mobile"
                                      : "Docker Fundamentals",
                          description: "Master the core technologies that form the foundation of this path",
                          lessons: 8,
                          completed: true,
                        },
                        {
                          title:
                            selectedPathData.id === "frontend-developer"
                              ? "JavaScript Essentials"
                              : selectedPathData.id === "backend-developer"
                                ? "Express Framework"
                                : selectedPathData.id === "fullstack-mern"
                                  ? "Frontend Development with React"
                                  : selectedPathData.id === "data-science"
                                    ? "Data Analysis with Pandas"
                                    : selectedPathData.id === "mobile-developer"
                                      ? "React Native Basics"
                                      : "CI/CD Pipelines",
                          description: "Build your knowledge with intermediate concepts and techniques",
                          lessons: 10,
                          completed: false,
                        },
                        {
                          title:
                            selectedPathData.id === "frontend-developer"
                              ? "React Development"
                              : selectedPathData.id === "backend-developer"
                                ? "MongoDB & Databases"
                                : selectedPathData.id === "fullstack-mern"
                                  ? "Backend Development with Node.js"
                                  : selectedPathData.id === "data-science"
                                    ? "Machine Learning Fundamentals"
                                    : selectedPathData.id === "mobile-developer"
                                      ? "Mobile UI Components"
                                      : "Kubernetes Orchestration",
                          description: "Apply your skills to build more complex applications and systems",
                          lessons: 12,
                          completed: false,
                        },
                        {
                          title:
                            selectedPathData.id === "frontend-developer"
                              ? "Advanced Frontend Concepts"
                              : selectedPathData.id === "backend-developer"
                                ? "API Development"
                                : selectedPathData.id === "fullstack-mern"
                                  ? "Full Stack Integration"
                                  : selectedPathData.id === "data-science"
                                    ? "Deep Learning"
                                    : selectedPathData.id === "mobile-developer"
                                      ? "App State Management"
                                      : "Infrastructure as Code",
                          description: "Master advanced techniques and best practices",
                          lessons: 8,
                          completed: false,
                        },
                        {
                          title: "Capstone Project",
                          description: "Apply everything you've learned in a comprehensive final project",
                          lessons: 5,
                          completed: false,
                        },
                      ].map((module, index) => (
                        <div key={index} className="flex gap-4 p-4 border rounded-lg">
                          <div className="flex-shrink-0 mt-1">
                            {module.completed ? (
                              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                              </div>
                            ) : (
                              <div className="h-6 w-6 rounded-full border-2 border-muted-foreground flex items-center justify-center text-xs font-medium">
                                {index + 1}
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-medium">{module.title}</h4>
                              <Badge variant="outline">{module.lessons} lessons</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{module.description}</p>
                            {module.completed ? (
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                Completed
                              </Badge>
                            ) : index === 2 ? (
                              <div className="space-y-2">
                                <Progress value={30} className="h-2" />
                                <div className="flex justify-between text-xs">
                                  <span>3/10 lessons completed</span>
                                  <span>30%</span>
                                </div>
                              </div>
                            ) : (
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                {index === 2 ? "In Progress" : "Not Started"}
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
                      {selectedPathData.id === "frontend-developer" ? (
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
                      ) : selectedPathData.id === "backend-developer" ? (
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
                      ) : selectedPathData.id === "fullstack-mern" ? (
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
                      ) : selectedPathData.id === "data-science" ? (
                        <>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>Basic programming knowledge</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>High school level mathematics</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>Analytical thinking skills</span>
                          </li>
                        </>
                      ) : selectedPathData.id === "mobile-developer" ? (
                        <>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>JavaScript fundamentals</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>Basic React knowledge</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>Understanding of mobile UI concepts</span>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>Linux fundamentals</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>Basic networking knowledge</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>Command line proficiency</span>
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
                          <p className="font-medium">{selectedPathData.students.toLocaleString()} students</p>
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
          )}
        </div>
      ) : (
        <>
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All Paths</TabsTrigger>
              <TabsTrigger value="web-development">Web Development</TabsTrigger>
              <TabsTrigger value="data-science">Data Science</TabsTrigger>
              <TabsTrigger value="mobile-development">Mobile</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPaths.map((path) => (
              <Card key={path.id} className={`overflow-hidden ${path.featured ? "border-primary" : ""}`}>
                <div className="relative h-48 w-full">
                  <Image src={path.image || "/placeholder.svg"} alt={path.title} fill className="object-cover" />
                  {path.featured && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary">Featured</Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{path.title}</CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">{path.level}</Badge>
                    <Badge variant="outline">{path.duration}</Badge>
                    <Badge variant="outline">{path.modules} modules</Badge>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {path.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {path.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{path.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {path.students.toLocaleString()} students enrolled
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={() => setSelectedPath(path.id)}>
                    View Path <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

