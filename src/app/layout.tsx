// root layout (RootLayout.tsx or RootLayout.jsx)
"use client";
import { Poppins } from "next/font/google";
import { useState } from "react";
import "./globals.css";
import Sidebar from "./component/sidebar/page";
import Navbar from "./component/navbar/page";
import Login from "./login/page";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  const handleLogin = () => {

    setIsLoggedIn(true);

  };

  return (
    <html lang="en">
      <body className={poppins.className}>
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <>
            <Sidebar />
            <Navbar />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
