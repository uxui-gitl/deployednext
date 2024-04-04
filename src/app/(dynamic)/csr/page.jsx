"use client";
import { Suspense, useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Announcement from "@/sections/announcement/Announcement";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import LoadingSkeleton from "@/components/LoadingSkeleton";

import Balancer from "react-wrap-balancer";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

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

      <div className="py-20 w-full">
        <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem]">
          <h3 className="text-[72px] leading-[80px] font-bold text-[#101828]">
            <Balancer>
              Building a Better Future by Giving Back : Our Commitment to
              Community
            </Balancer>
          </h3>
          <p className=" text-[14px] text-[#475467] leading-[22px] w-2/3 mt-8">
            <Balancer>
              Beyond our business endeavours, we are dedicated to cultivating a
              world of positivity and inspiring hope for a brighter future. With
              a dedication to making a significant impact, we strive to
              contribute positively to the communities we serve, upholding the
              responsibility of their well-being.
            </Balancer>
          </p>
        </div>
      </div>

      <div className="py-20 w-full bg-secondary text-primary">
        <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem]">
          <div>
            <h4 className="text-primary font-bold text-[36px] leading-[42px]">
              <Balancer>CSR Practices </Balancer>
            </h4>
            <p className=" text-secondary font-normal text-[14px] leading-[22px]">
              <Balancer>
                Godrej Infotech strives to contribute to environmental
                conservation and is primarily dedicated to engaging with
                underprivileged college students through sponsored vocational
                training initiatives. To extend our impact within society, we
                employability of these students by equipping them with trending
                digital, computer hardware, and network maintenance skills and
                expertise.
              </Balancer>
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 w-full">
        <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 px-[2rem]">
          <h5 className="text-[36px] leading-[40px] font-bold text-[#101828]">
            <Balancer>Godrej Infotech CSR Policy</Balancer>
          </h5>
          <p className=" text-[16px] text-[#475467] leading-[22px] w-2/3 mt-4">
            <Balancer>
              We have developed a comprehensive CSR policy that aligns with our
              core values and the sustainable development goals.
            </Balancer>
          </p>
          <Link
            href="/"
            className="flex w-fit mt-4 bg-[#101828] text-[#f5f5f5] font-normal rounded-sm transition-all border-[#101828] border-[2px] px-[2.585em] py-[0.5em]"
          >
            Know More about our policies
            <Icon
              path={mdiArrowRight}
              style={{ marginLeft: "0.5em" }}
              size={1}
            />
          </Link>
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
