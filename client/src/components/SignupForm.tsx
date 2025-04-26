import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import toast from "react-hot-toast";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    toast.success("hellow world");
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        Signup
      </Button>
    </form>
  );
};

export default SignupForm;
