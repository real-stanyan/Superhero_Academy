"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../css/mainblogbox.css";

export default function MainBlogbox({
  title,
  coverImg,
  publishDate,
  routerUrl,
}) {
  const router = useRouter();
  return (
    <div
      className="main-blogbox"
      onClick={() => {
        router.push(`${routerUrl}`);
      }}
    >
      <Image
        src={coverImg}
        className="main-blog-cover-img"
        width={1000}
        height={1000}
      />
      <div className="main-blog-des">
        <h1>{title}</h1>
        <p>{publishDate}</p>
      </div>
    </div>
  );
}
