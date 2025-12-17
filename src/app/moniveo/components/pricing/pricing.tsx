'use client'

import { useState } from 'react'
import DpToggle from '../toggle/toggle'
import DpButton from '../button/button'
import { CheckIcon } from 'lucide-react'

export default function Pricing() {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <section className="bg-white border-y border-gray-100">
      <div className="px-4 md:px-20 py-10 md:py-20 lg:mx-18 border-x border-gray-100">
        <div className="text-center text-sm text-blue-500">PRICING</div>

        <div className="text-center text-3xl md:text-5xl py-5">
          <h1>Start for free</h1>
          <h1>Get used to winning</h1>
        </div>

        <div className="flex items-center justify-center space-x-4 pt-6">
          <div className="w-fit py-1 px-3 text-xs font-medium text-transparent">
            10% OFF
          </div>
          <label htmlFor="toggle" className="text-sm">
            Monthly
          </label>
          <DpToggle
            id="toggle"
            checked={toggle}
            value={String(toggle)}
            onChange={() => setToggle(Boolean(!toggle))}
          />
          <label htmlFor="toggle" className="text-sm">
            Annual
          </label>
          <div className="w-fit py-1 px-3 text-xs text-blue-500 font-medium rounded-full bg-blue-50">
            10% OFF
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <div className="grid grid-cols-1 md:grid-cols-2 pt-10 gap-6">
            <div className="rounded-2xl p-6 border border-gray-100 mt-7">
              <div className="border-b-2 border-gray-100 pb-6">
                <div className="flex space-x-2">
                  <div className="basis-1/2 text-xl">Basic</div>
                  <div className="basis-1/2 text-sm text-gray-500">
                    Kickstart your product research in your business at no cost.
                  </div>
                </div>
                <div className="flex items-center space-x-2 pt-4">
                  <div className="basis-1/2">
                    <span className="text-3xl">$0 </span>
                    <span className="text-gray-500">/ month</span>
                  </div>
                  <div className="basis-1/2">
                    <DpButton disabled>Current Plan</DpButton>
                  </div>
                </div>
              </div>
              <div className="pt-6 space-y-2">
                <div className="flex items-center space-x-3">
                  <CheckIcon className="text-gray-400 size-5" />
                  <span className="text-sm">25 users</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckIcon className="text-gray-400 size-5" />
                  <span className="text-sm">Email and live chat support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckIcon className="text-gray-400 size-5" />
                  <span className="text-sm">AI power-ups</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl px-px relative bg-linear-to-b from-blue-500 via-white to-white">
              <div className="text-center text-xs text-white py-1.5">
                BEST VALUE
              </div>

              <div className="rounded-2xl p-6 border border-gray-100 bg-linear-to-b from-white to-blue-50">
                <div className="border-b-2 border-gray-100 pb-6">
                  <div className="flex space-x-2">
                    <div className="basis-1/2 text-xl">Enterprise</div>
                    <div className="basis-1/2 text-sm text-gray-500">
                      Fuel your product workflow with more advanced research.
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 pt-4">
                    <div className="basis-1/2">
                      <span className="text-3xl">$12 </span>
                      <span className="text-gray-500">/ month</span>
                    </div>
                    <div className="basis-1/2">
                      <DpButton variant="primary">Upgrade Now</DpButton>
                    </div>
                  </div>
                </div>
                <div className="pt-6 space-y-2">
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="text-blue-500 size-5" />
                    <span className="text-sm">Unlimited workspace</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="text-blue-500 size-5" />
                    <span className="text-sm">
                      Advanced admin permissions and app controls
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckIcon className="text-blue-500 size-5" />
                    <span className="text-sm">Annual task limits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
