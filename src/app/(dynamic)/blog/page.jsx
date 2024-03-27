"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Announcement from "@/sections/announcement/Announcement";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/blogpost");
        const { data } = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
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
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem] grid gap-x-5 grid-cols-2">
            {posts.map((post) => (
              <article className="flex flex-col mb-8" key={post.bm_blog_id}>
                <Link href={`/blog/${post.bm_blog_id}`}>
                  <div className="w-full">
                    {post.bm_banner_image && (
                      <Image
                        className="w-full min-h-[250px] object-fill max-h-[250px] mb-4"
                        src={`https://godrejinfotech.com/assets/images/blog/${post.bm_banner_image}`}
                        height={150}
                        width={150}
                        alt=""
                      />
                    )}
                  </div>
                  <h2 className="font-bold text-[16px]">
                    {parse(post.bm_name || "")}
                  </h2>
                </Link>
                <p style={{ paddingBottom: "30px" }}>
                  {parse(post.bm_shortdesc || "")}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
