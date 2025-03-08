import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/db"
import { Course } from "@/models/Course"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Get all courses or filter by query parameters
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const level = searchParams.get("level")
    const language = searchParams.get("language")
    const search = searchParams.get("search")

    // Build query
    const query: any = {}

    if (category) query.category = category
    if (level) query.level = level
    if (language) query.language = language
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { tags: { $in: [new RegExp(search, "i")] } },
      ]
    }

    // Only return published courses
    query.isPublished = true

    await connectToDatabase()

    const courses = await Course.find(query)
      .select("title description level duration image rating students slug category language")
      .sort({ createdAt: -1 })
      .limit(20)

    return NextResponse.json(courses)
  } catch (error) {
    console.error("Error fetching courses:", error)
    return NextResponse.json({ error: "Failed to fetch courses" }, { status: 500 })
  }
}

// Create a new course (protected route - only for instructors and admins)
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    // Check if user is authenticated and has instructor or admin role
    if (!session || (session.user.role !== "instructor" && session.user.role !== "admin")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const courseData = await request.json()

    // Validate required fields
    const requiredFields = [
      "title",
      "description",
      "longDescription",
      "level",
      "category",
      "language",
      "image",
      "duration",
    ]
    for (const field of requiredFields) {
      if (!courseData[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 })
      }
    }

    // Create slug from title
    courseData.slug = courseData.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")

    // Set instructor to current user
    courseData.instructor = session.user.id

    await connectToDatabase()

    // Check if slug already exists
    const existingCourse = await Course.findOne({ slug: courseData.slug })
    if (existingCourse) {
      // Append random string to make slug unique
      courseData.slug = `${courseData.slug}-${Math.random().toString(36).substring(2, 8)}`
    }

    const course = new Course(courseData)
    await course.save()

    return NextResponse.json(course, { status: 201 })
  } catch (error) {
    console.error("Error creating course:", error)
    return NextResponse.json({ error: "Failed to create course" }, { status: 500 })
  }
}

