import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseQueryApi, FetchArgs } from "@reduxjs/toolkit/query";
import { User } from "@clerk/nextjs/server";
import { Clerk } from "@clerk/clerk-js";
import { toast } from "sonner";
const customBaseQuery = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: any
) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: async (headers) => {
      const token = await window.Clerk?.session?.getToken();
      console.log("TOKEN: ", token);
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
  try {
    const result: any = await baseQuery(args, api, extraOptions);

    if (result.error) {
      const errorData = result.error.data;
      const errorMessage =
        errorData?.message ||
        result.error.status.toString() ||
        "An Unknown error";
      toast.error(`Error: ${errorMessage}`);
    }

    const isMutation =
      (args as FetchArgs).method && (args as FetchArgs).method !== "GET";
    if (isMutation) {
      const successMessage = result.data?.message || "Success";
      if (successMessage) {
        toast.success(successMessage);
      }
    }

    if (result.data) {
      result.data = result.data.data;
    } else if (
      result.error?.status === 204 ||
      result.meta?.response?.status === 24
    ) {
      return { data: null };
    }
    return result;
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return { error: { status: "FETCH_ERROR", error: errorMessage } };
  }
};
export const api = createApi({
  baseQuery: customBaseQuery,
  reducerPath: "api",
  tagTypes: ["Courses", "Users"],
  endpoints: (builder) => ({
    getCourses: builder.query<Course[], { category?: string }>({
      query: ({ category }) => ({
        url: "courses",
        params: { category },
      }),
      providesTags: ["Courses"],
    }),
    getCourse: builder.query<Course, string>({
      query: (courseId) => `courses/${courseId}`,
      providesTags: (result, error, id) => [{ type: "Courses", id }], // here id is courseId, basically whatever we pass to query function
    }),
    updateUser: builder.mutation<User, Partial<User> & { userId: string }>({
      query: ({ userId, ...updatedUser }) => ({
        url: `users/clerk/${userId}`,
        method: "PUT",
        body: updatedUser,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useUpdateUserMutation, useGetCoursesQuery, useGetCourseQuery } =
  api;
