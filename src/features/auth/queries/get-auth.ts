"use server";

import { verifyToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { cache } from "react";

export const getAuth = cache(async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  if (!accessToken) return { token: null, user: null };
  const payload = await verifyToken(accessToken, "access");
  if (!payload?.userId) return { token: null, user: null };

  const user = await prisma.user.findFirst({
    where: {
      id: payload.userId,
    },
    omit: {
      password: true,
      refreshToken: true,
    },
  });

  if (!user) return { token: null, user: null };

  return { token: accessToken, user };
});
