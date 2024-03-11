import { NextResponse } from "next/server";

const Middleware = (req) => {
  if (req.nextUrl.pathname !== req.nextUrl.pathname.toLowerCase()) {
    return NextResponse.redirect(
      new URL(req.nextUrl.origin + req.nextUrl.pathname.toLowerCase())
    );
  }

  return NextResponse.next();
};

export default Middleware;
