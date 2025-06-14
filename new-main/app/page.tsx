// In file: app/page.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles, Users, BarChart3, Zap, Target, Award } from "lucide-react";
import VantaBirds from "@/components/VantaBirds"; // <-- IMPORT THE NEW COMPONENT

export default function HomePage() {
  return (
    <div className="page-container">
      {/* 1. Add the new Vanta Birds background */}
      <VantaBirds />

      {/* 2. The old bubble background has been removed. */}

      {/* Top Logo - Enhanced */}
      <div className="absolute top-8 left-8 z-20 fade-in">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-400/40 to-purple-600/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-purple-400/40 shadow-2xl">
            <Brain className="w-8 h-8 text-purple-100" />
          </div>
          <span className="text-2xl font-bold text-white/90 drop-shadow-lg">Personality Insights</span>
        </div>
      </div>

      {/* Main Content - Place on top of the background with z-index */}
      <main className="flex items-center justify-center h-full w-full px-8 relative z-10">
        {/* All of your existing content from here down remains the same */}
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="slide-left">
            <h1 className="text-6xl lg:text-8xl font-black text-white/90 mb-6 drop-shadow-2xl tracking-tight text-glow leading-tight">
              Welcome to
            </h1>
            <h2 className="text-6xl lg:text-8xl font-black hero-gradient-text mb-8 drop-shadow-2xl tracking-tight leading-tight">
              Personality
              <br />
              Insights
            </h2>

            <p className="text-xl text-white/80 max-w-lg mb-12 leading-relaxed drop-shadow-lg font-medium">
              Discover the fascinating dynamics between personality types. Our scientifically validated insights help you 
              understand yourself and others through advanced neural analysis.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Link href="/assessment">
                <Button className="btn-primary text-lg px-10 py-5 hover-glow transform hover:scale-105 transition-all duration-300">
                  <Brain className="w-6 h-6 mr-3" />
                  Take Assessment
                </Button>
              </Link>
              
              <Button className="btn-secondary text-lg px-10 py-5 hover-glow transform hover:scale-105 transition-all duration-300">
                <Sparkles className="w-6 h-6 mr-3" />
                Learn More
              </Button>
            </div>

            <div className="flex space-x-12">
              <div className="text-center group cursor-pointer">
                <div className="w-12 h-12 bg-purple-400/30 backdrop-blur-sm rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-125 transition-all duration-500 border border-purple-400/40 shadow-xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full shadow-lg animate-pulse"></div>
                </div>
                <p className="text-white/70 text-sm font-medium group-hover:text-white/90 transition-colors">Scientific</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-12 h-12 bg-purple-400/30 backdrop-blur-sm rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-125 transition-all duration-500 border border-purple-400/40 shadow-xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <p className="text-white/70 text-sm font-medium group-hover:text-white/90 transition-colors">Accurate</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-12 h-12 bg-purple-400/30 backdrop-blur-sm rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-125 transition-all duration-500 border border-purple-400/40 shadow-xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <p className="text-white/70 text-sm font-medium group-hover:text-white/90 transition-colors">Insightful</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="slide-right">
            {/* The entire content of the right card remains exactly the same as before */}
            <div className="figma-card w-full h-96 lg:h-[600px] overflow-hidden">
                {/* ... all your content from the original file ... */}
            </div>
          </div>
        </div>

        {/* Bottom floating info */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in">
          <p className="text-white/50 text-sm font-medium backdrop-blur-sm bg-white/5 px-8 py-3 rounded-full border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:bg-white/10 cursor-pointer">
            ✨ Takes only 2 minutes • 100% Free • Instant AI Results
          </p>
        </div>
      </main>
    </div>
  );
}
