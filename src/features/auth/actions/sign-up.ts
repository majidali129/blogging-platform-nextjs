"use server";

import {
  ActionState,
  fromErrorToActionState,
  toActionState,
} from "@/components/form/to-action-state";
import { prisma } from "@/lib/prisma";
import { signInPath } from "@/paths";
import { signUpSchema } from "@/zod/sign-up-with-email-schema";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

export const registerUser = async (
  _InitialState: ActionState,
  formData: FormData
) => {
  try {
    const { name, userName, email, password } = await signUpSchema.parseAsync(
      Object.fromEntries(formData)
    );

    // const existingUser = await prisma.user.findFirst({
    //   where: { OR: [{ email }, { userName }] },
    // });

    //NOTE: better for feedback
    const emailExists = await prisma.user.findUnique({ where: { email } });
    const userNameExists = await prisma.user.findUnique({
      where: { userName },
    });

    if (emailExists) {
      return toActionState("ERROR", "Email already exists ");
    }
    if (userNameExists) {
      return toActionState("ERROR", "Username already exists ");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        userName,
        email,
        password: hashedPassword,
        createdAt: new Date(),
      },
    });

    console.log("Created User", user);
    // return toActionState("SUCCESS", "User registered successfully", formData);
  } catch (error) {
    return fromErrorToActionState(error, formData);
  }

  redirect(signInPath);
};
