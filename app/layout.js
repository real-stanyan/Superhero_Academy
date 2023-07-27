import "./css/common.css";

import Navbar from "./components/Navbar";

export const metadata = {
  title: "Superhero Academy",
  description: "Superhero Academy!!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
