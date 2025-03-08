import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface LearningPathCardProps {
  title: string
  description: string
  image: string
  level: string
  duration: string
  technologies: string[]
  color: string
}

export default function LearningPathCard({
  title,
  description,
  image,
  level,
  duration,
  technologies,
  color,
}: LearningPathCardProps) {
  const getGradient = (color: string) => {
    const gradients = {
      purple: "from-purple-500 to-indigo-500",
      blue: "from-blue-500 to-cyan-500",
      green: "from-green-800 to-emerald-800",
      amber: "from-amber-500 to-yellow-500",
      red: "from-red-500 to-pink-500",
    }
    return gradients[color as keyof typeof gradients] || "from-gray-500 to-gray-600"
  }

  const getBadgeColor = (color: string) => {
    const colors = {
      purple:
        "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800",
      blue: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
      green:
        "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800",
      amber:
        "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800",
      red: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800",
    }
    return (
      colors[color as keyof typeof colors] ||
      "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/30 dark:text-gray-300 dark:border-gray-800"
    )
  }

  const getButtonGradient = (color: string) => {
    const gradients = {
      purple: "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700",
      blue: "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700",
      green: "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700",
      amber: "bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700",
      red: "bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700",
    }
    return (
      gradients[color as keyof typeof gradients] ||
      "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800"
    )
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md group">
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${getGradient(color)} opacity-120`}></div>
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover mix-blend-overlay" />
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <Badge variant="outline" className="bg-white/20 text-white border-white/30">
              {level}
            </Badge>
            <div className="flex items-center text-sm text-white/90">
              <Clock className="h-3 w-3 mr-1" />
              {duration}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className={getBadgeColor(color)}>
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 border-t">
        <Button className={`w-full ${getButtonGradient(color)}`} asChild>
          <Link href={`/learning-paths/${title.toLowerCase().replace(/\s+/g, "-")}`}>
            Start Learning Path <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

