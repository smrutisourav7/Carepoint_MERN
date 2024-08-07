import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dbConnect from "./database/dbConnect.js";
import messageRouter from "./routes/message.route.js";
import userRouter from "./routes/user.route.js";
import appointmentRouter from "./routes/appointment.route.js";
import { errorMiddleware } from "./middlewares/error.js";
const app = express();
config({ path: "./.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

dbConnect();

app.use(errorMiddleware);

export default app;
