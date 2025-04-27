import { BASE_URL } from "@/config/colors";
import { useUserStore } from "@/store/store";
import axios from "axios";
import { Dot } from "lucide-react";
import { useEffect, useState } from "react";

interface Blogs {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export function BlogCard() {
  const userState = useUserStore();
  const [allBlogs, setAllBlogs] = useState<Blogs[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get(`${BASE_URL}/blog/getAll`, {
        headers: {
          Authorization: `Bearer ${userState.jwtToken}`,
        },
      });
      setAllBlogs(response.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
      {allBlogs.map((src, imgIndex) => (
        <div
          className="break-inside-avoid overflow-hidden rounded-lg border-2 border-violet-950 shadow-2xl"
          key={imgIndex}
        >
          <img
            className="w-full h-auto rounded-t-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt=""
          />
          <div className="px-4 pb-4">
            <p className="text-xl font-semibold pt-4 hover:text-violet-700 transition-all cursor-pointer duration-300">
              {src.title}
            </p>
            <p className="flex flex-row items-center text-muted-foreground pt-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-7 w-7 pr-2 rounded-full object-cover"
              />
              Mario sechan <Dot /> 30 May 25
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
