import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface StatCardProps {
  value: string
  label: string
  icon?: ReactNode
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <Card className="border-muted bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-md transition-all">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          {icon && <div className="flex-shrink-0">{icon}</div>}
          <div>
            <p className="text-2xl font-bold">{value}</p>
            <p className="text-sm text-muted-foreground">{label}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

