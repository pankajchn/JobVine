const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { dbConnect } = require("./config/dbConfig");
const authRouter = require("./routes/authRouter");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use("/api", authRouter)












dbConnect()
  .then(function (res) {
    console.log(`Database connection successfull`);
    app.listen(process.env.PORT, function () {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(function (err) {
    console.log(`Database connection failes `, err.message);
  });
