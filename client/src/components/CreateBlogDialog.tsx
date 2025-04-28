import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { BASE_URL } from "@/config/colors";
import { useBlogStore, useUserStore } from "@/store/store";

const CreateBlogDialog = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const userState = useUserStore();
  const blogState = useBlogStore();

  const createBlog = async () => {
    await axios.post(
      `${BASE_URL}/blog/create`,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${userState.jwtToken}`,
        },
      }
    );
    setTitle("");
    setContent("");
    blogState.fetchBlog();
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    toast.promise(createBlog, {
      loading: "Hold tight Creating new blog...",
      success: <b>Successfully created</b>,
      error: <b>Something went wrong.</b>,
    });
    setIsLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger>Create</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Create new blog</DialogTitle>
          <DialogDescription>
            <form className="flex flex-col gap-4" onSubmit={submitHandler}>
              <div className="flex flex-col gap-2">
                <Label className="text-lg font-bold">Title</Label>
                <Input
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter the title of the blog"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-lg font-bold">Content</Label>
                <Textarea
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                  placeholder="Enter the content of the blog"
                />
              </div>
              <Button
                className="bg-violet-700 text-white"
                disabled={isLoading}
                type="submit"
              >
                Create
              </Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBlogDialog;
