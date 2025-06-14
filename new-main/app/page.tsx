import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Sparkles, Users, BarChart3, Zap, Target, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="page-container">
      {/* Enhanced Dark Theme Bubble Background with Mouse Interaction */}
      <div className="bubble-background">
        <div className="bubble interactive-bubble"></div>
        <div className="bubble interactive-bubble"></div>
        <div className="bubble interactive-bubble"></div>
        <div className="bubble interactive-bubble"></div>
        <div className="bubble interactive-bubble"></div>
        <div className="bubble interactive-bubble"></div>
        <div className="bubble interactive-bubble"></div>
        <div className="bubble interactive-bubble"></div>
      </div>

      {/* Top Logo - Enhanced */}
      <div className="absolute top-8 left-8 z-20 fade-in">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-400/40 to-purple-600/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-purple-400/40 shadow-2xl">
            <Brain className="w-8 h-8 text-purple-100" />
          </div>
          <span className="text-2xl font-bold text-white/90 drop-shadow-lg">Personality Insights</span>
        </div>
      </div>

      {/* Main Content - Enhanced Figma Style Layout */}
      <main className="flex items-center justify-center h-full w-full px-8 relative z-10">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Enhanced */}
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

            {/* Enhanced CTA Buttons */}
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

            {/* Enhanced Feature highlights */}
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

          {/* Right Content - MASSIVELY Enhanced Brain Logo Card */}
          <div className="slide-right">
            <div className="figma-card w-full h-96 lg:h-[600px] overflow-hidden">
              <div className="space-image h-full p-8 flex flex-col justify-between relative">
                {/* Enhanced Neural Network Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
                  style={{ backgroundImage: `url(https://images.unsplash.com/photo-1597733336794-12d05021d510)` }}
                />
                
                {/* Floating Tech Elements */}
                <div className="absolute top-16 left-16 floating-element">
                  <div className="w-4 h-4 bg-white/60 rounded-full shadow-lg animate-pulse"></div>
                </div>
                <div className="absolute top-24 right-20 floating-element">
                  <div className="w-3 h-3 bg-white/40 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <div className="absolute bottom-32 left-12 floating-element">
                  <div className="w-5 h-5 bg-white/70 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <div className="absolute bottom-20 right-16 floating-element">
                  <div className="w-3 h-3 bg-white/50 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>
                
                {/* Larger celestial bodies */}
                <div className="absolute top-20 right-1/4 floating-element">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-300/60 to-pink-300/60 rounded-full shadow-2xl animate-pulse"></div>
                </div>
                <div className="absolute bottom-1/4 left-1/3 floating-element">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-300/60 to-purple-300/60 rounded-full shadow-2xl animate-pulse" style={{ animationDelay: '0.7s' }}></div>
                </div>

                {/* MASSIVE Central Brain Logo Area */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative group cursor-pointer">
                    {/* Enhanced Central Brain Logo - Much Bigger */}
                    <div className="w-40 h-40 lg:w-48 lg:h-48 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border-2 border-white/40 relative group-hover:scale-110 transition-all duration-500 group-hover:border-purple-400/60">
                      {/* Multiple Brain Icons for Depth */}
                      <div className="relative">
                        <Brain className="w-20 h-20 lg:w-24 lg:h-24 text-white drop-shadow-2xl" />
                        <div className="absolute inset-0 animate-pulse">
                          <Brain className="w-20 h-20 lg:w-24 lg:h-24 text-purple-200/30" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Neural Network Connections */}
                    <div className="absolute inset-0 scale-125">
                      {/* Orbiting Connection Nodes */}
                      <div className="absolute top-4 left-4 w-6 h-6 bg-white/50 rounded-full shadow-lg animate-pulse group-hover:scale-125 transition-all duration-300"></div>
                      <div className="absolute top-4 right-4 w-5 h-5 bg-white/60 rounded-full shadow-lg animate-pulse group-hover:scale-125 transition-all duration-300" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute bottom-4 left-4 w-5 h-5 bg-white/55 rounded-full shadow-lg animate-pulse group-hover:scale-125 transition-all duration-300" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/45 rounded-full shadow-lg animate-pulse group-hover:scale-125 transition-all duration-300" style={{ animationDelay: '1.5s' }}></div>
                      
                      {/* Enhanced Connection SVG Lines */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                        <defs>
                          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: 'rgba(255,255,255,0.4)', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: 'rgba(147,51,234,0.6)', stopOpacity: 1 }} />
                          </linearGradient>
                        </defs>
                        <line x1="20" y1="20" x2="50" y2="50" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse group-hover:stroke-4 transition-all duration-300"/>
                        <line x1="80" y1="20" x2="50" y2="50" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse group-hover:stroke-4 transition-all duration-300" style={{ animationDelay: '0.5s' }}/>
                        <line x1="20" y1="80" x2="50" y2="50" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse group-hover:stroke-4 transition-all duration-300" style={{ animationDelay: '1s' }}/>
                        <line x1="80" y1="80" x2="50" y2="50" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse group-hover:stroke-4 transition-all duration-300" style={{ animationDelay: '1.5s' }}/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Enhanced Content overlay */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border border-white/30 mb-4 hover:scale-110 transition-all duration-300 cursor-pointer">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 text-glow">Neural Intelligence</h3>
                  <p className="text-white/80 text-base">Advanced AI-powered personality mapping</p>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-3 text-white/70 text-base">
                    <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg animate-pulse"></div>
                    <span className="font-medium">Advanced Psychology Engine Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom floating info */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in">
          <p className="text-white/50 text-sm font-medium backdrop-blur-sm bg-white/5 px-8 py-3 rounded-full border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:bg-white/10 cursor-pointer">
            ✨ Takes only 2 minutes • 100% Free • Instant AI Results
          </p>
        </div>
      </main>
    </div>
  )
}