import { NextResponse } from "next/server";

const Middleware = (req) => {
  console.log("Middleware executed. Original URL:", request.nextUrl.pathname);

  const url = request.nextUrl.clone();
  const pathname = url.pathname.toLowerCase();

  // Skip middleware for API routes and static files
  if (
    url.pathname.startsWith("/api/") ||
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/_next/")
  ) {
    return NextResponse.next();
  }

  if (url.pathname !== pathname) {
    url.pathname = pathname;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

export default Middleware;
