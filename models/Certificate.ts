import mongoose from "mongoose"

const CertificateSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  issueDate: {
    type: Date,
    default: Date.now,
  },
  certificateId: {
    type: String,
    required: true,
    unique: true,
  },
  verificationUrl: {
    type: String,
    required: true,
  },
})

export const Certificate = mongoose.models.Certificate || mongoose.model("Certificate", CertificateSchema)

