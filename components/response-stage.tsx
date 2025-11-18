'use client'

import { useState } from 'react'

interface ResponseStageProps {
  response: 'accept' | 'deny' | null
  onResponse: (answer: 'accept' | 'deny') => void
}

export default function ResponseStage({ response, onResponse }: ResponseStageProps) {
  const [hoverAccept, setHoverAccept] = useState(false)
  const [hoverDeny, setHoverDeny] = useState(false)

  if (response === 'accept') {
    return (
      <div className="space-y-6 text-center animate-in fade-in zoom-in duration-500">
        <div className="text-7xl sm:text-8xl">🎉</div>
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Good choice! 🙌
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            WWIiiwouu
            </p>

        </div>

      </div>
    )
  }

  if (response === 'deny') {
    return (
      <div className="space-y-6 text-center animate-in fade-in zoom-in duration-500">
        <div className="text-7xl sm:text-8xl">😅</div>
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            That's okay, No worries! 💙
          </h2>
          <p className="text-lg sm:text-xl text-accent font-semibold">
          </p>

        </div>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 py-2 px-6 bg-secondary text-secondary-foreground rounded-lg hover:bg-opacity-90 transition-all"
        >
          Try again
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6 text-center">
      {/* Question */}
      <div className="space-y-3">
        <p className="text-xl sm:text-2xl font-bold text-primary">
          So... what do you say? 👀
        </p>
        <p className="text-base sm:text-lg text-muted-foreground">
          Saturday? Just us? Fun times guaranteed? 🌟
        </p>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {/* Accept Button */}
        <button
          onMouseEnter={() => setHoverAccept(true)}
          onMouseLeave={() => setHoverAccept(false)}
          onClick={() => onResponse('accept')}
          className={`py-4 px-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${
            hoverAccept ? 'scale-105 shadow-lg' : 'scale-100'
          } bg-primary text-primary-foreground hover:bg-opacity-90`}
        >
          <span className="text-2xl block mb-1">😊</span>
          Yes!
        </button>

        {/* Deny Button */}
        <button
          onMouseEnter={() => setHoverDeny(true)}
          onMouseLeave={() => setHoverDeny(false)}
          onClick={() => onResponse('deny')}
          className={`py-4 px-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${
            hoverDeny ? 'scale-105 shadow-lg' : 'scale-100'
          } bg-secondary text-secondary-foreground hover:bg-opacity-90`}
        >
          <span className="text-2xl block mb-1">🤔</span>
          Maybe...
        </button>
      </div>

      {/* Funny note */}
      <p className="text-xs sm:text-sm text-muted-foreground italic pt-4">
        (The answer can only be yes, but I respect the thinking 😄)
      </p>
    </div>
  )
}
