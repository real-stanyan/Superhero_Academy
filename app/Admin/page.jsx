"use client";

import { useState } from "react";

import "../css/admin.css";

export default function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      setLogin(true);
    } else {
      alert("Wrong username or password");
    }
    setUsername("");
    setPassword("");
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
      <div className="blog-contents">
        <h1>Blog Contents</h1>
        <textarea type="text" />
      </div>
      <div className="blog-image">
        <h1>Blog image</h1>
        <input type="file" />
      </div>
      <div id="post-btn">POST</div>
    </div>
  );
}
