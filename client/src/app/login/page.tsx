"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BASE_URL } from "@/lib/config";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (username.length > 0 && password.length > 0) {
      try {
        const res = await axios.post(`${BASE_URL}/login`, {
          username,
          password,
        });

        if (res.status === 200) {
          localStorage.setItem("jwtToken", res.data);
          router.push("/");
        }
      } catch (err) {
        setError("Something went wrong");
      }
    }
  };

  return (
    <div className="flex md:flex-row flex-col items-center justify-between min-h-screen ">
      <Card className="flex flex-col justify-center w-full md:max-w-md max-w-full h-screen rounded-none shadow-md md:px-5">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-semibold text-center">
            Welcome Back!
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground text-center">
            Log in to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button className="w-full hover:cursor-pointer" onClick={handleLogin}>
            Log In
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
      <div className="w-full h-full max-md:hidden">
        <Image
          src="https://images.unsplash.com/photo-1738996674608-3d2d9d8450a0?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height={1000}
          width={1000}
          alt="hellow"
          className="object-cover h-screen w-full"
        />
      </div>
    </div>
  );
};

export default LoginPage;
