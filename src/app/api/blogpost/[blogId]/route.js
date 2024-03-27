import { NextResponse } from "next/server";

import data from "../../../../assets/blog_data_minified.json";

export async function GET(request, context) {
  try {
    const { params } = context;
    // console.log("Params:", params);

    const blog = data.filter((x) => {
      // console.log("Blog ID:", x.bm_blog_id);
      // console.log("Type of params.blogId:", typeof params.blogId);
      // console.log("Type of x.bm_blog_id:", typeof x.bm_blog_id.toString());
      return params.blogId === x.bm_blog_id.toString();
    });

    // console.log("Filtered Blog:", blog);

    return NextResponse.json({ blog });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}
