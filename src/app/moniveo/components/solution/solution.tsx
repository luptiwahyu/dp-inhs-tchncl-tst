import { ChevronRightIcon, SparklesIcon } from 'lucide-react'
import DpButton from '../button/button'
import DpInputPrompt from '../input-prompt/input-prompt'

export default function Solution() {
  return (
    <section className="bg-linear-to-b from-white to-blue-100 lg:mx-18 border-x border-gray-100">
      <div className="p-4 md:px-20 md:py-16 w-full md:w-2xl">
        <div className="flex items-center space-x-2 w-fit py-1 px-3 text-xs text-blue-500 font-medium rounded-full bg-blue-50">
          <SparklesIcon className="size-3" />
          <span>AI SOLUTION</span>
        </div>
        <div className="text-3xl md:text-5xl text-black pt-5">
          <div>Turn workflow into</div>
          <div>
            <span className="text-blue-500">AI agent</span>
            <span>&nbsp;automations.</span>
          </div>
        </div>
        <div className="text-gray-500 pt-5 text-lg">
          Powerful and production-ready, our cloud platform has the solutions
          you need to succeed.
        </div>
        <div className="pt-5">
          <DpButton variant="primary" size="large">
            Get Started
            <ChevronRightIcon />
          </DpButton>
        </div>
      </div>

      <div className="flex justify-end text-right p-4 md:p-10">
        <DpInputPrompt className="w-full md:w-sm" />
      </div>
    </section>
  )
}
