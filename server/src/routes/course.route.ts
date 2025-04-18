import express from "express";
import multer from "multer";
import {
  createCourse,
  deleteCourse,
  getCourse,
  getUploadVideoUrl,
  listCourses,
  updateCourse,
} from "../controllers/course.controller";
import { requireAuth } from "@clerk/express";
const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.get("/", listCourses);
router.post("/", requireAuth(), createCourse);
router.get("/:courseId", getCourse);
router.put("/:courseId", requireAuth(), upload.single("image"), updateCourse);
router.delete("/:courseId", requireAuth(), deleteCourse);
router.post(
  "/:courseId/sections/:sectionId/chapters/:chapterId/get-upload-url",
  requireAuth(),
  getUploadVideoUrl
);

export default router;
