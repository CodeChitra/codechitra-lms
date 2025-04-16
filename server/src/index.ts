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
// Start Server

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log("Server started on port: ", PORT);
});
