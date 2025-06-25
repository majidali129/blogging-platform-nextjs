import { SignJWT, JWTPayload, jwtVerify } from "jose";

export const accessTokenSecret = new TextEncoder().encode(
  process.env.ACCESS_TOKEN_SECRET
);
export const refreshTokenSecret = new TextEncoder().encode(
  process.env.REFRESH_TOKEN_SECRET
);

export type TokenType = "access" | "refresh";
export type Payload = {
  userId: string;
  userName: string;
  type: TokenType;
};

export const generateAccessToken = async (payload: Payload) => {
  return await new SignJWT(payload as JWTPayload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(process.env.ACCESS_TOKEN_EXPIRY!)
    .sign(accessTokenSecret);
};

export const generateRefreshToken = async (payload: Payload) => {
  return await new SignJWT(payload as JWTPayload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(process.env.REFRESH_TOKEN_EXPIRY!)
    .sign(refreshTokenSecret);
};

export const verifyToken = async (token: string, tokenType: TokenType) => {
  try {
    const secret =
      tokenType === "access" ? accessTokenSecret : refreshTokenSecret;
    const { payload } = await jwtVerify(token, secret);

    return payload as Payload;
  } catch (error) {
    console.log("Error", error);
    throw new Error("Invalid or expired token");
  }
};
