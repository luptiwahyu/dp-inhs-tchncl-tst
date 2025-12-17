import {
  MessagesSquareIcon,
  NetworkIcon,
  Table2Icon,
  TvMinimalPlayIcon,
} from 'lucide-react'
import Image from 'next/image'

export default function Toolkit() {
  return (
    <section className="bg-white lg:mx-18 border-x border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center min-h-140">
          <div className="px-4">
            <div className="p-6 rounded-xl bg-linear-to-b from-blue-100 to-blue-50">
              <Image
                src="ai-chatbot.svg"
                alt="ai-chatbot"
                width={340}
                height={340}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center min-h-140">
          <div className="px-4 md:px-10">
            <div className="text-xs text-blue-500">TOOLKIT</div>
            <div className="py-4 text-3xl md:text-4xl">
              Complete toolkit for AI automation
            </div>
            <div className="flex space-x-4 border-b-2 border-blue-500 py-4">
              <div className="flex-none">
                <MessagesSquareIcon className="size-5 text-blue-500" />
              </div>
              <div>
                <div className="font-semibold pb-2">AI Chatbots</div>
                <div className="text-gray-500 text-sm">
                  Powerful and production-ready, our cloud platform has the
                  solutions you need to succeed.
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4 py-6 border-b-2 border-b-gray-100  cursor-pointer">
              <div className="flex-none">
                <NetworkIcon className="size-5 text-gray-400" />
              </div>
              <div className="font-semibold">Workflows</div>
            </div>
            <div className="flex items-center space-x-4 py-6 border-b-2 border-b-gray-100  cursor-pointer">
              <div className="flex-none">
                <Table2Icon className="size-5 text-gray-400" />
              </div>
              <div className="font-semibold">Tables</div>
            </div>
            <div className="flex items-center space-x-4 py-6 border-b-2 border-b-gray-100  cursor-pointer">
              <div className="flex-none">
                <TvMinimalPlayIcon className="size-5 text-gray-400" />
              </div>
              <div className="font-semibold">Interfaces</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
