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
  phoneNumber: {
    type: String,
  },
  role: {
    type: String,
    enum: ["jobseeker", "recruiter", "admin"],
    default: "Jobseeker",
  },
  jobseeker: {
    education: [
      {
        degree: {
          type: String,
        },
        institute: {
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
        role: {
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
  recruiter:{
    companyName: {
        type: String,
    },
    companyWebsite: {
        type: String
    },
    permissions: {
        type: [String],
        default: ["post_jobs", "manage_jobs", "view_applicants"]
    }
  },
  admin: {
    permissions: {
        type: [String],
        default: [ "manage_applicants", "m"]
    }
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
