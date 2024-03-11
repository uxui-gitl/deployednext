// import { NextResponse } from "next/server";

// const Middleware = (req) => {
//   const isImageAsset = req.nextUrl.pathname.startsWith("/_next/image");
//   const lowercasedPath = req.nextUrl.pathname.toLowerCase();

//   if (req.nextUrl.pathname === lowercasedPath && !isImageAsset) {
//     return NextResponse.next(); // No redirect for pages and non-image assets
//   } else if (lowercasedPath !== req.nextUrl.pathname && !isImageAsset) {
//     return NextResponse.redirect(new URL(req.nextUrl.origin + lowercasedPath)); // Redirect only once for pages
//   }

//   return NextResponse.next(); // No change for image assets
// };

// export default Middleware;

import { NextResponse } from "next/server";

const Middleware = (req) => {
  const isImageAsset = req.nextUrl.pathname.startsWith("/_next/image");
  console.log({ isImageAsset });
  console.log(req.nextUrl.pathname);

  const lowercasedPath = isImageAsset
    ? req.nextUrl.pathname
    : req.nextUrl.pathname.toLowerCase();

  if (req.nextUrl.pathname === lowercasedPath && !isImageAsset) {
    return NextResponse.next(); // No redirect for pages and non-image assets
  } else if (lowercasedPath !== req.nextUrl.pathname && !isImageAsset) {
    return NextResponse.redirect(new URL(req.nextUrl.origin + lowercasedPath)); // Redirect only once for pages
  }

  return NextResponse.next(); // No change for image assets
};

export default Middleware;
