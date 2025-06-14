"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Brain, Loader2, Users, Clock, Mic, Coffee, Zap, Mountain, Trees, Waves, ChevronLeft, ChevronRight, Eye } from "lucide-react"
import { z } from "zod"

// --- CORRECTED: The validation schema now matches your actual data ranges ---
const PersonalitySchema = z.object({
  Time_spent_Alone: z.number().int().min(0).max(10, "Value must be 10 or less"),
  Stage_fear: z.number().int().min(0).max(1, "Value must be 0 or 1"),
  Social_event_frequency: z.number().int().min(0).max(10, "Value must be 10 or less"), // Using a reasonable assumption
  Going_out: z.number().int().min(0).max(10, "Value must be 10 or less"),
  Drained_after_socializing: z.number().int().min(0).max(1, "Value must be 0 or 1"),
  Friends_circle_size: z.number().int().min(0).max(15, "Value must be 15 or less"),
  Post_frequency: z.number().int().min(0).max(10, "Value must be 10 or less"),
})

interface FormData {
  Time_spent_Alone: number
  Stage_fear: number
  Social_event_frequency: number
  Going_out: number
  Drained_after_socializing: number
  Friends_circle_size: number
  Post_frequency: number
}

const questionData = [
  {
    key: 'Time_spent_Alone' as keyof FormData,
    title: 'Solitude & Reflection',
    description: 'How much do you enjoy spending time alone in quiet reflection?',
    fullDescription: 'This measures your preference for solitary activities and introspective thinking. Introverts typically score higher on this dimension, finding energy and clarity through alone time.',
    icon: Mountain,
    backgroundImage: 'https://images.pexels.com/photos/6053232/pexels-photo-6053232.jpeg',
    gradientFrom: 'from-purple-600/80',
    gradientTo: 'to-indigo-600/80',
    min: 0,
    max: 10,
    labels: ['Never', 'Always']
  },
  {
    key: 'Stage_fear' as keyof FormData,
    title: 'Public Speaking',
    description: 'Do you experience anxiety when speaking in front of groups?',
    fullDescription: 'Public speaking anxiety is often linked to introversion and social anxiety. This helps us understand your comfort level with being the center of attention.',
    icon: Mic,
    backgroundImage: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1',
    gradientFrom: 'from-purple-500/80',
    gradientTo: 'to-purple-700/80',
    min: 0,
    max: 1,
    options: ['No Fear', 'Experience Fear']
  },
  {
    key: 'Social_event_frequency' as keyof FormData,
    title: 'Social Gatherings',
    description: 'How often do you actively participate in social events?',
    fullDescription: 'Your frequency of social participation reveals how much energy you derive from group interactions and social stimulation.',
    icon: Users,
    backgroundImage: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1',
    gradientFrom: 'from-indigo-500/80',
    gradientTo: 'to-purple-600/80',
    min: 0,
    max: 10,
    labels: ['Never', 'Very Often']
  },
  {
    key: 'Going_out' as keyof FormData,
    title: 'Social Adventures',
    description: 'How much do you enjoy going out with friends?',
    fullDescription: 'This explores your enthusiasm for social outings and external stimulation. Extroverts typically thrive on such social adventures.',
    icon: Coffee,
    backgroundImage: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1',
    gradientFrom: 'from-purple-600/80',
    gradientTo: 'to-indigo-500/80',
    min: 0,
    max: 10,
    labels: ['Not at all', 'Love it']
  },
  {
    key: 'Drained_after_socializing' as keyof FormData,
    title: 'Energy Recovery',
    description: 'Do you feel emotionally drained after social interactions?',
    fullDescription: 'A key indicator of introversion vs extroversion - introverts often need recovery time after social interactions, while extroverts feel energized.',
    icon: Zap,
    backgroundImage: 'https://images.pexels.com/photos/8378741/pexels-photo-8378741.jpeg',
    gradientFrom: 'from-indigo-600/80',
    gradientTo: 'to-purple-500/80',
    min: 0,
    max: 1,
    options: ['Feel Energized', 'Feel Drained']
  },
  {
    key: 'Friends_circle_size' as keyof FormData,
    title: 'Inner Circle',
    description: 'How many people do you consider truly close friends?',
    fullDescription: 'Introverts tend to have smaller, deeper circles of close friends, while extroverts often maintain larger social networks.',
    icon: Trees,
    backgroundImage: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1',
    gradientFrom: 'from-purple-500/80',
    gradientTo: 'to-indigo-600/80',
    min: 0,
    max: 15,
    labels: ['0', '15+']
  },
  {
    key: 'Post_frequency' as keyof FormData,
    title: 'Digital Expression',
    description: 'How often do you share your thoughts online?',
    fullDescription: 'Digital sharing patterns can reveal personality traits - some prefer private reflection while others enjoy public expression and engagement.',
    icon: Waves,
    backgroundImage: 'https://images.pexels.com/photos/8378741/pexels-photo-8378741.jpeg',
    gradientFrom: 'from-indigo-500/80',
    gradientTo: 'to-purple-600/80',
    min: 0,
    max: 10,
    labels: ['Never', 'Daily']
  }
]

export default function AssessmentPage() {
  const router = useRouter()
  // The initial state provides default values within the correct ranges
  const [formData, setFormData] = useState<FormData>({
    Time_spent_Alone: 5,
    Stage_fear: 0,
    Social_event_frequency: 5,
    Going_out: 5,
    Drained_after_socializing: 0,
    Friends_circle_size: 7,
    Post_frequency: 5,
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})
  
  // New state for flashcard-style navigation
  const [currentPage, setCurrentPage] = useState(0)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  
  const questionsPerPage = 3
  const totalPages = Math.ceil(questionData.length / questionsPerPage)
  const currentQuestions = questionData.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  )

  // This handler updates the state for any input field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: Number(value), // Convert input string to number
    });
  };

  const validateForm = () => {
    const result = PersonalitySchema.safeParse(formData);
    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path) {
          errors[err.path[0].toString()] = err.message;
        }
      });
      setValidationErrors(errors);
      return false;
    }
    setValidationErrors({});
    return true;
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentPage(currentPage + 1)
        setExpandedCard(null)
        setIsAnimating(false)
      }, 300)
    }
  }

  const handlePrevious = () => {
    if (currentPage > 0) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentPage(currentPage - 1)
        setExpandedCard(null)
        setIsAnimating(false)
      }, 300)
    }
  }

  const toggleCardExpansion = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
        alert("Please correct the errors before submitting.");
        return;
    }
    setIsSubmitting(true);
    
    try {
      // Step 1: Get the prediction from the /predict endpoint
      const predictResponse = await fetch("https://ml-backend-rk7t.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (predictResponse.ok) {
        const result = await predictResponse.json();
        
        // Step 2: Prepare the data to be saved to the database
        const dataToSave = {
            ...formData,
            prediction: result.result
        };
        
        // Step 3: Send the combined data to the new /save-assessment endpoint
        fetch("https://ml-backend-rk7t.onrender.com/save-assessment", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSave)
        });
        
        // Step 4: Continue the user flow immediately
        localStorage.setItem("personalityResult", JSON.stringify(result));
        router.push("/results");

      } else {
        const errorData = await predictResponse.json();
        alert(`Error: ${errorData.detail || "Failed to submit assessment"}`);
      }
    } catch (error) {
      console.error("Error connecting to server:", error);
      alert("Error connecting to server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* Enhanced Header with Bigger Brain Logo */}
      <div className="absolute top-8 left-8 z-20 fade-in">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400/30 to-purple-600/40 backdrop-blur-sm rounded-xl flex items-center justify-center border border-purple-400/30 shadow-2xl">
            <Brain className="w-9 h-9 text-purple-100" />
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-black text-white/90 drop-shadow-lg text-glow">
              Personality Assessment
            </h1>
            <p className="text-white/70 text-sm">Question {currentPage * questionsPerPage + 1}-{Math.min((currentPage + 1) * questionsPerPage, questionData.length)} of {questionData.length}</p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute top-8 right-8 z-20 fade-in">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
          <div className="w-32 h-2 bg-gray-600 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-500"
              style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Flashcard-style Assessment Form */}
      <main className="flex flex-col items-center justify-center h-full w-full px-4 py-6 relative z-10">
        <div className="w-full max-w-7xl">
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Flashcard Container */}
            <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {currentQuestions.map((question, index) => {
                  const IconComponent = question.icon
                  const actualIndex = currentPage * questionsPerPage + index
                  const isExpanded = expandedCard === actualIndex
                  
                  return (
                    <div 
                      key={question.key} 
                      className={`flashcard-container transform transition-all duration-500 ${isExpanded ? 'lg:col-span-3 scale-105' : ''}`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className={`flashcard ${isExpanded ? 'expanded' : ''}`}>
                        {/* Card Front/Summary View */}
                        <div className={`flashcard-front ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                          {/* Background Image with Overlay */}
                          <div className="relative h-48 overflow-hidden rounded-t-2xl">
                            <div 
                              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                              style={{ backgroundImage: `url(${question.backgroundImage})` }}
                            />
                            <div className={`absolute inset-0 bg-gradient-to-br ${question.gradientFrom} ${question.gradientTo}`} />
                            
                            {/* Bigger Brain Logo in corner */}
                            <div className="absolute top-4 right-4">
                              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                                <Brain className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            
                            {/* Content Overlay */}
                            <div className="relative h-full p-6 flex flex-col justify-between">
                              <div className="flex items-start justify-between">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
                                  <IconComponent className="w-6 h-6 text-white" />
                                </div>
                              </div>
                              
                              <div>
                                <h3 className="text-2xl font-bold text-white mb-2 text-glow">{question.title}</h3>
                                <p className="text-white/80 text-sm leading-tight">{question.description}</p>
                              </div>
                            </div>
                          </div>

                          {/* Quick Input Section */}
                          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-b-2xl">
                            <div className="flex justify-between items-center mb-4">
                              <span className="text-sm text-gray-300 font-semibold">Quick Answer:</span>
                              <button
                                type="button"
                                onClick={() => toggleCardExpansion(actualIndex)}
                                className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2 text-sm"
                              >
                                <Eye className="w-4 h-4" />
                                Expand
                              </button>
                            </div>
                            
                            {question.options ? (
                              <div className="flex gap-3">
                                {question.options.map((option, optionIndex) => (
                                  <label key={optionIndex} className="flex-1 cursor-pointer">
                                    <div className={`p-3 rounded-lg border-2 transition-all duration-200 text-center ${
                                      formData[question.key] === optionIndex 
                                        ? 'border-purple-400 bg-purple-400/20 text-white' 
                                        : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-purple-400/50'
                                    }`}>
                                      <input
                                        type="radio"
                                        name={question.key}
                                        value={optionIndex}
                                        checked={formData[question.key] === optionIndex}
                                        onChange={handleInputChange}
                                        className="sr-only"
                                      />
                                      <span className="text-sm font-medium">{option}</span>
                                    </div>
                                  </label>
                                ))}
                              </div>
                            ) : (
                              <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-2xl font-bold text-purple-400 text-glow">{formData[question.key]}</span>
                                </div>
                                
                                <input
                                  type="range"
                                  id={question.key}
                                  name={question.key}
                                  min={question.min}
                                  max={question.max}
                                  value={formData[question.key]}
                                  onChange={handleInputChange}
                                  className="flashcard-slider w-full h-3 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                                  style={{
                                    background: `linear-gradient(to right, #7877c6 0%, #7877c6 ${(formData[question.key] / question.max) * 100}%, #374151 ${(formData[question.key] / question.max) * 100}%, #374151 100%)`
                                  }}
                                />
                                
                                <div className="flex justify-between text-xs text-gray-400 font-medium">
                                  <span>{question.labels?.[0] || question.min}</span>
                                  <span>{question.labels?.[1] || question.max}</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Card Back/Expanded View */}
                        <div className={`flashcard-back ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                          <div className="p-8 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl border border-purple-400/30">
                            <div className="flex items-start justify-between mb-6">
                              <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-purple-400/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-purple-400/30">
                                  <IconComponent className="w-8 h-8 text-purple-200" />
                                </div>
                                <div>
                                  <h3 className="text-3xl font-bold text-white mb-2 text-glow">{question.title}</h3>
                                  <p className="text-white/70">{question.description}</p>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => setExpandedCard(null)}
                                className="text-white/60 hover:text-white text-2xl"
                              >
                                ×
                              </button>
                            </div>
                            
                            <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                              <p className="text-white/80 leading-relaxed">{question.fullDescription}</p>
                            </div>
                            
                            {/* Full Input Section */}
                            <div className="space-y-4">
                              {question.options ? (
                                <div className="grid grid-cols-2 gap-4">
                                  {question.options.map((option, optionIndex) => (
                                    <label key={optionIndex} className="cursor-pointer">
                                      <div className={`p-4 rounded-lg border-2 transition-all duration-200 text-center ${
                                        formData[question.key] === optionIndex 
                                          ? 'border-purple-400 bg-purple-400/20 text-white' 
                                          : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-purple-400/50'
                                      }`}>
                                        <input
                                          type="radio"
                                          name={question.key}
                                          value={optionIndex}
                                          checked={formData[question.key] === optionIndex}
                                          onChange={handleInputChange}
                                          className="sr-only"
                                        />
                                        <span className="font-medium">{option}</span>
                                      </div>
                                    </label>
                                  ))}
                                </div>
                              ) : (
                                <div className="space-y-4">
                                  <div className="text-center">
                                    <span className="text-4xl font-bold text-purple-400 text-glow">{formData[question.key]}</span>
                                  </div>
                                  
                                  <input
                                    type="range"
                                    id={question.key}
                                    name={question.key}
                                    min={question.min}
                                    max={question.max}
                                    value={formData[question.key]}
                                    onChange={handleInputChange}
                                    className="flashcard-slider w-full h-4 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                                    style={{
                                      background: `linear-gradient(to right, #7877c6 0%, #7877c6 ${(formData[question.key] / question.max) * 100}%, #374151 ${(formData[question.key] / question.max) * 100}%, #374151 100%)`
                                    }}
                                  />
                                  
                                  <div className="flex justify-between text-sm text-gray-400 font-medium">
                                    <span>{question.labels?.[0] || question.min}</span>
                                    <span>{question.labels?.[1] || question.max}</span>
                                  </div>
                                </div>
                              )}
                              
                              {validationErrors[question.key] && (
                                <p className="text-red-400 text-sm mt-2 font-medium">{validationErrors[question.key]}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center pt-8">
              <Button
                type="button"
                onClick={handlePrevious}
                disabled={currentPage === 0}
                className="btn-secondary px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Previous
              </Button>

              <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === currentPage ? 'bg-purple-400 scale-125' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              {currentPage === totalPages - 1 ? (
                <Button 
                  type="submit" 
                  className="btn-primary px-8 py-3 text-white hover-glow" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-3 h-5 w-5 animate-spin" /> 
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Brain className="mr-3 h-5 w-5" />
                      Get Results
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="btn-primary px-6 py-3"
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              )}
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}