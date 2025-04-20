import { Request, Response } from "express";
import Course from "../models/course.model";
import { getAuth } from "@clerk/express";
import { v4 as uuidv4 } from "uuid";
import AWS from "aws-sdk";
const s3 = new AWS.S3();
export const listCourses = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { category } = req.query;

  try {
    const courses =
      category && category !== "all"
        ? await Course.scan("category").eq(category).exec()
        : await Course.scan().exec();

    res
      .status(200)
      .json({ message: "Courses fetched successfully", data: courses });
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses", error });
  }
};

export const getCourse = async (req: Request, res: Response): Promise<void> => {
  const { courseId } = req.params;

  try {
    const course = await Course.get(courseId);
    if (!course) {
      res.status(404).json({ message: "Course not found!" });
    }
    res
      .status(200)
      .json({ message: "Course fetched successfully", data: course });
  } catch (error) {
    res.status(500).json({ message: "Error fetching course", error });
  }
};
export const createCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log("[CREATE_COURSE]: ", req.body);
    const { teacherId, teacherName } = req.body;

    if (!teacherId || !teacherName) {
      res.status(400).json({ message: "Teacher Id and name are required" });
      return;
    }

    const newCourse = new Course({
      courseId: uuidv4(),
      teacherId,
      teacherName,
      title: "Untitled Course",
      description: "",
      category: "Uncategorized",
      image: "",
      price: 0,
      level: "Beginner",
      status: "Draft",
      sections: [],
      enrollments: [],
    });
    await newCourse.save();
    res.status(201).json({
      message: "Course created successfully",
      data: newCourse,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching course", error });
  }
};
export const updateCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { courseId } = req.params;
    const updateData = { ...req.body };
    const { userId } = getAuth(req);
    const course = await Course.get(courseId);

    if (!course) {
      res.status(404).json({ message: "Course not found!" });
    }
    if (course.teacherId !== userId) {
      res
        .status(403)
        .json({ message: "You are not authorized to update this course" });
      return;
    }

    if (updateData.price) {
      const price = parseInt(updateData.price);
      if (isNaN(price)) {
        res.status(400).json({ message: "Invalid price value" });
        return;
      }
      updateData.price = price * 100;
    }

    if (updateData.sections) {
      // we are checking if sections is a string because in the frontend we are sending (Content-Type: "multipart/formdata") and sections is just a part of it and coming as a stringified JSON object
      // and in the backend we are parsing it to an object, so we need to check if it is a string or not
      const sectionsData =
        typeof updateData.sections === "string"
          ? JSON.parse(updateData.sections)
          : updateData.sections;

      updateData.sections = sectionsData.map((section: any) => ({
        ...section,
        sectionId: section.sectionId || uuidv4(),
        chapters: section.chapters.map((chapter: any) => ({
          ...chapter,
          chapterId: chapter.chapterId || uuidv4(),
        })),
      }));
    }

    Object.assign(course, updateData);
    await course.save();
    res
      .status(200)
      .json({ message: "Course updated successfully", data: course });
  } catch (error) {
    res.status(500).json({ message: "Error fetching course", error });
  }
};

export const deleteCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { courseId } = req.params;
  const { userId } = getAuth(req);

  try {
    const course = await Course.get(courseId);
    if (!course) {
      res.status(404).json({ message: "Course not found" });
      return;
    }

    if (course.teacherId !== userId) {
      res
        .status(403)
        .json({ message: "Not authorized to delete this course " });
      return;
    }

    await Course.delete(courseId);

    res.json({ message: "Course deleted successfully", data: course });
  } catch (error) {
    res.status(500).json({ message: "Error deleting course", error });
  }
};

export const getUploadVideoUrl = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { fileName, fileType } = req.body;

  if (!fileName || !fileType) {
    res.status(400).json({ message: "File name and type are required" });
    return;
  }

  try {
    const uniqueId = uuidv4();
    const s3Key = `videos/${uniqueId}/${fileName}`;

    const s3Params = {
      Bucket: process.env.S3_BUCKET_NAME || "",
      Key: s3Key,
      Expires: 60,
      ContentType: fileType,
    };

    const uploadUrl = s3.getSignedUrl("putObject", s3Params);
    const videoUrl = `${process.env.CLOUDFRONT_DOMAIN}/videos/${uniqueId}/${fileName}`;

    res.json({
      message: "Upload URL generated successfully",
      data: { uploadUrl, videoUrl },
    });
  } catch (error) {
    res.status(500).json({ message: "Error generating upload URL", error });
  }
};
