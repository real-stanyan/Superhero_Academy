"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import "../css/navbar.css";

export default function Navbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if (e.key !== "Enter") return;
    const searchQuery = search;
    setSearch("");
    if (searchQuery === "-+@#$%^&*()_+=-[]{};':,./<>?`~") {
      router.push("/Admin");
    }
  };

  return (
    <div id="navbar">
      <div className="hd-name">
        <Link href="/">
          <h1>Superhero Academy</h1>
        </Link>
      </div>
      <div className="hd-links">
        <ul>
          <li>
            <Link href="/Contact-us">Contact us</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Coaching">Superhero Coaching Academy</Link>
          </li>
          <li>
            <Link href="/Super-blog">Super Blog</Link>
          </li>
        </ul>
      </div>
      <div className="hd-search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => handleSearch(e)}
          placeholder="Enter Here"
          autoFocus
        />
        <Image
          src="/images/search_light_icon.png"
          alt="search_icon"
          width={70}
          height={70}
          className="search-icon"
        />
      </div>
      <div className="hd-menu">
        <Image
          src="/images/menu_light_icon.png"
          alt="hd_menu"
          width={10}
          height={10}
          className="menu-icon"
        />
        <div className="menu-links">
          <ul>
            <li>
              <input type="text" />
            </li>
            <li>
              <Link href="/Contact-us">Contact us</Link>
            </li>
            <li>
              <Link href="/About">About</Link>
            </li>
            <li>
              <Link href="/Coaching">Superhero Coaching Academy</Link>
            </li>
            <li>
              <Link href="/Super-blog">Super Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
