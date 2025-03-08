import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import CourseCard from "@/components/course-card"

export default function CoursesPage() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">Explore Our Courses</h1>
        <p className="text-muted-foreground max-w-2xl">
          Discover a wide range of programming courses designed to help you build industry-relevant skills and advance
          your career.
        </p>
        <div className="w-full max-w-md flex items-center relative">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search courses..." className="pl-10" />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="web">Web Development</TabsTrigger>
            <TabsTrigger value="mobile">Mobile Development</TabsTrigger>
            <TabsTrigger value="data">Data Science</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourseCard
              title="JavaScript Fundamentals"
              description="Learn the basics of JavaScript programming language."
              level="Beginner"
              duration="4 weeks"
              image="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?height=200&width=300"
            />
            <CourseCard
              title="React Development"
              description="Build modern web applications with React."
              level="Intermediate"
              duration="6 weeks"
              image="https://qualitythought.in/wp-content/uploads/2024/08/the_future_of_web_development_reactjs.webp?height=200&width=300"
            />
            <CourseCard
              title="Full Stack MERN"
              description="Master MongoDB, Express, React, and Node.js."
              level="Advanced"
              duration="8 weeks"
              image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?height=200&width=300"
            />
            <CourseCard
              title="Python for Beginners"
              description="Start your programming journey with Python."
              level="Beginner"
              duration="4 weeks"
              image="https://goedu.ac/wp-content/uploads/2021/11/Python-for-beginners.png?height=200&width=300"
            />
            <CourseCard
              title="Data Structures & Algorithms"
              description="Master fundamental computer science concepts."
              level="Intermediate"
              duration="10 weeks"
              image="https://img.freepik.com/premium-photo/women-touching-virtual-screen-tick-mark-documents-online-approve-paperless-quality-assurance-erp-management-prepare-check-approve-concepts-document-management-paperless_29488-9884.jpg?height=200&width=300"
            />
            <CourseCard
              title="Mobile App Development"
              description="Build cross-platform mobile apps with React Native."
              level="Intermediate"
              duration="8 weeks"
              image="https://img.freepik.com/free-photo/representation-user-experience-interface-design-smartphone_23-2150165977.jpg?height=200&width=300"
            />
          </div>
          <div className="flex justify-center">
            <Button variant="outline">Load More Courses</Button>
          </div>
        </TabsContent>

        <TabsContent value="web" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourseCard
              title="HTML & CSS Basics"
              description="Learn the fundamentals of web development."
              level="Beginner"
              duration="3 weeks"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeNSpNdaYftNolS6k61F_sz4iYJt98JuKCfg&s?height=200&width=300"
            />
            <CourseCard
              title="JavaScript Fundamentals"
              description="Learn the basics of JavaScript programming language."
              level="Beginner"
              duration="4 weeks"
              image="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?height=200&width=300"
            />
            <CourseCard
              title="React Development"
              description="Build modern web applications with React."
              level="Intermediate"
              duration="6 weeks"
              image="https://www.weblineindia.com/wp-content/uploads/2022/02/React-Native-Development-Company.jpg?height=200&width=300"
            />
          </div>
        </TabsContent>

        {/* Other tab contents would be similar */}
      </Tabs>
    </div>
  )
}

