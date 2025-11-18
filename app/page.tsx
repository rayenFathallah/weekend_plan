'use client'

import { useState } from 'react'
import ProposalStage from '@/components/proposal-stage'
import ResponseStage from '@/components/response-stage'

type Stage = 'passing' | 'realization' | 'proposal' | 'response'

export default function Page() {
  const [currentStage, setCurrentStage] = useState<Stage>('passing')
  const [response, setResponse] = useState<'accept' | 'deny' | null>(null)

  const handleNext = () => {
    if (currentStage === 'passing') setCurrentStage('realization')
    else if (currentStage === 'realization') setCurrentStage('proposal')
    else if (currentStage === 'proposal') setCurrentStage('response')
  }

  const handleResponse = (answer: 'accept' | 'deny') => {
    setResponse(answer)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-warm-50 via-white to-accent-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {currentStage !== 'response' ? (
          <ProposalStage
            stage={currentStage}
            onNext={handleNext}
          />
        ) : (
          <ResponseStage
            response={response}
            onResponse={handleResponse}
          />
        )}
      </div>
    </main>
  )
}
