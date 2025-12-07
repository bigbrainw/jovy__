"use client";

import { useState } from "react";

const canDealWith = [
  { id: 1, text: "Zootopia 2", emoji: "🦊", special: true },
  { id: 2, text: "Borrow computer", emoji: "💻", special: true },
  { id: 3, text: "Taking care of ex girlfriend when sick", emoji: "🤒", special: true },
  { id: 4, text: "Grab the electric components for ex", emoji: "🔌", special: true },
];

const cantDealWith = [
  { id: 1, text: "Getting back together", emoji: "💔" },
];

export default function Home() {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  return (
    <main className="min-h-screen bg-[#0d0d0d] bg-grid relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-12 pb-8 text-center animate-fade-down">
        <h1 className="font-display text-7xl md:text-9xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
          JOVY&apos;S LINE
        </h1>
        <p className="mt-4 text-gray-400 text-lg tracking-wide">
          Where tolerance meets its limit
        </p>
      </header>

      {/* Main split content */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-[70vh] px-4 md:px-8 gap-4 lg:gap-0">
        {/* CAN DEAL WITH - Left Side */}
        <section
          className={`flex-1 p-6 md:p-10 transition-all duration-500 ${
            hoveredSide === "left" ? "lg:flex-[1.1]" : ""
          }`}
          onMouseEnter={() => setHoveredSide("left")}
          onMouseLeave={() => setHoveredSide(null)}
        >
          <div className="mb-8">
            <h2 className="font-display text-4xl md:text-5xl text-green-400 tracking-wide flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              CAN DEAL WITH
            </h2>
            <div className="mt-2 h-1 w-32 bg-gradient-to-r from-green-400 to-transparent rounded-full" />
          </div>

          <div className="space-y-4">
            {canDealWith.map((item, index) => (
              <div
                key={item.id}
                className={`item-card gradient-border-green rounded-xl p-5 animate-slide-left ${
                  item.special
                    ? "ring-2 ring-yellow-400/50 ring-offset-2 ring-offset-[#0d0d0d]"
                    : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{item.emoji}</span>
                  <span className={`text-xl font-semibold ${item.special ? "text-yellow-300" : "text-gray-100"}`}>
                    {item.text}
                  </span>
                  {item.special && (
                    <span className="ml-auto px-3 py-1 bg-yellow-400/20 text-yellow-300 text-sm rounded-full font-medium">
                      ⭐ Approved
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* THE LINE - Center Divider */}
        <div className="relative flex items-center justify-center lg:px-4">
          {/* Horizontal line for mobile */}
          <div className="lg:hidden w-full h-1 the-line bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full my-8" />
          
          {/* Vertical line for desktop */}
          <div className="hidden lg:block relative">
            <div className="the-line w-1 h-[500px] bg-gradient-to-b from-transparent via-purple-500 to-transparent rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d0d0d] px-4 py-2 rounded-full border-2 border-purple-500 shadow-lg shadow-purple-500/30">
              <span className="font-display text-2xl text-purple-400 tracking-widest">THE LINE</span>
            </div>
          </div>
          
          {/* Mobile label */}
          <div className="lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0d0d0d] px-4 py-2 rounded-full border-2 border-purple-500 shadow-lg shadow-purple-500/30">
            <span className="font-display text-xl text-purple-400 tracking-widest">THE LINE</span>
          </div>
        </div>

        {/* CAN'T DEAL WITH - Right Side */}
        <section
          className={`flex-1 p-6 md:p-10 transition-all duration-500 ${
            hoveredSide === "right" ? "lg:flex-[1.1]" : ""
          }`}
          onMouseEnter={() => setHoveredSide("right")}
          onMouseLeave={() => setHoveredSide(null)}
        >
          <div className="mb-8">
            <h2 className="font-display text-4xl md:text-5xl text-red-400 tracking-wide flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-red-400 rounded-full animate-pulse" />
              CAN&apos;T DEAL WITH
            </h2>
            <div className="mt-2 h-1 w-32 bg-gradient-to-r from-red-400 to-transparent rounded-full" />
          </div>

          <div className="space-y-4">
            {cantDealWith.map((item, index) => (
              <div
                key={item.id}
                className="item-card gradient-border-red rounded-xl p-5 animate-slide-right"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: "forwards" }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{item.emoji}</span>
                  <span className="text-xl font-semibold text-gray-100">
                    {item.text}
                  </span>
                  <span className="ml-auto text-red-400 text-2xl">✕</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-gray-500 text-sm">
        <p>Everyone has their limits. This is Jovy&apos;s. 🎭</p>
      </footer>
    </main>
  );
}
