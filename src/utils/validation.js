const validator = require("validator");

//in this function i have to validate the sign up data which is coming from req.body
//name, email, password, mobileNumber, role from req.body
// role = jobseeker --> degree, institution, year, company, jobRole, duration, skills, resume

const validateSignUpData = (req) => {
  const {
    name,
    email,
    password,
    mobileNumber,
    role,
    degree,
    institution,
    year,
    company,
    jobRole,
    duration,
    skills,
    resume,
  } = req.body;

  if (
    !name ||
    !email ||
    !password ||
    !mobileNumber ||
    !role ||
    !degree ||
    !institution ||
    !year ||
    !company ||
    !jobRole ||
    !duration ||
    !skills ||
    !resume
  ) {
    throw new Error("All fields are required.");
  } else if (name.length < 3 || name.length > 30) {
    throw new Error("Name should be between 3 to 30 characters long.");
  } else if (!validator.isEmail(email)) {
    throw new Error("Enter a valid email address.");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Enter a strong password.");
  } else if (!validator.isMobilePhone(mobileNumber, "en-IN")) {
    throw new Error("Enter a valid mobile number.");
  } else if (!/^\d{4}$/.test(year)) {
    throw new Error("Year must be a 4-digit number.");
  } else if (company.length < 2 || company.length > 100) {
    throw new Error("Company name must be between 2 and 100 characters.");
  } else if (jobRole.length < 2 || jobRole.length > 50) {
    throw new Error("Job role must be between 2 and 50 characters.");
  } else if (!Array.isArray(skills) || skills.length === 0) {
    throw new Error("At least one skill must be provided.");
  }
};

module.exports = validateSignUpData;
