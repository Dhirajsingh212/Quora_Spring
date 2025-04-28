import { useBlogStore } from "@/store/store";
import { format, parseISO } from "date-fns";
import { Dot } from "lucide-react";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export function BlogCard() {
  const blogState = useBlogStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    blogState.fetchBlog();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-row justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
      {blogState.blogs.map((src, imgIndex) => (
        <div
          className="break-inside-avoid overflow-hidden rounded-lg border-2 border-violet-950 shadow-2xl"
          key={imgIndex}
        >
          <img
            className="w-full h-auto rounded-t-lg"
            src="https://images.unsplash.com/photo-1641312055036-697c95ac3203?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="px-4 pb-4">
            <p className="text-xl font-semibold pt-4 hover:text-violet-700 transition-all cursor-pointer duration-300">
              {src.title}
            </p>
            <p className="font-[Playwrite_AU_SA] text-sm pt-2 text-muted-foreground">
              {src.content}
            </p>
            <p className="flex flex-row items-center text-muted-foreground pt-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-7 w-7 pr-2 rounded-full object-cover"
              />
              {src.user.username} <Dot />{" "}
              {format(parseISO(src.createdAt), "dd MMMM yyyy")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
