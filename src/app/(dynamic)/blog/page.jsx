"use client";
import { Suspense, useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Announcement from "@/sections/announcement/Announcement";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { SVGSkeleton, Skeleton } from "@/components/Skeleton";

import { getServerSideProps } from "next";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/blogpost");
        const { data } = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading state to false after fetching
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Announcement />
      <div className={`relative z-[500]`}>
        <div className={`absolute w-full`}>
          <Navbar theme="dark" />
        </div>
      </div>

      <div className="pt-20">
        <div className="py-4 text-center bg-[#F2F4F7] text-[#98A2B3] font-medium text-[16px] leading-[20px]">
          All Blog Posts
        </div>
      </div>
      <div>
        <div className={`w-full bg-[#f2f4f7] pb-12`}>
          <Suspense fallback={<LoadingSkeleton type="blog" />}>
            {loading ? (
              <LoadingSkeleton type="blog" />
            ) : (
              <>
                <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] grid gap-x-5 grid-cols-2">
                  {posts.map((post) => (
                    <article
                      className="flex flex-col mb-8"
                      key={post.bm_blog_id}
                    >
                      <Link href={`/blog/${post.bm_blog_id}`}>
                        <div className="w-full relative">
                          {post.bm_banner_image && (
                            <Image
                              className="w-full min-h-[250px] object-fill max-h-[250px] mb-4"
                              src={`https://godrejinfotech.com/assets/images/blog/${post.bm_banner_image}`}
                              height={150}
                              width={150}
                              alt=""
                            />
                          )}
                          <Image
                            className="hidden absolute bottom-2 right-2 rounded-[9999px] ring-2 ring-status-green min-w-[100px] min-h-[100px] w-[100px] h-[100px] max-w-[100px] max-h-[100px] border-white border-[6px]"
                            src={`https://godrejinfotech.com/assets/images/blog/${post.bm_auther_image}`}
                            height={150}
                            width={150}
                            alt=""
                          />
                        </div>
                        <h2 className="font-bold text-[16px]">
                          {parse(post.bm_name || "")}
                        </h2>
                        <p className="mb-2 text-[#475467]">
                          {parse("Posted by - " + post.bm_author || "")}
                        </p>
                        <p style={{ paddingBottom: "30px" }}>
                          {parse(post.bm_shortdesc || "")}
                        </p>
                      </Link>
                    </article>
                  ))}
                </div>
              </>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
