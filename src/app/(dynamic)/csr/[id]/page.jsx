"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import Image from "next/image";
import Icon, { Stack } from "@mdi/react";
import { mdiCircle, mdiFacebook, mdiInstagram, mdiLinkedin } from "@mdi/js";
import Avatar from "@/components/Avatar";
import { SVGSkeleton, Skeleton } from "@/components/Skeleton";

export default function SinglePost({ params }) {
  const calculateReadingTime = (text, averageSpeed = 200) =>
    Math.ceil(text.trim().split(/\s+/).length / averageSpeed);

  const [post, setPost] = useState(null);

  const fetchPost = async (id) => {
    try {
      const res = await fetch(`/api/blogpost/${id}`);
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
  }, [params.id]);

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

          <div
            id=""
            className={
              " max-w-screen-xl text-left   mb-5 mx-auto     px-[2rem]"
            }
          >
            <div className="flex flex-row items-center gap-x-8">
              <div>
                <p className="text-[16px] font-medium leading-[20px] text-[#98A2B3]">
                  Follow us on :{" "}
                </p>
              </div>
              <div>
                <ul className={`flex flex-row gap-x-4`}>
                  <li>
                    <Link
                      href="/"
                      data-cursor-size="10px"
                      className="text-sm rounded-md leading-6 font-medium bg-[#101828]"
                    >
                      <Stack size={1} className="bg-[#101828] rounded-[9999px]">
                        <Icon path={mdiCircle} color="#fff" />
                        <Icon path={mdiFacebook} color="#101828" />
                      </Stack>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      data-cursor-size="10px"
                      className="text-sm rounded-md  leading-6 font-medium bg-[#101828]"
                    >
                      <Stack
                        size={1}
                        className="bg-[#101828] rounded-[9999px] p-1 shadow-2xl"
                      >
                        <Icon path={mdiCircle} color="#101828" />
                        <Icon path={mdiLinkedin} color="#fff" />
                      </Stack>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      data-cursor-size="10px"
                      className="text-sm text-[#F5F5F5] leading-6 font-medium bg-[#101828]"
                    >
                      <Stack
                        size={1}
                        className="bg-[#101828] rounded-[9999px] p-1"
                      >
                        <Icon path={mdiCircle} color="#07001F" />
                        <Icon path={mdiInstagram} color="#FFF" />
                      </Stack>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            id=""
            className={" max-w-screen-xl text-left   mb-5 mx-auto  px-[2rem]"}
          >
            <div className="flex flex-row items-center bg-[#F2F4F7] py-5 px-12 gap-x-8">
              <Avatar
                // src=""
                src={`https://godrejinfotech.com/assets/images/blog/${post.bm_auther_image}`}
                alt="author"
                fullName={post.bm_author}
              />
              <div>
                <p className="text-[18px] mb-5 font-medium leading-[24px] text-[#475467]">
                  {post.bm_author}{" "}
                  <span className="bg-[#B2C8F8] px-4 py-2 rounded-md ml-4 ">
                    {post.bm_author_designation}
                  </span>
                </p>
                <p className=" text-[16px] text-[#475467] font-normal leading-[22px]">
                  {post.bm_auther_desc}
                </p>
                <div>
                  <Link
                    href="/"
                    data-cursor-size="10px"
                    className="text-sm rounded-md  leading-6 font-medium bg-[#101828]"
                  >
                    <div className="flex flex-row items-center gap-x-2 mt-4">
                      <Stack
                        size={1}
                        className="bg-[#101828] rounded-[9999px] p-1 shadow-2xl"
                      >
                        <Icon path={mdiCircle} color="#101828" />
                        <Icon path={mdiLinkedin} color="#fff" />
                      </Stack>
                      <p className="text-[14px] font-medium leading-[20px] text-[#101828]">
                        Connect on Linkedin
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] grid gap-x-5 grid-cols-1">
          <div className="border shadow-sm w-full">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="border-b">
                <h3 className="flex">
                  <div className="flex flex-1 items-center justify-between py-4">
                    <SVGSkeleton className="shrink-0 w-full h-[150px]" />
                  </div>
                </h3>
                <h3 className="leading-none mb-2 tracking-tight">
                  <Skeleton className="w-[104px] max-w-full" />
                </h3>
              </div>

              <div>
                <Skeleton className="w-[216px] max-w-full" />
              </div>
              <div>
                <Skeleton className="w-full max-w-full" />
                <Skeleton className="w-full max-w-full" />
                <Skeleton className="w-full max-w-[85%]" />
              </div>
              <div className="flex flex-row gap-x-4">
                <SVGSkeleton className="rounded-[9999px] w-[24px] h-[24px]" />
                <SVGSkeleton className="rounded-[9999px] w-[24px] h-[24px]" />
                <SVGSkeleton className="rounded-[9999px] w-[24px] h-[24px]" />
              </div>
              <div className="border-b">
                <div className="flex flex-row gap-x-8">
                  <div className="flex flex-0 flex-col items-center justify-between  py-4">
                    <SVGSkeleton className="rounded-[9999px] mb-4 w-[150px] h-[150px]" />
                  </div>{" "}
                  <div className="flex flex-1 flex-col items-start justify-start py-4">
                    <Skeleton className="w-full max-w-full" />
                    <Skeleton className="w-full max-w-full" />
                    <Skeleton className="w-full max-w-full" />
                    <Skeleton className="w-full max-w-[85%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
