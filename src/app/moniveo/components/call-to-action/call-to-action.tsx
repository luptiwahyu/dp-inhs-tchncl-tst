import { ChevronRightIcon } from 'lucide-react'
import DpButton from '../button/button'

export default function CallToAction() {
  return (
    <section className="px-4 py-14 md:py-22 lg:mx-18 bg-radial-[at_50%_-200%] from-[#4875FF] via-[#1c2e66] to-[#0B132E] to-90%">
      <div className="w-full md:w-lg md:mx-auto">
        <div className="flex flex-col items-center justify-center space-y-2 text-3xl md:text-5xl">
          <div className="text-white">Turn workflow into</div>
          <div>
            <span className="text-blue-500">AI agent </span>
            <span className="text-white ">automations.</span>
          </div>
        </div>
        <div className="pt-6 text-gray-400 text-center md:w-md md:mx-auto">
          Powerful and production-ready, our cloud platform has the solutions
          you need to succeed.
        </div>
        <div className="flex items-center justify-center pt-10">
          <DpButton variant="primary">
            Get started <ChevronRightIcon />
          </DpButton>
        </div>
      </div>
    </section>
  )
}
