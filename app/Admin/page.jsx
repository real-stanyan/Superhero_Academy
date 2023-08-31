"use client";

import { useState } from "react";

import "../css/admin.css";

export default function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    if (
      username === "SuperheroAcademy" &&
      password === "SuperheroesAreSuperCool"
    ) {
      setLogin(true);
    } else {
      alert("Wrong username or password");
    }
    setUsername("");
    setPassword("");
  };

  const handleUpload = async (e) => {
    e.preventDefault(); // 阻止默认表单提交事件

    const formData = new FormData();
    formData.append(
      "blog",
      document.querySelector(".blog-contents textarea").value
    );
    formData.append(
      "image",
      document.querySelector('.blog-image input[type="file"]').files[0]
    );

    try {
      const response = await fetch("/api/blog/new", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Uploaded successfully!");
      } else {
        alert("Error uploading");
      }
    } catch (error) {
      alert("Error: ", error);
    }
  };

  return (
    <div id="admin">
      <div id="login-to-admin" style={{ display: login ? "none" : "" }}>
        <div id="login-form">
          <h1>Admin Login</h1>
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div id="login-btn" onClick={handleLogin}>
            LOGIN
          </div>
        </div>
      </div>
      <form onSubmit={handleUpload}>
        <div className="blog-contents">
          <h1>Blog Contents</h1>
          <textarea type="text" />
        </div>
        <div className="blog-image">
          <h1>Blog image</h1>
          <input type="file" />
        </div>
        <button type="submit" id="post-btn">
          POST
        </button>
      </form>
    </div>
  );
}
