import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/db"
import { Course } from "@/models/Course"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Get a single course by slug
export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params

    await connectToDatabase()

    const course = await Course.findOne({ slug, isPublished: true }).populate("instructor", "name profileImage bio")

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 })
    }

    return NextResponse.json(course)
  } catch (error) {
    console.error("Error fetching course:", error)
    return NextResponse.json({ error: "Failed to fetch course" }, { status: 500 })
  }
}

// Update a course (protected route - only for course instructor or admin)
export async function PUT(request: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params
    const session = await getServerSession(authOptions)

    // Check if user is authenticated
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await connectToDatabase()

    // Find the course
    const course = await Course.findOne({ slug })

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 })
    }

    // Check if user is the instructor or an admin
    if (course.instructor.toString() !== session.user.id && session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const updateData = await request.json()

    // Don't allow changing the instructor
    delete updateData.instructor

    // Update the course
    const updatedCourse = await Course.findOneAndUpdate(
      { slug },
      { ...updateData, updatedAt: new Date() },
      { new: true },
    ).populate("instructor", "name profileImage bio")

    return NextResponse.json(updatedCourse)
  } catch (error) {
    console.error("Error updating course:", error)
    return NextResponse.json({ error: "Failed to update course" }, { status: 500 })
  }
}

// Delete a course (protected route - only for course instructor or admin)
export async function DELETE(request: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params
    const session = await getServerSession(authOptions)

    // Check if user is authenticated
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await connectToDatabase()

    // Find the course
    const course = await Course.findOne({ slug })

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 })
    }

    // Check if user is the instructor or an admin
    if (course.instructor.toString() !== session.user.id && session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    // Delete the course
    await Course.findOneAndDelete({ slug })

    return NextResponse.json({ message: "Course deleted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error deleting course:", error)
    return NextResponse.json({ error: "Failed to delete course" }, { status: 500 })
  }
}

