import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface CourseCardProps {
  title: string
  description: string
  level: string
  duration: string
  image: string
  rating?: number
  students?: number
  color?: string
}

export default function CourseCard({
  title,
  description,
  level,
  duration,
  image,
  rating = 4.5,
  students = 0,
  color = "blue",
}: CourseCardProps) {
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

  const getButtonColor = (color: string) => {
    const colors = {
      purple: "bg-purple-600 hover:bg-purple-700 text-white",
      blue: "bg-blue-600 hover:bg-blue-700 text-white",
      green: "bg-green-600 hover:bg-green-700 text-white",
      amber: "bg-amber-600 hover:bg-amber-700 text-white",
      red: "bg-red-600 hover:bg-red-700 text-white",
    }
    return colors[color as keyof typeof colors] || "bg-gray-600 hover:bg-gray-700 text-white"
  }

  const getBorderColor = (color: string) => {
    const colors = {
      purple: "border-purple-200 dark:border-purple-800",
      blue: "border-blue-200 dark:border-blue-800",
      green: "border-green-200 dark:border-green-800",
      amber: "border-amber-200 dark:border-amber-800",
      red: "border-red-200 dark:border-red-800",
    }
    return colors[color as keyof typeof colors] || "border-gray-200 dark:border-gray-800"
  }

  return (
    <Card className={`overflow-hidden transition-all hover:shadow-md group ${getBorderColor(color)}`}>
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
          <Button variant="secondary" size="sm" className="w-full" asChild>
            <Link href={`/courses/${title.toLowerCase().replace(/\s+/g, "-")}`}>Preview Course</Link>
          </Button>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className={getBadgeColor(color)}>
            {level}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            {duration}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
            <span className="font-medium mr-1">{rating}</span>
            <span className="text-muted-foreground text-sm">({Math.floor(students / 10)} reviews)</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-1" />
            {students} students
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 border-t mt-4">
        <Button className={`w-full ${getButtonColor(color)}`} asChild>
          <Link href={`/courses/${title.toLowerCase().replace(/\s+/g, "-")}`}>Enroll Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

