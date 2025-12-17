import Image from 'next/image'
import DpInputPrompt from '../input-prompt/input-prompt'

export default function Automation() {
  return (
    <section className="bg-radial-[at_50%_-200%] from-[#4875FF] via-[#1c2e66] to-[#0B132E] to-90%">
      <div className="p-4 md:px-20 md:py-16 lg:mx-18 border-x border-gray-800">
        <div className="text-sm text-blue-500">AI + AUTOMATION</div>
        <div className="text-3xl md:text-5xl text-white pt-5 pb-10">
          <div>Enterprise-ready</div>
          <div>automation in seconds</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-3 rounded-xl bg-white/5 p-4 md:p-8">
            <div className="lg:w-sm">
              <div className="text-white pb-2">AI for the whole team</div>
              <div className="text-sm text-gray-400">
                Bring workflow automation and AI to the entire organization with
                apps, chatbots, and integrations.
              </div>
            </div>
            <div className="flex justify-center pt-10 pb-2">
              <DpInputPrompt color="gray" className="w-full lg:w-sm" />
            </div>
          </div>
          <div className="md:col-span-2 rounded-xl bg-white/5 p-4 md:p-8">
            <div className="flex justify-center">
              <Image
                src="security.svg"
                alt="security"
                width={240}
                height={140}
              />
            </div>
            <div className="space-x-2">
              <div className="text-white">Enterprise security</div>
              <div className="text-gray-400 text-sm">
                Keep data safe with best‑in‑class security protocols and AI
                guardrails.
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-6">
          <div className="md:col-span-2 rounded-xl bg-white/5 p-4 md:p-8">
            <div className="space-x-2">
              <div className="text-white">Integrate everything</div>
              <div className="text-gray-400 text-sm">
                Connect any tool, LLM, or app to orchestrate intelligent
                workflows.
              </div>
            </div>
            <div className="flex justify-center h-50">
              <Image
                src="integrate.svg"
                alt="integrate"
                width={220}
                height={220}
              />
            </div>
          </div>
          <div className="md:col-span-3 rounded-xl bg-white/5 p-4 md:p-8">
            <div className="lg:w-sm space-x-2">
              <div className="text-white">Fast and intuitive</div>
              <div className="text-gray-400 text-sm">
                Build easily with drag and drop, low/no‑code and collaboration
                tools.
              </div>
            </div>
            <div className="grid grid-cols-3 h-50">
              <div className="flex items-center justify-end -mt-8">
                <Image
                  src="cursor-seller.svg"
                  alt="cursor-seller"
                  width={66}
                  height={48}
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="ai-chatbots-button.svg"
                  alt="ai-chatbots-button"
                  width={175}
                  height={60}
                />
              </div>
              <div className="flex items-center mt-22">
                <Image
                  src="cursor-customer.svg"
                  alt="cursor-customer"
                  width={88}
                  height={48}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
