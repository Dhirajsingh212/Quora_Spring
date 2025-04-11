"use client"
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UserRound } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const HomePage = () => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render nothing on the server, SSR fallback to browser API
  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900">
      <header className="bg-white dark:bg-zinc-800 shadow-sm py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Quora (Clone)
          </h1>
          <div className="flex items-center space-x-4">
            <Input
              type="text"
              placeholder="Search Quora"
              className="w-64 bg-gray-50 dark:bg-zinc-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-zinc-600"
            />
            <Button>Sign In</Button>
            <Button variant="secondary">Sign Up</Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme => theme === "dark" ? "light" : "dark")}
            >
              {/* You can use icons here to indicate light/dark mode */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.831l-1.106 1.105a3.75 3.75 0 015.304 5.304l1.106 1.105a.75.75 0 01-.831.162l-1.105-1.106a3.75 3.75 0 01-5.304-5.304L9.528 1.718zM8.25 9a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM12.75 3a2.25 2.25 0 00-2.25 2.25v1.5a2.25 2.25 0 004.5 0V5.25A2.25 2.25 0 0012.75 3zM19.243 3.03a.75.75 0 00-1.06-.03l-1.104 1.104a3.75 3.75 0 01-5.304 5.304l1.104 1.104a.75.75 0 001.06.03l1.104-1.104a3.75 3.75 0 015.304-5.304L19.243 3.03zM15.75 18a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 15.75a2.25 2.25 0 002.25 2.25h-1.5a2.25 2.25 0 00-2.25-2.25h1.5zM6.757 20.97a.75.75 0 001.06.03l1.104-1.104a3.75 3.75 0 015.304-5.304l-1.104-1.104a.75.75 0 00-1.06-.03l-1.104 1.104a3.75 3.75 0 01-5.304 5.304L6.757 20.97zM18 9a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM5.25 12a2.25 2.25 0 002.25-2.25v-1.5a2.25 2.25 0 00-4.5 0v1.5A2.25 2.25 0 005.25 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-10 px-10">
        {/* Left Sidebar (Navigation) */}
        <aside className="hidden md:block">
          <Card className="bg-white dark:bg-zinc-800 shadow">
            <CardHeader>
              <CardTitle className="text-gray-800 dark:text-gray-100">
                Topics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-zinc-700"
              >
                Technology
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-zinc-700"
              >
                Science
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-zinc-700"
              >
                Politics
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-zinc-700"
              >
                History
              </Button>
              {/* Add more topics */}
            </CardContent>
          </Card>
          <Card className="mt-6 bg-white dark:bg-zinc-800 shadow">
            <CardHeader>
              <CardTitle className="text-gray-800 dark:text-gray-100">
                Following
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {/* List of followed users/topics */}
              <div className="flex items-center space-x-2 text-gray-800 dark:text-gray-100">
                <Avatar>
                  <UserRound className="h-4 w-4" />
                </Avatar>
                <span>User 1</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-800 dark:text-gray-100">
                <Avatar>
                  <UserRound className="h-4 w-4" />
                </Avatar>
                <span>Topic 2</span>
              </div>
              {/* Add more followed items */}
            </CardContent>
          </Card>
        </aside>

        {/* Main Content (Feed) */}
        <main className="col-span-1 md:col-span-2 space-y-6">
          {/* Ask a Question Card */}
          <Card className="bg-white dark:bg-zinc-800 shadow">
            <CardContent className="flex space-x-4">
              <Avatar>
                <UserRound className="h-8 w-8" />
              </Avatar>
              <Input
                type="text"
                placeholder="What is your question or link?"
                className="flex-1 bg-gray-50 dark:bg-zinc-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-zinc-600"
              />
              <Button>Ask</Button>
            </CardContent>
          </Card>

          {/* Feed Item 1 */}
          <Card className="bg-white dark:bg-zinc-800 shadow">
            <CardHeader className="flex items-center space-x-4">
              <Avatar>
                <UserRound className="h-6 w-6" />
              </Avatar>
              <div className="space-y-0.5">
                <p className="text-sm font-medium leading-none text-gray-800 dark:text-gray-100">
                  John Doe
                </p>
                <p className="text-xs text-muted-foreground dark:text-gray-400">
                  Asked 2 hours ago
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-800 dark:text-gray-100">
                What are the best practices for learning a new programming language quickly?
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-zinc-700"
                  >
                    Upvote
                  </Button>
                  <span className="text-gray-600 dark:text-gray-300">15</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-zinc-700"
                  >
                    Answer
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-zinc-700"
                  >
                    Share
                  </Button>
                </div>
                {/* Example Answer */}
                <div className="mt-2 p-3 bg-gray-50 dark:bg-zinc-700 rounded-md border dark:border-zinc-600">
                  <div className="flex items-center space-x-2 mb-1">
                    <Avatar>
                      <UserRound className="h-5 w-5" />
                    </Avatar>
                    <p className="text-xs font-medium leading-none text-gray-800 dark:text-gray-100">
                      Jane Smith
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground dark:text-gray-400">
                    Start with the basics, focus on practical projects, and don't be afraid to ask for help.
                  </p>
                </div>
                <Button
                  variant="link"
                  size="sm"
                  className="text-blue-500 dark:text-blue-400 hover:underline"
                >
                  View more answers
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Feed Item 2 */}
          <Card className="bg-white dark:bg-zinc-800 shadow">
            <CardHeader className="flex items-center space-x-4">
              <Avatar>
                <UserRound className="h-6 w-6" />
              </Avatar>
              <div className="space-y-0.5">
                <p className="text-sm font-medium leading-none text-gray-800 dark:text-gray-100">
                  Tech Enthusiast
                </p>
                <p className="text-xs text-muted-foreground dark:text-gray-400">
                  Answered yesterday
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-800 dark:text-gray-100">
                What are the latest advancements in artificial intelligence?
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-zinc-700"
                  >
                    Upvote
                  </Button>
                  <span className="text-gray-600 dark:text-gray-300">28</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-zinc-700"
                  >
                    Comment
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-zinc-700"
                  >
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Add more feed items */}
        </main>
      </div>
    </div>
  );
};

export default HomePage;