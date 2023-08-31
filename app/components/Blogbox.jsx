"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import "../css/blogbox.css";

export default function Blogbox({ title, coverImg, publishDate, routerUrl }) {
  const router = useRouter();
  return (
    <div
      className="blogbox"
      onClick={() => {
        router.push(`${routerUrl}`);
      }}
    >
      <Image
        src={coverImg}
        className="blog-cover-img"
        width={1000}
        height={1000}
      />
      <h2 className="blog-title">{title}</h2>
      <p className="blog-publish-date">{publishDate}</p>
    </div>
  );
}
