"use client"
import React from "react";
import { Meteors } from "@/components/ui/meteors";

function Page() {
  return (
     <div className="min-h-screen bg-black py-12 pt-36 px-4 flex flex-col items-center">
      <div className="relative w-full max-w-xl">
        {/* Glowing background gradient */}
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />

        {/* Main form container */}
        <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-6 py-10 shadow-xl">

          <h1 className="text-4xl md:text-5xl text-center font-bold mb-6 text-white">
            Contact Us
          </h1>

          <p className="text-slate-400 text-center max-w-md mb-8 text-sm md:text-base leading-relaxed">
            We&apos;re here to help with any questions about our courses, programs, or events.
            Reach out and let us know how we can assist you in your musical journey.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full space-y-4"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />

            <textarea
              placeholder="Your message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
            />

            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>

          {/* Meteor particles */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}

export default Page;
