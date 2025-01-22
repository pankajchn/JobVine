const User = require("../models/UserModel");

//signup api

const signup = async function (req, res) {
  try {
    const { name, email, password, mobileNumber, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: `User already registered with this email` });
    }

    const userData = {
      name,
      email,
      password,
      mobileNumber,
    };

    if (role === "jobseeker") userData.role = "jobseeker";
    if (role === "recruiter") userData.role = "recruiter";

    console.log(userData);

    const user = await User.create(userData);

    res.json({ message: `Registration successfull`, data: user });
  } catch (err) {
    res.status(400).json({ message: `Error: ${err.message}` });
  }
};

module.exports = signup;
