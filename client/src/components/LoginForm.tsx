// src/components/LoginForm.jsx
import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/config/colors";
import { setValue } from "@/utils/localStorage";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const authenticateDetails = async () => {
    const response = await axios.post(`${BASE_URL}/login`, {
      username,
      password,
    });

    setValue(
      "useAtom",
      JSON.stringify({
        jwtToken: response.data,
        isLoggedIn: true,
      })
    );
    navigate("/");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    toast.promise(authenticateDetails, {
      loading: "Hold tight logging you in...",
      success: <b>LoggedIn successfully</b>,
      error: <b>Something went wrong.</b>,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button
        type="submit"
        className="bg-violet-700 text-white hover:bg-violet-600 cursor-pointer"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
