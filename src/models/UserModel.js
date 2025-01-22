const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    mobileNumber: {
      type: String,
    },
    role: {
      type: String,
      enum: ["jobseeker", "recruiter", "admin"],
      default: "jobseeker",
    },
    jobseeker: {
      education: [
        {
          degree: {
            type: String,
          },
          institution: {
            type: String,
          },
          year: {
            type: Number,
          },
        },
      ],
      experience: [
        {
          company: {
            type: String,
          },
          jobRole: {
            type: String,
          },
          duration: {
            type: Number,
          },
        },
      ],
      resume: {
        type: String,
      },
      skills: {
        type: [String],
      },
    },
    recruiter: {
      companyName: {
        type: String,
      },
      companyWebsite: {
        type: String,
      },
      permissions: {
        type: [String],
        default: ["post_jobs", "view_applicants", "manage_jobs"],
      },
    },
    admin: {
      permissions: {
        type: [String],
        default: ["manage_jobseeker", "manage_recruiter"],
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
