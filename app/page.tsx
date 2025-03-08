import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  BookOpen,
  Award,
  Users,
  BarChart,
  ArrowRight,
  CheckCircle,
  Zap,
  Brain,
  Rocket,
  Globe,
  Target,
} from "lucide-react"
import HeroSection from "@/components/hero-section"
import FeatureCard from "@/components/feature-card"
import CourseCard from "@/components/course-card"
import TestimonialCard from "@/components/testimonial-card"
import StatCard from "@/components/stat-card"
import LanguageSelector from "@/components/language-selector"
import LearningPathCard from "@/components/learning-path-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <StatCard value="1,000+" label="Active Students" icon={<Users className="h-6 w-6 text-purple-500" />} />
            <StatCard value="20+" label="Expert Instructors" icon={<Award className="h-6 w-6 text-blue-500" />} />
            <StatCard value="50+" label="Courses" icon={<BookOpen className="h-6 w-6 text-green-500" />} />
            <StatCard value="95%" label="Success Rate" icon={<Target className="h-6 w-6 text-red-500" />} />
          </div>
        </div>
      </section>

      {/* Programming Languages Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Choose Your Programming Language
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start your coding journey with your preferred programming language. We offer comprehensive courses in all
              major languages.
            </p>
          </div>
          <LanguageSelector />
        </div>
      </section>

      {/* Personalized Learning Paths */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Personalized Learning Paths
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Tailored learning experiences designed to match your skill level, goals, and learning style.
              </p>
            </div>
            <Button
              className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              asChild
            >
              <Link href="/learning-paths">
                Find Your Path <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LearningPathCard
              title="Web Development"
              description="Become a full-stack web developer with our comprehensive path from HTML basics to advanced React and Node.js"
              image="https://ik.imagekit.io/ably/ghost/prod/2023/12/choosing-the-best-javascript-frameworks-for-your-next-project.png?height=200&width=300&text=Web+Dev"
              level="Beginner to Advanced"
              duration="6 months"
              technologies={["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"]}
              color="blue"
            />
            <LearningPathCard
              title="Data Science"
              description="Master data analysis, visualization, and machine learning with Python and specialized libraries"
              image="https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169850.jpg?height=200&width=300&text=Data+Science"
              level="Intermediate"
              duration="8 months"
              technologies={["Python", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow"]}
              color="purple"
            />
            <LearningPathCard
              title="Mobile Development"
              description="Build cross-platform mobile apps using React Native or native iOS/Android development"
              image="https://img.freepik.com/premium-vector/app-development-concept-with-people-scene-vector-illustration_198565-2473.jpg?height=200&width=300&text=Mobile+Dev"
              level="Intermediate"
              duration="5 months"
              technologies={["React Native", "Swift", "Kotlin", "Firebase", "Redux"]}
              color="green"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              A Complete Learning Experience
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform offers everything you need to master programming skills through interactive lessons,
              real-world projects, and personalized learning.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Brain className="h-10 w-10 text-purple-500" />}
              title="Personalized Learning"
              description="AI-powered learning paths tailored to your skill level and goals."
              color="purple"
            />
            <FeatureCard
              icon={<Code className="h-10 w-10 text-blue-500" />}
              title="Interactive Coding"
              description="Practice with real-time feedback and hands-on coding challenges."
              color="blue"
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-green-500" />}
              title="Community Support"
              description="Connect with peers and mentors for collaborative learning."
              color="green"
            />
            <FeatureCard
              icon={<Award className="h-10 w-10 text-amber-500" />}
              title="Certification"
              description="Earn industry-recognized certificates upon completion."
              color="amber"
            />
          </div>
        </div>
      </section>

      {/* Coding Challenges Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Test Your Skills with Coding Challenges
              </h2>
              <p className="text-muted-foreground mb-6">
                Put your programming knowledge to the test with our collection of coding challenges. From
                beginner-friendly puzzles to advanced algorithmic problems, there's something for everyone.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-amber-500" />
                  <span>Daily challenges to build coding habits</span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-amber-500" />
                  <span>Competitive leaderboards</span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-amber-500" />
                  <span>Real-world problem solving</span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-amber-500" />
                  <span>Multiple difficulty levels</span>
                </li>
              </ul>
              <Button
                className="mt-6 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                asChild
              >
                <Link href="/challenges">Try Challenges</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white dark:bg-gray-800 border rounded-lg shadow-lg overflow-hidden">
                <div className="p-1 bg-gradient-to-r from-amber-500 to-orange-500">
                  <div className="flex space-x-1.5 px-2 py-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-mono text-lg font-semibold mb-2">FizzBuzz Challenge</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Write a function that prints numbers from 1 to n. For multiples of 3, print "Fizz" instead of the
                      number. For multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print
                      "FizzBuzz".
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto">
                    <pre className="text-blue-600 dark:text-blue-400">
                      function <span className="text-purple-600 dark:text-purple-400">fizzBuzz</span>(n) {"{"}
                    </pre>
                    <pre className="text-gray-600 dark:text-gray-400"> // Your code here</pre>
                    <pre className="text-blue-600 dark:text-blue-400">{"}"}</pre>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
                    >
                      Submit Solution
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Popular Courses
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Explore our most popular programming courses designed to help you build industry-relevant skills
              </p>
            </div>
            <Button
              variant="outline"
              className="mt-4 md:mt-0 border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950/50"
              asChild
            >
              <Link href="/courses" className="flex items-center">
                View All Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourseCard
              title="JavaScript Fundamentals"
              description="Learn the basics of JavaScript programming language with practical examples and projects."
              level="Beginner"
              duration="4 weeks"
              image="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070&auto=format&fit=crop"
              rating={4.8}
              students={1245}
              color="blue"
            />
            <CourseCard
              title="Python for Data Science"
              description="Master Python for data analysis, visualization, and machine learning applications."
              level="Intermediate"
              duration="6 weeks"
              image="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2074&auto=format&fit=crop"
              rating={4.9}
              students={987}
              color="green"
            />
            <CourseCard
              title="Full Stack MERN"
              description="Build complete web applications with MongoDB, Express, React, and Node.js."
              level="Advanced"
              duration="8 weeks"
              image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop"
              rating={4.7}
              students={756}
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* Collaboration and Community */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Collaboration and Community
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learning is better together. Connect with fellow students, collaborate on projects, and get help when you
              need it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-pink-200 dark:border-pink-800 hover:shadow-md hover:shadow-pink-100 dark:hover:shadow-pink-900/20 transition-all">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center p-6">
                <Users className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Discussion Forums</h3>
                <p className="text-muted-foreground mb-4">
                  Ask questions, share insights, and discuss programming concepts with a community of learners and
                  experts.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-pink-200 text-pink-600 hover:bg-pink-50 dark:border-pink-800 dark:text-pink-400 dark:hover:bg-pink-950/50"
                  asChild
                >
                  <Link href="/community/forums">Join Discussions</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-rose-200 dark:border-rose-800 hover:shadow-md hover:shadow-rose-100 dark:hover:shadow-rose-900/20 transition-all">
              <div className="h-48 bg-gradient-to-br from-rose-400 to-red-500 flex items-center justify-center p-6">
                <Rocket className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Group Projects</h3>
                <p className="text-muted-foreground mb-4">
                  Collaborate with other students on real-world projects to build your portfolio and gain team
                  experience.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-rose-200 text-rose-600 hover:bg-rose-50 dark:border-rose-800 dark:text-rose-400 dark:hover:bg-rose-950/50"
                  asChild
                >
                  <Link href="/community/projects">Find Projects</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-red-200 dark:border-red-800 hover:shadow-md hover:shadow-red-100 dark:hover:shadow-red-900/20 transition-all">
              <div className="h-48 bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center p-6">
                <Globe className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Live Events</h3>
                <p className="text-muted-foreground mb-4">
                  Participate in webinars, coding competitions, and networking events with industry professionals.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950/50"
                  asChild
                >
                  <Link href="/community/events">View Events</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Progress Tracking Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                Track Your Progress and Get Certified
              </h2>
              <p className="text-muted-foreground mb-6">
                Monitor your learning journey with our comprehensive analytics dashboard. Earn certificates to showcase
                your skills to employers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-teal-500" />
                  <span>Visual progress tracking across all courses</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-teal-500" />
                  <span>Skill assessments to identify strengths and weaknesses</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-teal-500" />
                  <span>Learning streak and habit formation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-teal-500" />
                  <span>Industry-recognized certificates</span>
                </li>
              </ul>
              <Button
                className="mt-6 bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700"
                asChild
              >
                <Link href="/dashboard">View Your Dashboard</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white dark:bg-gray-800 border rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 border-b bg-gradient-to-r from-teal-500/10 to-green-500/10 dark:from-teal-500/20 dark:to-green-500/20">
                  <div className="flex items-center">
                    <BarChart className="h-5 w-5 mr-2 text-teal-500" />
                    <h3 className="font-semibold">Learning Analytics</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">JavaScript</span>
                        <span>75%</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-teal-500 to-green-500 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">React</span>
                        <span>60%</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Node.js</span>
                        <span>45%</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">MongoDB</span>
                        <span>30%</span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 border rounded-md bg-gradient-to-r from-teal-500/5 to-green-500/5 dark:from-teal-500/10 dark:to-green-500/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Award className="h-10 w-10 text-amber-500 mr-3" />
                          <div>
                            <h4 className="font-semibold">JavaScript Fundamentals</h4>
                            <p className="text-sm text-muted-foreground">Certificate of Completion</p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-teal-200 text-teal-600 hover:bg-teal-50 dark:border-teal-800 dark:text-teal-400 dark:hover:bg-teal-950/50"
                        >
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-950/20 dark:to-violet-950/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              What Our Students Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our students who have transformed their careers through our platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="This platform completely changed my career path. I went from knowing nothing about coding to landing a job as a frontend developer in just 6 months."
              author="•Sazia Karol"
              role="Frontend Developer"
              company="Tech Innovations"
              avatar="https://randomuser.me/api/portraits/women/44.jpg"
              color="indigo"
            />
            <TestimonialCard
              quote="The interactive challenges and projects helped me apply what I learned immediately. The community support was invaluable during my learning journey."
              author="Michael Chen"
              role="Full Stack Developer"
              company="StartUp Inc."
              avatar="https://randomuser.me/api/portraits/men/32.jpg"
              color="violet"
            />
            <TestimonialCard
              quote="I tried many online courses before, but this platform's personalized learning path and mentor support made all the difference in my success."
              author="Emily Rodriguez"
              role="Software Engineer"
              company="Global Systems"
              avatar="https://randomuser.me/api/portraits/women/68.jpg"
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Learning Journey?</h2>
              <p className="mb-6 text-blue-100 max-w-md">
                Join thousands of students who are building their programming skills and advancing their careers with
                our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                  <Link href="/register">Get Started for Free</Link>
                </Button>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                  size="lg"
                  asChild
                >
                  <Link href="/courses">Explore Courses</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                    <span className="text-white">Access to 500+ courses</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                    <span className="text-white">Interactive coding challenges</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                    <span className="text-white">Personalized learning path</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                    <span className="text-white">Community support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                    <span className="text-white">Industry-recognized certificates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

