"use client"
// src/app/login/page.tsx
import Login from "@/app/component/login"
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // Implement the login functionality here
    console.log("User logged in");
  };

  return <Login onLogin={handleLogin} />;
}
