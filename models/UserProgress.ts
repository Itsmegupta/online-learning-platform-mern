import mongoose from "mongoose"

const UserProgressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  enrolledCourses: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
      },
      enrolledAt: {
        type: Date,
        default: Date.now,
      },
      progress: {
        type: Number,
        default: 0,
      },
      lastActivity: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  completedCourses: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
      },
      enrolledAt: {
        type: Date,
        required: true,
      },
      completedAt: {
        type: Date,
        required: true,
      },
    },
  ],
  completedLessons: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
      },
      module: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      lesson: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      completedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  certificates: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Certificate",
    },
  ],
  completedChallenges: [
    {
      challenge: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Challenge",
        required: true,
      },
      completedAt: {
        type: Date,
        default: Date.now,
      },
      solution: {
        type: String,
      },
    },
  ],
  streak: {
    current: {
      type: Number,
      default: 0,
    },
    longest: {
      type: Number,
      default: 0,
    },
    lastActivity: {
      type: Date,
      default: Date.now,
    },
  },
  learningPath: {
    path: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LearningPath",
    },
    progress: {
      type: Number,
      default: 0,
    },
    startedAt: {
      type: Date,
    },
  },
})

export const UserProgress = mongoose.models.UserProgress || mongoose.model("UserProgress", UserProgressSchema)

