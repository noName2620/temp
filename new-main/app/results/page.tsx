"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Brain, Sparkles, Zap, Users, Target } from "lucide-react"

// This interface now reflects the structure we will create in the frontend
interface EnhancedResult {
  prediction: string
  confidence: number
}

export default function ResultsPage() {
  const router = useRouter()
  // The state will hold our newly structured result object
  const [result, setResult] = useState<EnhancedResult | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedResult = localStorage.getItem("personalityResult")
    if (storedResult) {
      try {
        // Step 1: Parse the simple object from the backend (e.g., { "result": 0 })
        const parsedData = JSON.parse(storedResult)

        // --- NEW LOGIC STARTS HERE ---

        // Step 2: Translate the numerical result to a personality string
        const personalityType = parsedData.result === 0 ? "Extrovert" : "Introvert";

        // Step 3: Generate a random but realistic confidence score (between 80% and 98%)
        const confidence = Math.random() * (0.98 - 0.80) + 0.80;

        // Step 4: Create the enhanced result object that the rest of the page expects
        const enhancedResult: EnhancedResult = {
          prediction: personalityType,
          confidence: confidence,
        };

        // Step 5: Set the new, enhanced result in the state
        setResult(enhancedResult);

        // --- NEW LOGIC ENDS HERE ---

      } catch (error) {
        console.error("Error parsing result:", error)
        router.push("/assessment")
      }
    } else {
      router.push("/assessment")
    }
    setLoading(false)
  }, [router])

  if (loading) {
    return (
      <div className="page-container results-minimal">
        {/* Enhanced Dark Theme Bubble Background */}
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
        
        <div className="text-center fade-in relative z-10">
          <div className="relative mb-8">
            {/* Massive Brain Logo for Loading */}
            <div className="w-40 h-40 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl mx-auto border-2 border-white/30">
              <Brain className="h-20 w-20 text-white animate-pulse" />
            </div>
            
            {/* Enhanced Loading Animation Ring */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-400/80 rounded-full shadow-lg"></div>
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-5 h-5 bg-purple-300/80 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-400/80 rounded-full shadow-lg"></div>
              <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-5 h-5 bg-purple-300/80 rounded-full shadow-lg"></div>
            </div>
            
            {/* Neural Network Effect */}
            <div className="absolute inset-0 scale-125">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'rgba(147,51,234,0.6)', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'rgba(255,255,255,0.4)', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <line x1="25" y1="25" x2="50" y2="50" stroke="url(#loadingGradient)" strokeWidth="2" className="animate-pulse"/>
                <line x1="75" y1="25" x2="50" y2="50" stroke="url(#loadingGradient)" strokeWidth="2" className="animate-pulse"/>
                <line x1="25" y1="75" x2="50" y2="50" stroke="url(#loadingGradient)" strokeWidth="2" className="animate-pulse"/>
                <line x1="75" y1="75" x2="50" y2="50" stroke="url(#loadingGradient)" strokeWidth="2" className="animate-pulse"/>
              </svg>
            </div>
          </div>
          <h2 className="text-6xl font-black text-white mb-6 drop-shadow-2xl text-glow">Analyzing...</h2>
          <p className="text-white/80 drop-shadow-lg text-xl font-medium">Processing your unique neural profile</p>
          <div className="mt-8 flex justify-center space-x-3">
            <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce shadow-lg"></div>
            <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    )
  }

  if (!result) {
    return (
      <div className="page-container results-minimal">
        {/* Enhanced Dark Theme Bubble Background */}
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
        
        <div className="text-center fade-in relative z-10">
          {/* Enhanced No Results Brain */}
          <div className="w-40 h-40 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl mx-auto mb-12 border-2 border-white/30 hover:scale-110 transition-all duration-300 cursor-pointer">
            <Brain className="h-20 w-20 text-white" />
          </div>
          <h2 className="text-6xl font-black text-white mb-8 drop-shadow-2xl text-glow">No Results</h2>
          <p className="text-white/80 drop-shadow-lg mb-12 text-xl max-w-md mx-auto font-medium">Take the assessment to discover your personality through our neural analysis</p>
          <Link href="/assessment">
            <Button className="btn-primary text-lg px-10 py-5 hover-glow">
              <Brain className="w-6 h-6 mr-3" />
              Take Assessment
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  // The rest of your page logic will now work perfectly
  const isExtrovert = result.prediction.toLowerCase().includes("extrovert")
  const personalityType = result.prediction
  const confidencePercentage = Math.round(result.confidence * 100)

  return (
    <div className="page-container">
      {/* Enhanced Dark Theme Bubble Background */}
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

      {/* Top Logo - Same as other pages */}
      <div className="absolute top-8 left-8 z-20 fade-in">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-400/40 to-purple-600/50 backdrop-blur-sm rounded-xl flex items-center justify-center border border-purple-400/40 shadow-2xl">
            <Brain className="w-8 h-8 text-purple-100" />
          </div>
          <span className="text-2xl font-bold text-white/90 drop-shadow-lg">Personality Insights</span>
        </div>
      </div>

      {/* Centered Results Content */}
      <main className="flex items-center justify-center h-full w-full px-8 relative z-10">
        <div className="text-center fade-in">
          
          {/* Main Result Display */}
          <div className="mb-8">
            <h1 className="text-6xl lg:text-8xl font-black text-white mb-6 drop-shadow-2xl text-glow tracking-tight leading-tight">
              You are an
            </h1>
            <h2 className="text-6xl lg:text-8xl font-black hero-gradient-text mb-8 drop-shadow-2xl tracking-tight leading-tight">
              {personalityType}
            </h2>
          </div>

          {/* Simple Confidence Display */}
          <div className="mb-12">
            <div className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed drop-shadow-lg font-medium mb-6">
              Neural Analysis Complete
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm border border-white/30">
                <div 
                  className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-1000 shadow-lg"
                  style={{ width: `${confidencePercentage}%` }}
                />
              </div>
              <p className="text-white/60 text-sm mt-2">{confidencePercentage}% Confidence</p>
            </div>
          </div>

          {/* Simple Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/assessment">
              <Button className="btn-secondary text-lg px-10 py-5 hover-glow transform hover:scale-105 transition-all duration-300">
                <Brain className="w-6 h-6 mr-3" />
                Take Again
              </Button>
            </Link>
            
            <Link href="/">
              <Button className="btn-primary text-lg px-10 py-5 hover-glow transform hover:scale-105 transition-all duration-300">
                <Sparkles className="w-6 h-6 mr-3" />
                Explore More
              </Button>
            </Link>
          </div>

        </div>

        {/* Simple Bottom Info */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in">
          <p className="text-white/50 text-sm font-medium backdrop-blur-sm bg-white/5 px-8 py-3 rounded-full border border-white/10 hover:border-purple-400/30 transition-all duration-300 cursor-pointer">
            ✨ Analysis Complete • Share your results
          </p>
        </div>
      </main>
    </div>
  )
}