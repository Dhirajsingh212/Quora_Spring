import { BlogCard } from "@/components/BlogCard";
import DefaultProvider from "@/components/DefaultProvider";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const posts = [
  {
    tag: "Featured",
    title: "The Future of Web Development",
    description:
      "Explore the latest trends and technologies shaping the future of web development. From AI-driven development to the rise of new frameworks.",
    author: "John Doe",
    date: "Mar 23, 2024",
    readTime: "5 min read",
  },
  {
    tag: "Technology",
    title: "Understanding Modern Architecture",
    description:
      "Dive deep into the principles of modern software architecture and how it shapes the applications we build today.",
    author: "Jane Smith",
    date: "Mar 24, 2024",
    readTime: "7 min read",
  },
  {
    tag: "Development",
    title: "The Rise of AI in Development",
    description:
      "How artificial intelligence is revolutionizing the way we write and maintain code in modern development workflows.",
    author: "Mike Johnson",
    date: "Mar 25, 2024",
    readTime: "6 min read",
  },
];

const Index = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <DefaultProvider>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {posts.map((post, index) => (
            <CarouselItem key={index}>
              <Card className="border-none bg-gradient-to-br from-violet-900/50 to-transparent">
                <CardContent className="md:px-24 md:py-32">
                  <div className="space-y-4">
                    <div className="text-sm text-violet-400">{post.tag}</div>
                    <h2 className="text-3xl font-bold text-white">
                      {post.title}
                    </h2>
                    <p className="text-gray-400">{post.description}</p>
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-violet-700" />
                      <div>
                        <div className="text-sm font-medium text-white">
                          {post.author}
                        </div>
                        <div className="text-sm text-gray-400">
                          {post.date} · {post.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>

      <div className="px-4 md:px-32 py-32">
        <BlogCard />
      </div>
    </DefaultProvider>
  );
};

export default Index;
