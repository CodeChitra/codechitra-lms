import * as dynamoose from "dynamoose";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import courseRoutes from "./routes/course.route";
import clerkRoutes from "./routes/clerk.route";
import transactionRoutes from "./routes/transaction.routes";
import userCourseProgressRoutes from "./routes/user-course-progress.routes";
import serverless from "serverless-http";
import seed from "./seed/seedDynamodb";
import {
  clerkMiddleware,
  createClerkClient,
  requireAuth,
} from "@clerk/express";

import { create } from "domain";
// Route Imports

// Configurations
dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

if (!isProduction) {
  dynamoose.aws.ddb.local();
}

export const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(clerkMiddleware());
// Routes

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use("/courses", courseRoutes);
app.use("/users/clerk", requireAuth(), clerkRoutes);
app.use("/transactions", requireAuth(), transactionRoutes);
app.use("/users/course-progress", requireAuth(), userCourseProgressRoutes);
// Start Server

const PORT = process.env.port || 3000;

if (!isProduction) {
  app.listen(PORT, () => {
    console.log("Server started on port: ", PORT);
  });
}

// aws production enviroment serverless setupp

const serverlessApp = serverless(app);
export const handler = async (event: any, context: any) => {
  if (event.action === "seed") {
    await seed();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Data seeded successfully" }),
    };
  } else {
    return serverlessApp(event, context);
  }
};
