import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/blog(.*)",
    "/sign-in",
    "/sign-up",
    "/waitlist",
    "/_next/static(.*)",
    "/_next/image(.*)",
    "/favicon.ico",
  ],
  async afterAuth(auth, req, evt) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      const signInUrl = new URL('/sign-in', req.url);
      signInUrl.searchParams.set('redirect_url', req.url);
      return Response.redirect(signInUrl);
    }

    // Redirect signed in users to dashboard if they're on a public route
    if (auth.userId && auth.isPublicRoute && req.nextUrl.pathname === '/') {
      const dashboardUrl = new URL('/dashboard', req.url);
      return Response.redirect(dashboardUrl);
    }

    // Handle CORS
    const response = NextResponse.next();
    
    // Allow requests from localhost during development
    if (req.method === 'OPTIONS') {
      return new NextResponse(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:8000',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          'Access-Control-Allow-Credentials': 'true',
        },
      });
    }

    return response;
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
