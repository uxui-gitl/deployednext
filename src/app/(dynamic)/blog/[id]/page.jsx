"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import Image from "next/image";

export default function SinglePost({ params }) {
  const calculateReadingTime = (text, averageSpeed = 200) =>
    Math.ceil(text.trim().split(/\s+/).length / averageSpeed);

  const [post, setPost] = useState(null);

  const fetchPost = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/blogpost/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch post");
      }
      const { blog } = await res.json();

      if (Array.isArray(blog) && blog.length > 0) {
        setPost(blog[0]); // Set the first blog post from the array
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  useEffect(() => {
    fetchPost(params.id);
  }, []);

  return (
    <>
      {post ? (
        <>
          <div
            id=""
            className={"  max-w-screen-xl text-left  mx-auto pt-8   px-[2rem]"}
          >
            <div className={`iw-card-img-wrap  w-[100%] h-auto relative`}>
              <Image
                // src={`/blogPlaceholder.png`}
                src={
                  post.bm_banner_image
                    ? `https://godrejinfotech.com/assets/images/blog/${post.bm_banner_image}`
                    : `/project-placeholder.png`
                }
                alt={"blog"}
                className="w-[100%]"
                width="980"
                height="558"
              />
            </div>
          </div>
          <div
            id=""
            className={
              " max-w-screen-xl text-left  mb-5 mx-auto p-5   px-[2rem]"
            }
          >
            <div className="mb-[2em]">
              <div className={`grid grid-cols-1 md:grid-cols-1 gap-4`}>
                <p className="text-[14px] leading-[22px] font-medium">
                  {post.bm_posted_on_var}
                </p>
                <div>
                  <h3 className="text-4xl leading-[42px] font-semibold">
                    {parse(post.bm_name)}
                  </h3>
                  <div className="my-4">
                    <span className="bg-[#B2C8F8] px-4 py-2 rounded-md mr-4 ">
                      {post.bm_category_code}
                    </span>
                    <span className="text-[#98A2B3] text-[14px] font-medium leading-[22px]">
                      {calculateReadingTime(post.bm_desc, 100)} Min Read
                    </span>
                  </div>
                </div>
                <div></div>
                <div className="blog_post_desc">{parse(post.bm_desc)}</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="mx-auto py-8 text-center">Loading...</p>
      )}
    </>
  );
}
