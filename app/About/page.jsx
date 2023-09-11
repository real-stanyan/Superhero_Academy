import Image from "next/image";

import "../css/about.css";

export default function About() {
  return (
    <div id="about">
      <h1 className="about-me-content">
        Hello and welcome to my blog! My name is Damian, and I'm 27 years old. I
        live in Sydney Australia and I&apos;ve always been a gym fan with an
        obsession in superheroes and anime. I created this blog as a platform to
        share my thoughts, experiences, and ideas about fitness with the world
        in a way where everyone can actually enjoy reading a blog, and anyone
        can understand. I've always been passionate about fitness, supers and
        anime, and I wanted to create a space where I could provide correct and
        digestible information as there&apos;s a lot of misinformation out
        there. I also wanted to explain how I got here. I loved watching anime
        regularly and really enjoyed superhero movies and cartoons such as
        dragon ball Z, Naruto, One piece and Justice League of America. For
        this, since I was younger, I was bullied for the things I was interested
        in. As I grew older, I&apos;ve attempted to demonstrate my expertise in
        the field, but got overwhelmed from work, family stressors, relationship
        stressors and overdoing my training, and became really sick with IBS and
        Chronic fatigue. At this point, I felt like I was in a complete slump. I
        could barely get out of bed, let alone, work. It took me a few years of
        self awareness, hard work and consistency to both get out of that slump
        and become a better person both physically and mentally. I&apos;ve been
        through many stages in life and have had many ups and downs, but
        I&apos;ve accomplished a lot! I&apos;ve created Superhero academy to
        help you overcome whatever you&apos;re going through through having more
        self awareness, eating better and training more consistently. If I could
        do it, you could do it too!!
      </h1>
      <div className="mid-line"></div>
      <Image
        src="/images/about_img.jpg"
        alt="About Me Image"
        className="about-img"
        width={302}
        height={403}
      />
    </div>
  );
}
