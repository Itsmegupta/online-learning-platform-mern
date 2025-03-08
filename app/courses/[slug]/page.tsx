"use client"

import { useState } from "react"
import { use } from "react" // Import React.use
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Clock,
  Calendar,
  Users,
  Star,
  CheckCircle,
  PlayCircle,
  FileText,
  Code,
  MessageSquare,
  ThumbsUp,
  Share2,
} from "lucide-react"

export default function CoursePage({ params }: { params: Promise<{ slug: string }> }) { // Update type to reflect Promise
  const [isEnrolled, setIsEnrolled] = useState(false)
  
  // Unwrap the params Promise using React.use()
  const resolvedParams = use(params)
  const slug = resolvedParams.slug

  const course = {
    title: slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    description: "Master the fundamentals of JavaScript programming and build a solid foundation for web development.",
    longDescription:
      "This comprehensive course covers everything you need to know about JavaScript, from basic syntax to advanced concepts like closures, promises, and async/await. You'll learn through a combination of video lectures, interactive coding exercises, and real-world projects that will help you apply your knowledge immediately.",
    level: "Beginner",
    duration: "4 weeks",
    image: "/placeholder.svg?height=400&width=800",
    rating: 4.8,
    reviews: 1245,
    students: 10567,
    lastUpdated: "June 2023",
    instructor: {
      name: "Sazia Karol",
      title: "Senior JavaScript Developer",
      bio: "Sarah has over 10 years of experience in web development and has worked with companies like Google and Facebook. She's passionate about teaching and making complex concepts easy to understand.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    modules: [
      {
        title: "Introduction to JavaScript",
        lessons: [
          { title: "What is JavaScript?", duration: "10:15", type: "video" },
          { title: "Setting Up Your Development Environment", duration: "15:30", type: "video" },
          { title: "Your First JavaScript Program", duration: "12:45", type: "video" },
          { title: "JavaScript in the Browser", duration: "14:20", type: "video" },
          { title: "Module Quiz", duration: "15 mins", type: "quiz" },
        ],
      },
      {
        title: "Variables and Data Types",
        lessons: [
          { title: "Variables and Constants", duration: "11:20", type: "video" },
          { title: "Numbers and Math Operations", duration: "13:45", type: "video" },
          { title: "Strings and String Methods", duration: "16:30", type: "video" },
          { title: "Arrays and Array Methods", duration: "18:15", type: "video" },
          { title: "Objects and Object Methods", duration: "20:10", type: "video" },
          { title: "Coding Exercise: Data Types", duration: "30 mins", type: "exercise" },
          { title: "Module Quiz", duration: "15 mins", type: "quiz" },
        ],
      },
      {
        title: "Control Flow",
        lessons: [
          { title: "Conditional Statements", duration: "14:25", type: "video" },
          { title: "Loops", duration: "15:40", type: "video" },
          { title: "Switch Statements", duration: "12:35", type: "video" },
          { title: "Error Handling with Try/Catch", duration: "13:50", type: "video" },
          { title: "Coding Exercise: Control Flow", duration: "30 mins", type: "exercise" },
          { title: "Module Quiz", duration: "15 mins", type: "quiz" },
        ],
      },
      {
        title: "Functions",
        lessons: [
          { title: "Function Declarations and Expressions", duration: "16:15", type: "video" },
          { title: "Parameters and Arguments", duration: "14:30", type: "video" },
          { title: "Return Values", duration: "12:20", type: "video" },
          { title: "Arrow Functions", duration: "15:45", type: "video" },
          { title: "Higher-Order Functions", duration: "18:30", type: "video" },
          { title: "Closures", duration: "20:15", type: "video" },
          { title: "Coding Exercise: Functions", duration: "45 mins", type: "exercise" },
          { title: "Module Quiz", duration: "20 mins", type: "quiz" },
        ],
      },
    ],
    whatYouWillLearn: [
      "JavaScript syntax and fundamentals",
      "Variables, data types, and operators",
      "Control flow with conditionals and loops",
      "Functions and scope",
      "Arrays and objects",
      "DOM manipulation",
      "Event handling",
      "Asynchronous JavaScript with Promises",
    ],
    requirements: [
      "Basic understanding of HTML and CSS",
      "A computer with internet access",
      "A text editor (VS Code recommended)",
      "No prior programming experience required",
    ],
    projects: [
      "Interactive form validation",
      "To-do list application",
      "Weather app using APIs",
      "Interactive quiz game",
    ],
  }
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{course.description}</p>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {course.level}
              </Badge>
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {course.duration}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                Last updated: {course.lastUpdated}
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                <span className="font-medium mr-1">{course.rating}</span>
                <span className="text-muted-foreground">({course.reviews} reviews)</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Users className="h-4 w-4 mr-1" />
                {course.students.toLocaleString()} students
              </div>
            </div>
            <div className="flex items-center mb-6">
              <Avatar className="h-12 w-12 mr-4 border">
                <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} />
                <AvatarFallback>{course.instructor.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{course.instructor.name}</p>
                <p className="text-sm text-muted-foreground">{course.instructor.title}</p>
              </div>
            </div>
          </div>

          <div className="lg:hidden mb-8">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Button variant="secondary" size="lg" className="gap-2">
                  <PlayCircle className="h-5 w-5" />
                  Preview Course
                </Button>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold">Free</span>
                    <span className="text-muted-foreground line-through">$49.99</span>
                  </div>
                  <Button className="w-full mb-4" size="lg" onClick={() => setIsEnrolled(true)}>
                    {isEnrolled ? "Continue Learning" : "Enroll Now"}
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mb-4">30-Day Money-Back Guarantee</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">Full lifetime access</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">Access on mobile and desktop</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">Certificate of completion</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Like
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Discuss
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6 pt-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                <p className="text-muted-foreground mb-6">{course.longDescription}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.whatYouWillLearn.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Requirements</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {course.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Projects You'll Build</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.projects.map((project, index) => (
                    <Card key={index} className="bg-muted/50">
                      <CardContent className="p-4 flex items-center">
                        <Code className="h-5 w-5 mr-3 text-primary" />
                        <span>{project}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="curriculum" className="pt-6">
              <div className="mb-4">
                <h2 className="text-2xl font-bold mb-2">Course Content</h2>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>{course.modules.length} modules</span>
                  <span>{course.modules.reduce((total, module) => total + module.lessons.length, 0)} lessons</span>
                  <span>
                    {Math.round(
                      course.modules.reduce(
                        (total, module) =>
                          total +
                          module.lessons.reduce(
                            (sum, lesson) =>
                              sum +
                              (lesson.type === "video"
                                ? Number.parseInt(lesson.duration.split(":")[0]) * 60 +
                                  Number.parseInt(lesson.duration.split(":")[1])
                                : 0),
                            0,
                          ),
                        0,
                      ) / 60,
                    )}{" "}
                    hours of video
                  </span>
                </div>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {course.modules.map((module, moduleIndex) => (
                  <AccordionItem key={moduleIndex} value={`module-${moduleIndex}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex flex-col items-start text-left">
                        <span className="font-semibold">{module.title}</span>
                        <span className="text-sm text-muted-foreground">
                          {module.lessons.length} lessons •
                          {Math.round(
                            module.lessons.reduce(
                              (sum, lesson) =>
                                sum +
                                (lesson.type === "video"
                                  ? Number.parseInt(lesson.duration.split(":")[0]) * 60 +
                                    Number.parseInt(lesson.duration.split(":")[1])
                                  : 0),
                              0,
                            ) / 60,
                          )}{" "}
                          hours
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-4">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div
                            key={lessonIndex}
                            className="flex items-center justify-between p-2 rounded-md hover:bg-muted"
                          >
                            <div className="flex items-center">
                              {lesson.type === "video" && <PlayCircle className="h-4 w-4 mr-2 text-primary" />}
                              {lesson.type === "quiz" && <FileText className="h-4 w-4 mr-2 text-primary" />}
                              {lesson.type === "exercise" && <Code className="h-4 w-4 mr-2 text-primary" />}
                              <span className="text-sm">{lesson.title}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            <TabsContent value="instructor" className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-1/4">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto">
                    <Image
                      src={course.instructor.avatar || "/placeholder.svg"}
                      alt={course.instructor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h2 className="text-2xl font-bold mb-2">{course.instructor.name}</h2>
                  <p className="text-primary mb-4">{course.instructor.title}</p>
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500 fill-yellow-500" />
                      <span>4.8 Instructor Rating</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span>2,347 Reviews</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>45,678 Students</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">{course.instructor.bio}</p>
                  <Button variant="outline">View Full Profile</Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Student Reviews</h2>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">{course.rating}</div>
                    <div className="flex items-center justify-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${star <= Math.floor(course.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted"}`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">Course Rating</div>
                  </div>
                  <div className="flex-1">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center mb-2">
                        <div className="w-12 text-sm text-muted-foreground">{rating} stars</div>
                        <div className="flex-1 mx-3">
                          <Progress
                            value={rating === 5 ? 78 : rating === 4 ? 15 : rating === 3 ? 5 : rating === 2 ? 1 : 1}
                            className="h-2"
                          />
                        </div>
                        <div className="w-12 text-sm text-right text-muted-foreground">
                          {rating === 5
                            ? "78%"
                            : rating === 4
                              ? "15%"
                              : rating === 3
                                ? "5%"
                                : rating === 2
                                  ? "1%"
                                  : "1%"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b pb-6">
                    <div className="flex items-start mb-2">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={`/placeholder.svg?height=40&width=40&text=U${review}`} />
                        <AvatarFallback>U{review}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">User{review}</div>
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${star <= 5 ? "text-yellow-500 fill-yellow-500" : "text-muted"}`}
                            />
                          ))}
                          <span className="text-xs text-muted-foreground ml-2">1 month ago</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      This course exceeded my expectations! The instructor explains complex concepts in a way that's
                      easy to understand, and the hands-on projects really helped me apply what I learned. I went from
                      knowing almost nothing about JavaScript to building my own applications. Highly recommended!
                    </p>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  Load More Reviews
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-24">
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Button variant="secondary" size="lg" className="gap-2">
                  <PlayCircle className="h-5 w-5" />
                  Preview Course
                </Button>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold">Free</span>
                    <span className="text-muted-foreground line-through">$49.99</span>
                  </div>
                  <Button className="w-full mb-4" size="lg" onClick={() => setIsEnrolled(true)}>
                    {isEnrolled ? "Continue Learning" : "Enroll Now"}
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mb-4">30-Day Money-Back Guarantee</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">Full lifetime access</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">Access on mobile and desktop</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm">Certificate of completion</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Like
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Discuss
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}