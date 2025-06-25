import * as z from "zod";

export const signUpSchema = z
  .object({
    name: z.string().min(3, "Name must be 3 characters long"),
    userName: z.string().min(1, "Username is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z.string().min(8, "Password must me minimum 8 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        message: "Passwords do not match",
        path: ["confirmPassword"],
        code: "custom",
      });
    }
  });
