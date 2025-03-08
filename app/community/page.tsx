import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, ThumbsUp, Eye, Users, Calendar } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">Community</h1>
        <p className="text-muted-foreground max-w-2xl">
          Connect with fellow learners, share your projects, ask questions, and collaborate on coding challenges.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/community/new-discussion">Start Discussion</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/community/find-mentor">Find a Mentor</Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="discussions" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="questions">Questions</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="discussions" className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Recent Discussions</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>

          <div className="space-y-4">
            {discussions.map((discussion, index) => (
              <DiscussionCard key={index} discussion={discussion} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Community Projects</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </TabsContent>

        {/* Questions tab content would be similar */}
      </Tabs>
    </div>
  )
}

interface Discussion {
  title: string
  author: {
    name: string
    avatar: string
  }
  category: string
  replies: number
  views: number
  likes: number
  timePosted: string
}

function DiscussionCard({ discussion }: { discussion: Discussion }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-shrink-0">
            <Avatar className="h-10 w-10">
              <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
              <AvatarFallback>{discussion.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
              <Link
                href={`/community/discussion/${discussion.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-semibold text-lg hover:underline"
              >
                {discussion.title}
              </Link>
              <Badge variant="outline">{discussion.category}</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span>{discussion.author.name}</span>
              <span>{discussion.timePosted}</span>
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-1" />
                {discussion.replies} replies
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                {discussion.views} views
              </div>
              <div className="flex items-center">
                <ThumbsUp className="h-4 w-4 mr-1" />
                {discussion.likes} likes
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface Project {
  title: string
  description: string
  author: {
    name: string
    avatar: string
  }
  tags: string[]
  likes: number
  timePosted: string
  image: string
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <Avatar className="h-6 w-6">
            <AvatarImage src={project.author.avatar} alt={project.author.name} />
            <AvatarFallback>{project.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <ThumbsUp className="h-4 w-4 mr-1" />
            {project.likes} likes
          </div>
          <span>{project.timePosted}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline" asChild>
          <Link href={`/community/project/${project.title.toLowerCase().replace(/\s+/g, "-")}`}>View Project</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

interface Event {
  title: string
  description: string
  date: string
  time: string
  location: string
  attendees: number
  image: string
}

function EventCard({ event }: { event: Event }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
        </div>
      </div>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>{event.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>
              {event.date} at {event.time}
            </span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{event.attendees} attending</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href={`/community/event/${event.title.toLowerCase().replace(/\s+/g, "-")}`}>Learn More</Link>
        </Button>
        <Button>Register</Button>
      </CardFooter>
    </Card>
  )
}

const discussions: Discussion[] = [
  {
    title: "How to structure a large React application?",
    author: {
      name: "Sazia Karol",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    category: "React",
    replies: 24,
    views: 342,
    likes: 56,
    timePosted: "2 hours ago",
  },
  {
    title: "Best practices for MongoDB with Node.js",
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    category: "Backend",
    replies: 18,
    views: 256,
    likes: 42,
    timePosted: "5 hours ago",
  },
  {
    title: "Debugging memory leaks in JavaScript applications",
    author: {
      name: "Alex Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    category: "JavaScript",
    replies: 31,
    views: 420,
    likes: 78,
    timePosted: "1 day ago",
  },
  {
    title: "How to implement authentication in a MERN stack app?",
    author: {
      name: "Emily Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    category: "Full Stack",
    replies: 42,
    views: 567,
    likes: 93,
    timePosted: "2 days ago",
  },
]

const projects: Project[] = [
  {
    title: "E-commerce Dashboard",
    description: "A responsive admin dashboard for e-commerce platforms with analytics.",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["React", "Chart.js", "Tailwind CSS"],
    likes: 87,
    timePosted: "3 days ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Weather App",
    description: "A weather application using OpenWeather API with location detection.",
    author: {
      name: "Jessica Lee",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["JavaScript", "API", "CSS"],
    likes: 64,
    timePosted: "1 week ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Task Management System",
    description: "A full-stack task management application with user authentication.",
    author: {
      name: "Ryan Thompson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["MongoDB", "Express", "React", "Node.js"],
    likes: 112,
    timePosted: "2 weeks ago",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const events: Event[] = [
  {
    title: "Web Development Workshop",
    description: "Learn the fundamentals of modern web development in this hands-on workshop.",
    date: "June 15, 2023",
    time: "10:00 AM - 2:00 PM",
    location: "Online",
    attendees: 156,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "React Conference 2023",
    description: "Join the biggest React conference of the year with speakers from around the world.",
    date: "July 8-10, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "San Francisco, CA",
    attendees: 432,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Coding Hackathon",
    description: "Participate in our 24-hour hackathon and build innovative solutions.",
    date: "August 20-21, 2023",
    time: "10:00 AM - 10:00 AM (next day)",
    location: "New York, NY",
    attendees: 287,
    image: "/placeholder.svg?height=200&width=300",
  },
]

