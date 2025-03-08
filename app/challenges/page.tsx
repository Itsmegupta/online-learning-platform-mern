import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Trophy, Star } from "lucide-react"

export default function ChallengesPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">Coding Challenges</h1>
        <p className="text-muted-foreground max-w-2xl">
          Test your skills with our interactive coding challenges. Solve problems, compete with others, and improve your
          programming abilities.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All Challenges</TabsTrigger>
            <TabsTrigger value="beginner">Beginner</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
            <TabsTrigger value="competitions">Competitions</TabsTrigger>
          </TabsList>
        </div>

        {/* All Challenges Tab */}
        <TabsContent value="all" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <ChallengeCard key={index} challenge={challenge} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline">Load More Challenges</Button>
          </div>
        </TabsContent>

        {/* Beginner Challenges Tab */}
        <TabsContent value="beginner" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges
              .filter((challenge) => challenge.difficulty === "Beginner")
              .map((challenge, index) => (
                <ChallengeCard key={index} challenge={challenge} />
              ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline">Load More Challenges</Button>
          </div>
        </TabsContent>

        {/* Intermediate Challenges Tab */}
        <TabsContent value="intermediate" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges
              .filter((challenge) => challenge.difficulty === "Intermediate")
              .map((challenge, index) => (
                <ChallengeCard key={index} challenge={challenge} />
              ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline">Load More Challenges</Button>
          </div>
        </TabsContent>

        {/* Advanced Challenges Tab */}
        <TabsContent value="advanced" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges
              .filter((challenge) => challenge.difficulty === "Advanced")
              .map((challenge, index) => (
                <ChallengeCard key={index} challenge={challenge} />
              ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline">Load More Challenges</Button>
          </div>
        </TabsContent>

        {/* Competitions Tab */}
        <TabsContent value="competitions" className="space-y-8">
          <div className="text-center py-12">
            <p className="text-muted-foreground">No active competitions right now. Check back later!</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface Challenge {
  title: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  category: string
  timeEstimate: string
  participants: number
  rating: number
}

function ChallengeCard({ challenge }: { challenge: Challenge }) {
  const difficultyColor = {
    Beginner: "bg-green-100 text-green-800 border-green-200",
    Intermediate: "bg-blue-100 text-blue-800 border-blue-200",
    Advanced: "bg-red-100 text-red-800 border-red-200",
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className={difficultyColor[challenge.difficulty]}>
            {challenge.difficulty}
          </Badge>
          <Badge variant="outline">{challenge.category}</Badge>
        </div>
        <CardTitle className="mt-2">{challenge.title}</CardTitle>
        <CardDescription>{challenge.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {challenge.timeEstimate}
          </div>
          <div className="flex items-center">
            <Trophy className="h-4 w-4 mr-1" />
            {challenge.participants} participants
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1" />
            {challenge.rating}/5
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`/challenges/${challenge.title.toLowerCase().replace(/\s+/g, "-")}`}>Start Challenge</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

const challenges: Challenge[] = [
  {
    title: "FizzBuzz Challenge",
    description:
      "Write a program that prints numbers from 1 to 100, but for multiples of 3 print 'Fizz' and for multiples of 5 print 'Buzz'.",
    difficulty: "Beginner",
    category: "Algorithms",
    timeEstimate: "30 mins",
    participants: 1245,
    rating: 4.5,
  },
  {
    title: "Palindrome Checker",
    description:
      "Create a function that checks if a given string is a palindrome (reads the same backward as forward).",
    difficulty: "Beginner",
    category: "Strings",
    timeEstimate: "45 mins",
    participants: 987,
    rating: 4.2,
  },
  {
    title: "Number Guessing Game",
    description: "Build a simple game where the computer generates a random number and the user guesses it.",
    difficulty: "Beginner",
    category: "Logic",
    timeEstimate: "1 hour",
    participants: 850,
    rating: 4.3,
  },
  {
    title: "Todo App",
    description: "Build a simple todo application with add, edit, delete, and mark as complete functionality.",
    difficulty: "Intermediate",
    category: "Web Development",
    timeEstimate: "2 hours",
    participants: 756,
    rating: 4.7,
  },
  {
    title: "Binary Search Tree",
    description: "Implement a binary search tree with insert, delete, and search operations.",
    difficulty: "Intermediate",
    category: "Data Structures",
    timeEstimate: "1.5 hours",
    participants: 543,
    rating: 4.4,
  },
  {
    title: "Weather App",
    description: "Create a weather application that fetches data from an API and displays current weather conditions.",
    difficulty: "Intermediate",
    category: "API Integration",
    timeEstimate: "3 hours",
    participants: 678,
    rating: 4.6,
  },
  {
    title: "Calculator",
    description: "Build a fully functional calculator supporting basic arithmetic operations.",
    difficulty: "Intermediate",
    category: "Web Development",
    timeEstimate: "2.5 hours",
    participants: 432,
    rating: 4.5,
  },
  {
    title: "Pathfinding Visualizer",
    description: "Build a visualization tool for pathfinding algorithms like Dijkstra's or A*.",
    difficulty: "Advanced",
    category: "Algorithms",
    timeEstimate: "5 hours",
    participants: 321,
    rating: 4.8,
  },
  {
    title: "Chat Application",
    description: "Create a real-time chat application using WebSockets or a similar technology.",
    difficulty: "Advanced",
    category: "Web Development",
    timeEstimate: "6 hours",
    participants: 289,
    rating: 4.9,
  },
  {
    title: "Machine Learning Model",
    description: "Implement a basic machine learning model for classifying handwritten digits.",
    difficulty: "Advanced",
    category: "Machine Learning",
    timeEstimate: "8 hours",
    participants: 198,
    rating: 4.7,
  },
  {
    title: "Sudoku Solver",
    description: "Build a program that solves a Sudoku puzzle using backtracking.",
    difficulty: "Advanced",
    category: "Algorithms",
    timeEstimate: "4 hours",
    participants: 245,
    rating: 4.6,
  },
]