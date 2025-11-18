'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ProposalStageProps {
  stage: 'passing' | 'realization' | 'proposal'
  onNext: () => void
}

export default function ProposalStage({ stage, onNext }: ProposalStageProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
  }, [stage])

  const stages = {
    passing: {
      title: "Wait... I just passed by you...",
      subtitle: "Going about my day like any other day",
      description: "Just minding my business, thinking about the week that was... 🚶",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_ruohhoruohhoruoh-TuGqUwOts88l2iyzRVA19QcyYEvwod.png",
      emoji: "🚶"
    },
    realization: {
      title: "OH WAIT... 💡",
      subtitle: "Something just clicked!",
      description: "Hold on... this weekend is coming up! And I just remembered... we had a good time last time! And I said that I wanna know the new you more 😄",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_h26h24h26h24h26h-EYzTxTzlyi3Q7PlZ0D0jwpMDABisQX.png",
      emoji: "💡"
    },
    proposal: {
      title: "So here's my idea... 😊",
      subtitle: "No pressure, just thinking out loud!",
      description: "What if we went out this weekend? If you want to, of course! No big deal if you don't! 😄✨",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_t47yvht47yvht47y-48RbkAE1UPK53i50naTEhVMfmv6Pyk.png",
      emoji: "🎉"
    }
  }

  const current = stages[stage]

  return (
    <div
      className={`space-y-6 text-center transition-all duration-500 ${
        isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      onAnimationEnd={() => setIsAnimating(false)}
    >
      {/* Image Container */}
      <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg bg-white flex items-center justify-center">
        <img
          src={current.image || "/placeholder.svg"}
          alt={current.title}
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 40%' }} // adjusted object-position to crop lower and show more of the face
        />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary">
          {current.title}
        </h1>
        <p className="text-lg sm:text-xl font-semibold text-accent">
          {current.subtitle}
        </p>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          {current.description}
        </p>
      </div>

      {/* Button */}
      <button
        onClick={onNext}
        className="w-full py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-opacity-90 transition-all duration-300 text-base sm:text-lg shadow-md hover:shadow-lg"
      >
        {stage === 'proposal' ? 'What do you think? 🤔' : 'Next →'}
      </button>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 pt-4">
        {(['passing', 'realization', 'proposal'] as const).map((s) => (
          <div
            key={s}
            className={`h-2 rounded-full transition-all duration-300 ${
              s === stage
                ? 'bg-primary w-6'
                : stage === 'proposal'
                ? 'bg-accent w-2'
                : stage === 'realization' && s === 'proposal'
                ? 'bg-accent-light w-2'
                : 'bg-gray-300 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
