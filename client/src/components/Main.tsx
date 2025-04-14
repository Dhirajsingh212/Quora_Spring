
"use client";
import { CirclePlus } from 'lucide-react';
import React from 'react';
import { format } from 'date-fns';

const Main = () => {
  const posts = [
    {
      title: 'Understanding React Hooks',
      date: 'October 1, 2023',
      excerpt: 'A deep dive into the world of React Hooks and how to use them effectively in your applications.',
    },
    {
      title: 'Tailwind CSS: A Utility-First Approach',
      date: 'September 25, 2023',
      excerpt: 'Learn how to style your applications using Tailwind CSS and its utility-first approach.',
    },
    {
      title: 'Next.js: The React Framework for Production',
      date: 'September 15, 2023',
      excerpt: 'Discover the features of Next.js that make it the go-to framework for React applications.',
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <header className="py-10 text-center">
        <h1 className="text-5xl font-semibold flex flex-row gap-1 justify-center items-end">My Blog
            <p className='font-normal'><CirclePlus size="40"/></p>
        </h1>
        <p className="mt-2 text-gray-400">Thoughts, stories, and ideas.</p>
      </header>

      <main className="flex-grow px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {posts.map((post, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 mb-6 shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-400 text-sm mt-1">{post.date}</p>
              <p className="mt-4">{post.excerpt}</p>
              <a href="#" className="text-blue-400 hover:underline mt-4 inline-block">Read more</a>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-6 text-center">
        <p className="text-gray-400">© {format(new Date(),'yyyy')} My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Main;