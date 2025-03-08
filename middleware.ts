// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath =
    path === "/login" ||
    path === "/register" ||
    path === "/" ||
    path.startsWith("/api/auth") ||
    (path.startsWith("/courses") && !path.includes("/enroll"));

  const token =
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("__Secure-next-auth.session-token")?.value;

  // console.log("Middleware - Path:", path, "Token:", token || "undefined"); 

  if (isPublicPath && token) {
    if (path === "/login" || path === "/register") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/courses/enroll/:path*",
    "/login",
    "/register",
  ],
};