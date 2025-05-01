import { jwtDecode } from "jwt-decode";

const decodeJWT = (token) => {
  if (!token || typeof token !== "string") {
    throw new Error("Invalid token format");
  }

  try {
    const decoded = jwtDecode(token);

    if (!decoded || typeof decoded !== "object") {
      throw new Error("Malformed token payload");
    }

    if (Date.now() >= decoded.exp * 1000) {
      throw new Error("Token expired");
    }

    return decoded;
  } catch (error) {
    console.error("Error decoding JWT:", error);
    throw new Error("Failed to decode JWT");
  }
};

const getRoleFromToken = (token) => {
  const decoded = decodeJWT(token);
  return decoded?.role || "guest";
};

const isTokenExpired = (token) => {
  try {
    const { exp } = decodeJWT(token);
    return Date.now() >= exp * 1000;
  } catch {
    return true;
  }
};

export { decodeJWT, getRoleFromToken, isTokenExpired };
