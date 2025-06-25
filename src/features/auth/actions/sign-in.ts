"use server";

import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/form/to-action-state";
import { generateAccessToken, generateRefreshToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { homePath } from "@/paths";
import { signInSchema } from "@/zod/sign-in-with-email-schema";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export const loginUser = async (
  _initialState: ActionState,
  formData: FormData
) => {
  try {
    const cookieStore = await cookies();
    const parsedData = await signInSchema.parseAsync(
      Object.fromEntries(formData)
    );

    const { email, password } = parsedData;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return toActionState("ERROR", "Incorrect email or password", formData);
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password!);
    if (!isPasswordCorrect) {
      toast.error("Invalid password");
      return toActionState("ERROR", "Invalid email or password", formData);
    }

    const accessToken = await generateAccessToken({
      type: "access",
      userId: user.id,
      userName: user.userName,
    });
    const refreshToken = await generateRefreshToken({
      type: "refresh",
      userId: user.id,
      userName: user.userName,
    });

    await prisma.user.update({
      where: { id: user.id },
      data: {
        refreshToken: refreshToken,
      },
    });

    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    cookieStore.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }

  redirect(homePath);
};
