"use server";

import { prisma } from "@/lib/prisma";
import { signInPath } from "@/paths";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAuthOrRedirect } from "../queries/get-auth-or-redirect";

export const logoutUser = async () => {
  try {
    const cookieStore = await cookies();
    const auth = await getAuthOrRedirect();
    cookieStore.delete("accessToken");
    cookieStore.delete("refreshToken");

    await prisma.user.update({
      where: { id: auth.user?.id },
      data: {
        refreshToken: null,
      },
    });
  } catch (error) {
    console.log("User logout error", error);
  }

  redirect(signInPath);
};
