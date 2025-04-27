import { useUserStore } from "@/store/store";
import React from "react";
import { Footer } from "./Footer";
import Navbar from "./Navbar";

const DefaultProvider = ({ children }: { children: React.ReactNode }) => {
  const userState = useUserStore();

  if (userState.jwtToken === null || userState.isLoggedIn === false) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="shadow-lg bg-slate-800 rounded-lg p-6 max-w-sm text-center">
          <h2 className="text-2xl font-bold  mb-4">Welcome Back!</h2>
          <p className="text-gray-600 mb-6">
            Please log in to access your account.
          </p>
          <a
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-200"
            href="/login"
          >
            Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultProvider;
