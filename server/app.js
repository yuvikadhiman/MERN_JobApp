require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const path=require('path')
const app = express();
const  AuthenticateUser=require('./middleware/authentication')

// connect db
const connectDB = require("./db/connect");
// routers
const jobsRouter = require("./routes/jobs");
const authRouter = require("./routes/auth");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// app.set('trust proxy', 1);
// app.use(
//   rateLimiter({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 100, // limit each IP to 100 requests per windowMs
//   })
// );

app.use(express.json());
app.use(cors());


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs",AuthenticateUser, jobsRouter);


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
