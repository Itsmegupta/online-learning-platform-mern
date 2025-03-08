import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/db"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Add this export to make the route dynamic
export const dynamic = "force-dynamic"

// Get user progress
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    // Check if user is authenticated
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await connectToDatabase()

    // Mock user progress data for now
    const userProgress = {
      user: session.user.id,
      enrolledCourses: [
        {
          course: {
            _id: "1",
            title: "JavaScript Fundamentals",
            slug: "javascript-fundamentals",
            image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=2070&auto=format&fit=crop",
          },
          progress: 65,
          enrolledAt: new Date(),
        },
        {
          course: {
            _id: "2",
            title: "React Development",
            slug: "react-development",
            image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop",
          },
          progress: 30,
          enrolledAt: new Date(),
        },
      ],
      completedCourses: [
        {
          course: {
            _id: "3",
            title: "HTML & CSS Basics",
            slug: "html-css-basics",
            image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=2070&auto=format&fit=crop",
          },
          enrolledAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
          completedAt: new Date(),
        },
      ],
      certificates: [
        {
          _id: "1",
          title: "HTML & CSS Basics",
          course: "3",
          issueDate: new Date(),
        },
      ],
      streak: {
        current: 12,
        longest: 15,
        lastActivity: new Date(),
      },
    }

    return NextResponse.json(userProgress)
  } catch (error) {
    console.error("Error fetching user progress:", error)
    return NextResponse.json({ error: "Failed to fetch user progress" }, { status: 500 })
  }
}

// Update user progress
export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    // Check if user is authenticated
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const updateData = await request.json()

    // Mock update response
    const userProgress = {
      user: session.user.id,
      message: "Progress updated successfully",
      updatedData: updateData,
    }

    return NextResponse.json(userProgress)
  } catch (error) {
    console.error("Error updating user progress:", error)
    return NextResponse.json({ error: "Failed to update user progress" }, { status: 500 })
  }
}

