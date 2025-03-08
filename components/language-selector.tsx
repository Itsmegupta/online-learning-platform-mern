"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const languages = [
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/ios-filled/50/javascript-logo.png",
    color: "#F7DF1E",
    description: "The language of the web. Build interactive websites and web applications.",
    courses: 42,
    students: 1250,
  },
  {
    name: "Python",
    icon: "https://img.icons8.com/color/50/python.png",
    color: "#3776AB",
    description: "Versatile language for web, data science, AI, and automation.",
    courses: 38,
    students: 1080,
  },
  {
    name: "Java",
    icon: "https://img.icons8.com/3d-fluency/94/java.png",
    color: "#007396",
    description: "Build enterprise applications, Android apps, and large systems.",
    courses: 29,
    students: 870,
  },
  {
    name: "C#",
    icon: "https://img.icons8.com/nolan/64/c-sharp-logo.png",
    color: "#239120",
    description: "Microsoft's language for Windows apps, game development with Unity, and web apps.",
    courses: 24,
    students: 720,
  },
  {
    name: "Ruby",
    icon: "https://img.icons8.com/nolan/64/ruby-programming-language.png",
    color: "#CC342D",
    description: "Elegant language focused on simplicity and productivity with Rails framework.",
    courses: 18,
    students: 540,
  },
  {
    name: "Go",
    icon: "https://img.icons8.com/fluency/48/go.png",
    color: "#00ADD8",
    description: "Modern language designed for efficiency, concurrency, and performance.",
    courses: 15,
    students: 450,
  },
]

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {languages.map((language) => (
          <button
            key={language.name}
            className={`relative p-4 rounded-lg border transition-all ${
              selectedLanguage === language.name
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-sm"
                : "border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/10"
            }`}
            onClick={() => setSelectedLanguage(language.name)}
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${language.color}20` }}
                >
                  <Image
                    src={language.icon || `/placeholder.svg?text=${language.name.charAt(0)}`}
                    alt={language.name}
                    width={32}
                    height={32}
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `/placeholder.svg?text=${language.name.charAt(0)}`
                    }}
                  />
                </div>
              </div>
              <span className="font-medium text-center">{language.name}</span>
            </div>
          </button>
        ))}
      </div>

      {selectedLanguage && (
        <Card className="mt-8 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/10">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div
                  className="w-24 h-24 rounded-full mx-auto flex items-center justify-center"
                  style={{
                    backgroundColor: `${languages.find((l) => l.name === selectedLanguage)?.color}20`,
                  }}
                >
                  <Image
                    src={
                      languages.find((l) => l.name === selectedLanguage)?.icon ||
                      `/placeholder.svg?text=${selectedLanguage?.charAt(0)}`
                    }
                    alt={selectedLanguage}
                    width={64}
                    height={64}
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `/placeholder.svg?text=${selectedLanguage.charAt(0)}`
                    }}
                  />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-2">{selectedLanguage}</h3>
                <p className="text-muted-foreground mb-4">
                  {languages.find((l) => l.name === selectedLanguage)?.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                    {languages.find((l) => l.name === selectedLanguage)?.courses} courses
                  </div>
                  <div className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm">
                    {languages.find((l) => l.name === selectedLanguage)?.students.toLocaleString()} students
                  </div>
                </div>
                <Button asChild>
                  <Link href={`/courses?language=${selectedLanguage.toLowerCase()}`}>
                    Browse {selectedLanguage} Courses <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

