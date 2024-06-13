// src/components/Login.tsx
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const router = useRouter();

  const handleLoginClick = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    router.push("/");
  };

  return (
    <div>
      <main className="bg-[#28a99e] h-[100vh] flex justify-center items-center">
        <div className="w-full max-w-sm flex flex-col justify-center items-center rounded-xl bg-white">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={300}
            height={300}
            className="w-[35%]"
          />
          <form className="px-5 pb-5 w-full" onSubmit={handleLoginClick}>
            <div className="mb-5">
              <label className="block mb-2 text-lg font-medium text-gray-900">
                Username
              </label>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-lg font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
