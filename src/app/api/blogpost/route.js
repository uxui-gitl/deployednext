import { NextResponse } from "next/server";

import data from "../../../assets/blog_data_minified.json";

export async function GET() {
  return NextResponse.json({
    data,
  });
}
