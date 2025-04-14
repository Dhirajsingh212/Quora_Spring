"use client";
import getToken from "@/actions";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { BASE_URL } from "@/lib/config";
import axios from "axios";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import Spinner from "./Spinner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const CreateBlogDialog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading,setIsLoading] = useState(false);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (title.length < 1 || content.length < 1) {
        alert("data cannot be empty");
        return;
      }
      const response = await axios.post(
        `${BASE_URL}/blog/create`,
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      setTitle("");
      setContent("");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }finally{
      setIsLoading(false);
      
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <p className="font-normal">
          <CirclePlus size="40" />
        </p>
      </DialogTrigger>
      <DialogContent className="bg-black text-white rounded-lg shadow-5xl  backdrop-blur-3xl px-6 py-10">
        <DialogHeader className="flex flex-col gap-4">
          <DialogTitle className="text-center">
            Convert your Thoughts
          </DialogTitle>
          <form
            onSubmit={submitHandler}
            className="space-y-4 flex flex-col gap-2"
          >
            <div className="flex flex-col gap-3 ">
              <Label className="font-bold">Title</Label>
              <Input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-3 ">
              <Label className="font-bold">Content</Label>
              <Input
                type="text"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </div>
            <Button type="submit" className="w-full">
              Create
            </Button>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBlogDialog;
