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
        <Blogbox
          title={
            "Avoiding Common Mistakes: Tips for Selecting the Perfect Gym Membership"
          }
          coverImg={"/images/Avoiding_Common_Mistakes_cover.png"}
          publishDate={"June 15, 2023"}
          routerUrl={"Avoiding_Common_Mistakes"}
        />
        <Blogbox
          title={
            "Supercharge Your Cosplay: Intermediate Fitness Tips to Level Up for your next or Anime Expo"
          }
          coverImg={"/images/Supercharge_Your_Cosplay_cover.jpg"}
          publishDate={"June 17, 2023"}
          routerUrl={"Supercharge_Your_Cosplay"}
        />
        <Blogbox
          title={
            "Get Comic Con Ready: Beginner's Nutrition Guide with a Superhero Twist"
          }
          coverImg={"/images/Get_Comic_Con_Ready_cover.jpeg"}
          publishDate={"June 13, 2023"}
          routerUrl={"Get_Comic_Con_Ready"}
        />
        <Blogbox
          title={
            "Unpacking the Superhero Myth: Are They Really Good Role Models for Kids?"
          }
          coverImg={"/images/Unpacking_the_Superhero_Myth_cover.jpeg"}
          publishDate={"June 16, 2023"}
          routerUrl={"Unpacking_the_Superhero_Myth"}
        />
        <Blogbox
          title={"Level Up Your Fitness: How to Train Like a Superhero"}
          coverImg={"/images/Level_Up_Your_Fitness_cover.jpg"}
          publishDate={"June 14, 2023"}
          routerUrl={"Level_Up_Your_Fitness"}
        />
      </div>
      <div id="latest-post">
        <div className="main">
          <h1 className="latest-post-title">{latest}</h1>
          <MainBlogbox
            title={
              "Supercharge Your Cosplay: Intermediate Fitness Tips to Level Up for your next or Anime Expo"
            }
            coverImg={"/images/Supercharge_Your_Cosplay_cover.jpg"}
            publishDate={"June 17, 2023"}
            routerUrl={"Supercharge_Your_Cosplay"}
          />
        </div>
        <div className="sub">
          <Blogbox
            title={
              "Unpacking the Superhero Myth: Are They Really Good Role Models for Kids?"
            }
            coverImg={"/images/Unpacking_the_Superhero_Myth_cover.jpeg"}
            publishDate={"June 16, 2023"}
            routerUrl={"Unpacking_the_Superhero_Myth"}
          />
          <Blogbox
            title={
              "Avoiding Common Mistakes: Tips for Selecting the Perfect Gym Membership"
            }
            coverImg={"/images/Avoiding_Common_Mistakes_cover.png"}
            publishDate={"June 15, 2023"}
            routerUrl={"Avoiding_Common_Mistakes"}
          />
          <Blogbox
            title={"Level Up Your Fitness: How to Train Like a Superhero"}
            coverImg={"/images/Level_Up_Your_Fitness_cover.jpg"}
            publishDate={"June 14, 2023"}
            routerUrl={"Level_Up_Your_Fitness"}
          />
          <Blogbox
            title={
              "Get Comic Con Ready: Beginner's Nutrition Guide with a Superhero Twist"
            }
            coverImg={"/images/Get_Comic_Con_Ready_cover.jpeg"}
            publishDate={"June 13, 2023"}
            routerUrl={"Get_Comic_Con_Ready"}
          />
        </div>
      </div>
    </main>
  );
}
