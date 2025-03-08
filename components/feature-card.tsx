import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  color: string
}

export default function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
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
    }
    return colors[color as keyof typeof colors] || "text-gray-500"
  }

  const getHoverShadow = (color: string) => {
    const shadows = {
      purple: "hover:shadow-purple-100 dark:hover:shadow-purple-900/20",
      blue: "hover:shadow-blue-100 dark:hover:shadow-blue-900/20",
      green: "hover:shadow-green-100 dark:hover:shadow-green-900/20",
      amber: "hover:shadow-amber-100 dark:hover:shadow-amber-900/20",
      red: "hover:shadow-red-100 dark:hover:shadow-red-900/20",
      pink: "hover:shadow-pink-100 dark:hover:shadow-pink-900/20",
      teal: "hover:shadow-teal-100 dark:hover:shadow-teal-900/20",
      indigo: "hover:shadow-indigo-100 dark:hover:shadow-indigo-900/20",
    }
    return shadows[color as keyof typeof shadows] || "hover:shadow-gray-100 dark:hover:shadow-gray-900/20"
  }

  return (
    <Card className={`transition-all hover:shadow-md ${getBorderColor(color)} ${getHoverShadow(color)}`}>
      <CardContent className={`p-6 text-center bg-gradient-to-br ${getGradient(color)}`}>
        <div
          className={`flex justify-center mb-4 w-16 h-16 mx-auto rounded-full bg-white dark:bg-gray-800 items-center shadow-sm ${getIconColor(color)}`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

