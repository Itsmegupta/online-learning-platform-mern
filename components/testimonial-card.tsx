import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  color?: string
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  color = "blue",
}: TestimonialCardProps) {
  const getGradient = (color: string) => {
    const gradients = {
      purple: "from-purple-500/10 to-purple-500/5",
      blue: "from-blue-500/10 to-blue-500/5",
      green: "from-green-500/10 to-green-500/5",
      amber: "from-amber-500/10 to-amber-500/5",
      red: "from-red-500/10 to-red-500/5",
      pink: "from-pink-500/10 to-pink-500/5",
      teal: "from-teal-500/10 to-teal-500/5",
      indigo: "from-indigo-500/10 to-indigo-500/5",
      violet: "from-violet-500/10 to-violet-500/5",
    }
    return gradients[color as keyof typeof gradients] || "from-gray-500/10 to-gray-500/5"
  }

  const getBorderColor = (color: string) => {
    const borders = {
      purple: "border-purple-200 dark:border-purple-800",
      blue: "border-blue-200 dark:border-blue-800",
      green: "border-green-200 dark:border-green-800",
      amber: "border-amber-200 dark:border-amber-800",
      red: "border-red-200 dark:border-red-800",
      pink: "border-pink-200 dark:border-pink-800",
      teal: "border-teal-200 dark:border-teal-800",
      indigo: "border-indigo-200 dark:border-indigo-800",
      violet: "border-violet-200 dark:border-violet-800",
    }
    return borders[color as keyof typeof borders] || "border-gray-200 dark:border-gray-800"
  }

  const getIconColor = (color: string) => {
    const colors = {
      purple: "text-purple-500",
      blue: "text-blue-500",
      green: "text-green-500",
      amber: "text-amber-500",
      red: "text-red-500",
      pink: "text-pink-500",
      teal: "text-teal-500",
      indigo: "text-indigo-500",
      violet: "text-violet-500",
    }
    return colors[color as keyof typeof colors] || "text-gray-500"
  }

  return (
    <Card className={`overflow-hidden transition-all hover:shadow-md ${getBorderColor(color)}`}>
      <CardContent className={`p-6 flex flex-col h-full bg-gradient-to-br ${getGradient(color)}`}>
        <div className="mb-4">
          <Quote className={`h-8 w-8 ${getIconColor(color)}`} />
        </div>
        <p className="text-muted-foreground mb-6 flex-grow">"{quote}"</p>
        <div className="flex items-center">
          <Avatar className="h-12 w-12 mr-4 border">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{author}</h4>
            <p className="text-sm text-muted-foreground">
              {role}, {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

