"use client";
import { format } from "date-fns";
import CreateBlogDialog from "./CreateBlogDialog";
import React from "react";
import axios from "axios";
import { BASE_URL } from "@/lib/config";
import getToken from "@/actions";
import Spinner from "./Spinner";

interface Post {
  id: string;
  title: string;
  content: string;
}

const Main = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blog/user/all`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <header className="py-10 text-center">
        <h1 className="text-5xl font-semibold flex flex-row gap-1 justify-center items-end">
          My Blog
          <CreateBlogDialog />
        </h1>
        <p className="mt-2 text-gray-400">Thoughts, stories, and ideas.</p>
      </header>

      <main className="flex-grow px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 mb-6 shadow-md transition-transform transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-400 text-sm mt-1">{post.content}</p>
              <p className="mt-4">October 1,2025</p>
              <a
                href="#"
                className="text-blue-400 hover:underline mt-4 inline-block"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-6 text-center">
        <p className="text-gray-400">
          © {format(new Date(), "yyyy")} My Blog. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Main;
