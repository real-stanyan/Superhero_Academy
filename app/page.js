"use client";

import { useEffect, useState } from "react";
import Blogbox from "./components/Blogbox";
import MainBlogbox from "./components/MainBlogbox";

import "./css/common.css";
import "./css/homepage.css";

export default function Home() {
  const [featured, setFeatured] = useState("");
  const [latest, setLatest] = useState("");

  useEffect(() => {
    initFeatured();
    initLatest();
  }, []);

  const initFeatured = () => {
    const fullTitle = "FEATURED";
    let currentTitle = "";
    let index = 0;

    // Set an interval to add the next character to the title
    const interval = setInterval(() => {
      currentTitle += fullTitle[index];
      setFeatured(currentTitle);
      index++;

      // Once the entire title has been added, clear the interval
      if (index === fullTitle.length) {
        clearInterval(interval);
      }
    }, 100); // Change this value to control the speed of the animation

    // Make sure to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  };

  const initLatest = () => {
    const fullTitle = "LATEST POSTS";
    let currentTitle = "";
    let index = 0;

    // Set an interval to add the next character to the title
    const interval = setInterval(() => {
      currentTitle += fullTitle[index];
      setLatest(currentTitle);
      index++;

      // Once the entire title has been added, clear the interval
      if (index === fullTitle.length) {
        clearInterval(interval);
      }
    }, 100); // Change this value to control the speed of the animation

    // Make sure to clear the interval when the component is unmounted
    return () => clearInterval(interval);
  };

  return (
    <main id="homepage">
      <div id="featured">
        <h1 className="featured-title">{featured}</h1>
        <Blogbox />
        <Blogbox />
        <Blogbox />
        <Blogbox />
        <Blogbox />
      </div>
      <div id="latest-post">
        <div className="main">
          <h1 className="latest-post-title">{latest}</h1>
          <MainBlogbox />
        </div>
        <div className="sub">
          <Blogbox />
          <Blogbox />
          <Blogbox />
          <Blogbox />
          <Blogbox />
          <Blogbox />
          <Blogbox />
          <Blogbox />
          <Blogbox />
          <Blogbox />
        </div>
      </div>
    </main>
  );
}
