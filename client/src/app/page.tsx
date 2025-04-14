"use client";
import AnimatedWelcome from "@/components/AnimatedWelcome";
import Authentication from "@/components/Authentication";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const HomePage = () => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Authentication>
      <div className="min-h-screen bg-gray-100 dark:bg-zinc-900">
        <Navbar/>
        <div className="pt-16">
        <Main/>
        </div>
      </div>
    </Authentication>
  );
};

export default HomePage;
