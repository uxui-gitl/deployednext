import { NextResponse } from "next/server";

const Middleware = (request) => {
  // console.log("Middleware executed. Original URL:", request.nextUrl.pathname);

  const url = request.nextUrl.clone();
  const pathname = url.pathname.toLowerCase();

  // Skip rewrite for image optimization routes
  if (
    url.pathname.startsWith("/api") || //  exclude all API routes
    url.pathname.startsWith("/static") || // exclude static files
    url.pathname.includes(".") // exclude all files in the public folder
  ) {
    return NextResponse.next();
  }
  // // Skip middleware for API routes and static files

  if (url.pathname !== pathname) {
    url.pathname = pathname;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

export default Middleware;
