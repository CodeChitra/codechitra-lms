import { Request, Response } from "express";
import { clerkClient } from "..";
export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  const userData = req.body;
  console.log("AUTH TOKEN: ", req.headers["Authorization"]);

  try {
    const user = await clerkClient.users.updateUser(userId, {
      publicMetadata: {
        userType: userData.publicMetadata.userType,
        settings: userData.publicMetadata.settings,
      },
    });
    res.status(200).json({ message: "User updated successfully", data: user });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};
