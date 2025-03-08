import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Users, Award, BookOpen, Briefcase, GraduationCap, Globe, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Transforming Programming Education for the <span className="text-primary">Digital Age</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We're on a mission to make high-quality programming education accessible to everyone, regardless of
                their background or location.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/courses">Explore Our Courses</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://img.freepik.com/free-vector/business-team-with-laptops-look-digital-presentation-with-charts-digital-presentation-office-online-meeting-visual-data-representation-concept-bright-vibrant-violet-isolated-illustration_335657-579.jpg?height=400&width=600&text=Team+Meeting"
                  alt="Team meeting"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-xl text-muted-foreground">
              Founded in 2020, StackSpire was born from a simple idea: programming education should be accessible,
              engaging, and effective for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                Our founders, a team of experienced software engineers and educators, recognized a significant gap in
                programming education. Traditional learning methods weren't keeping pace with the rapidly evolving tech
                industry, and many students struggled to apply theoretical knowledge to real-world scenarios.
              </p>
              <p className="text-lg">
                We set out to create a platform that combines structured learning paths with hands-on practice,
                real-world projects, and community support. Our approach focuses on building practical skills that
                employers value, while making the learning journey engaging and personalized.
              </p>
              <p className="text-lg">
                Today, StackSpire serves over 10,000 students worldwide, with a growing library of courses covering
                everything from web development to data science. Our community of learners and mentors continues to
                grow, united by a passion for technology and lifelong learning.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full"></div>
              <div className="relative z-10 bg-card border rounded-lg p-6 shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">2020</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Founded in Delhi</h3>
                      <p className="text-muted-foreground">
                        StackSpire was established with a mission to revolutionize programming education.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">2021</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">First 1,000 Students</h3>
                      <p className="text-muted-foreground">
                        Reached our first milestone of 1,000 active students on the platform.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">2022</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Global Expansion</h3>
                      <p className="text-muted-foreground">
                        Expanded our team and course offerings to serve students worldwide.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">2025</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">1000+ Students</h3>
                      <p className="text-muted-foreground">
                        Surpassed 1000 students and launched our advanced certification program.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-muted-foreground">
              We're dedicated to democratizing programming education and empowering the next generation of developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-muted hover:border-primary/20 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Accessibility</h3>
                <p className="text-muted-foreground">
                  Making high-quality programming education accessible to everyone, regardless of their background or
                  location.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-muted hover:border-primary/20 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously improving our teaching methods and platform to provide the most effective learning
                  experience.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-muted hover:border-primary/20 transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Employability</h3>
                <p className="text-muted-foreground">
                  Focusing on practical, industry-relevant skills that help our students advance their careers in
                  technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Our diverse team of experts is passionate about education and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">These core principles guide everything we do at StackSpire.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Student-Centered Learning</h3>
                <p className="text-muted-foreground">
                  We put our students' needs first, designing every aspect of our platform to support their learning
                  journey.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
                <p className="text-muted-foreground">
                  We're always learning and evolving, just like our students, to provide the best possible education.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Practical Application</h3>
                <p className="text-muted-foreground">
                  We believe in learning by doing, with a focus on real-world projects and practical skills.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Community and Collaboration</h3>
                <p className="text-muted-foreground">
                  We foster a supportive community where students can learn from each other and grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground">
              We're proud of the difference we're making in our students' lives and careers.
            </p>
          </div>

          <Tabs defaultValue="students" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="students">Student Success</TabsTrigger>
                <TabsTrigger value="employers">Employer Partnerships</TabsTrigger>
                <TabsTrigger value="community">Community Initiatives</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="students" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-card">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-center">85%</h3>
                    <p className="text-center text-muted-foreground">
                      of our students report significant skill improvement within the first 3 months
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-center">70%</h3>
                    <p className="text-center text-muted-foreground">
                      of job-seeking students find employment within 6 months of completing our courses
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-center">92%</h3>
                    <p className="text-center text-muted-foreground">
                      student satisfaction rate, based on post-course surveys
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Student Success Stories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=48&width=48&text=JD"
                          alt="John Doe"
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">John Doe</h4>
                      <p className="text-sm text-muted-foreground mb-2">From retail worker to software developer</p>
                      <p className="text-sm">
                        "StackSpire helped me transition from a retail job to a career in tech. The structured learning
                        path and hands-on projects gave me the skills and confidence I needed."
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=48&width=48&text=JS"
                          alt="Jane Smith"
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Jane Smith</h4>
                      <p className="text-sm text-muted-foreground mb-2">Self-taught to professional developer</p>
                      <p className="text-sm">
                        "As a self-taught programmer, I had knowledge gaps that were holding me back. StackSpire helped
                        me fill those gaps and advance my career to the next level."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="employers" className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center justify-center p-6 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-muted-foreground">Company 1</div>
                </div>
                <div className="flex items-center justify-center p-6 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-muted-foreground">Company 2</div>
                </div>
                <div className="flex items-center justify-center p-6 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-muted-foreground">Company 3</div>
                </div>
                <div className="flex items-center justify-center p-6 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-muted-foreground">Company 4</div>
                </div>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Employer Testimonials</h3>
                <div className="space-y-4">
                  <p className="italic">
                    "StackSpire graduates consistently demonstrate strong practical skills and problem-solving abilities.
                    They're able to contribute to our projects from day one."
                  </p>
                  <p className="text-sm text-right">- Technical Director, Tech Innovations Inc.</p>
                </div>
                <div className="mt-4 space-y-4">
                  <p className="italic">
                    "We've hired multiple developers who trained on StackSpire, and they've all been excellent additions
                    to our team. The platform's focus on real-world applications aligns perfectly with what we look for
                    in candidates."
                  </p>
                  <p className="text-sm text-right">- CTO, StartUp Solutions</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="community" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-card">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-center">Scholarship Program</h3>
                    <p className="text-center text-muted-foreground">
                      We've provided over 500 scholarships to students from underrepresented groups in tech, helping to
                      increase diversity in the industry.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-center">Community Workshops</h3>
                    <p className="text-center text-muted-foreground">
                      Our free coding workshops have introduced programming to over 2,000 people in communities with
                      limited access to tech education.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Upcoming Initiatives</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Expanding our scholarship program to reach 1,000 students by 2025</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                    <span>
                      Launching a mentorship program connecting industry professionals with aspiring developers
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                    <span>Partnering with schools to introduce coding curriculum in underserved communities</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Learning Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your programming journey today and become part of our global community of learners and innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/register">Get Started for Free</Link>
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
              size="lg"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const teamMembers = [
  {
    name: "Sazia Karol",
    role: "",
    bio: "software engineer with 2 years of experience at leading tech companies.",
    image: "/placeholder.svg?height=200&width=200&text=SJ",
  },
  {
    name: "Bhoomi Gupta",
    role: "",
    bio: "Full-stack developer with a passion for making complex concepts accessible.",
    image: "/placeholder.svg?height=200&width=200&text=MC",
  },
  {
    name: "Sonia Gupta",
    role: "",
    bio: "Software engineer with 2 years of experience at leading tech companies.",
    image: "/placeholder.svg?height=200&width=200&text=ER",
  },
  {
    name: "Ankita Yadav",
    role: "",
    bio: "Software engineer.",
    image: "/placeholder.svg?height=200&width=200&text=DK",
  },
]

