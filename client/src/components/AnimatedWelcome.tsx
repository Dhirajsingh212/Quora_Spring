"use client"
// components/WelcomeScreen.js

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component in Shadcn UI

const AnimatedWelcome = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <motion.div
        className="text-center p-6 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Our App!</h1>
        <p className="mt-4 text-gray-600">
          We're glad to have you here. Let's get started!
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="mt-6 bg-blue-600 text-white hover:bg-blue-700">
            Get Started
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedWelcome;