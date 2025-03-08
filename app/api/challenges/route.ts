import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/db"
import { Challenge } from "@/models/Challenge"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Get all challenges or filter by query parameters
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const difficulty = searchParams.get("difficulty")
    const category = searchParams.get("category")
    const search = searchParams.get("search")

    // Build query
    const query: any = {}

    if (difficulty) query.difficulty = difficulty
    if (category) query.category = category
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { tags: { $in: [new RegExp(search, "i")] } },
      ]
    }

    await connectToDatabase()

    const challenges = await Challenge.find(query)
      .select("title description difficulty category timeEstimate participants rating slug")
      .sort({ createdAt: -1 })
      .limit(20)

    return NextResponse.json(challenges)
  } catch (error) {
    console.error("Error fetching challenges:", error)
    return NextResponse.json({ error: "Failed to fetch challenges" }, { status: 500 })
  }
}

// Create a new challenge (protected route - only for instructors and admins)
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)

    // Check if user is authenticated and has instructor or admin role
    if (!session || (session.user.role !== "instructor" && session.user.role !== "admin")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const challengeData = await request.json()

    // Validate required fields
    const requiredFields = [
      "title",
      "description",
      "difficulty",
      "category",
      "instructions",
      "starterCode",
      "testCases",
    ]
    for (const field of requiredFields) {
      if (!challengeData[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 })
      }
    }

    // Create slug from title
    challengeData.slug = challengeData.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-")

    // Set creator to current user
    challengeData.creator = session.user.id

    await connectToDatabase()

    // Check if slug already exists
    const existingChallenge = await Challenge.findOne({ slug: challengeData.slug })
    if (existingChallenge) {
      // Append random string to make slug unique
      challengeData.slug = `${challengeData.slug}-${Math.random().toString(36).substring(2, 8)}`
    }

    const challenge = new Challenge(challengeData)
    await challenge.save()

    return NextResponse.json(challenge, { status: 201 })
  } catch (error) {
    console.error("Error creating challenge:", error)
    return NextResponse.json({ error: "Failed to create challenge" }, { status: 500 })
  }
}

