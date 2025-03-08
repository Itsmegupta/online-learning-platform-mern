import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 md:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -right-[10%] w-[70%] h-[140%] bg-gradient-to-b from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[30%] -left-[10%] w-[50%] h-[140%] bg-gradient-to-t from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <Badge className="mb-4 px-3 py-1 text-sm bg-white/20 text-white border-white/30 hover:bg-white/30">
              The Future of Programming Education
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Master Programming Skills with <span className="text-yellow-300">Personalized Learning</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0">
              An interactive learning platform designed to help students build industry-relevant programming skills
              through personalized learning paths, coding challenges, and project-based learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="px-8 bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link href="/register">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-blue-600 hover:bg-white/10" asChild>
                <Link href="/courses">Explore Courses</Link>
              </Button>
            </div>
            <div className="pt-4 flex items-center justify-center lg:justify-start space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-blue-600 overflow-hidden">
                    <Image
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${i * 10 + 10}.jpg`}
                      alt="User avatar"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-blue-100">
                Join over <span className="font-medium text-white">1,000</span> students
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg opacity-10 blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg overflow-hidden">
                <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-500">
                  <div className="flex space-x-1.5 px-2 py-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="h-6 bg-white/10 rounded w-3/4"></div>
                    <div className="h-4 bg-white/10 rounded w-1/2"></div>
                    <div className="h-4 bg-white/10 rounded w-5/6"></div>
                    <div className="h-32 bg-white/10 rounded relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-blue-100 text-sm">
                        Interactive Code Editor
                      </div>
                    </div>
                    <div className="h-4 bg-white/10 rounded w-2/3"></div>
                    <div className="h-4 bg-white/10 rounded w-3/4"></div>
                    <div className="h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center text-white text-sm font-medium">
                      Run Code
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400/30 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-400/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

