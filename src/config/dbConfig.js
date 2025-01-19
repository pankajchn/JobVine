const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbConnect = async function () {
  await mongoose.connect(process.env.MONGO_URI);
};

module.exports = { dbConnect };