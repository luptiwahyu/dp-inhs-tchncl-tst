'use client'

import DpButton from '../button/button'
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <header className="bg-white sticky top-0 z-20 border-b border-gray-100 lg:px-18">
        <div className="hidden lg:grid grid-cols-3 items-center p-4">
          <div className="text-2xl">
            <Image src="moniveo.svg" alt="moniveo" width={156} height={24} />
          </div>
          <nav className="flex items-center justify-center gap-8">
            <Link href="#" className="hover:text-blue-500 transition-colors">
              Platform
            </Link>
            <Link
              href="#"
              className="hover:text-blue-500 transition-colors flex items-center"
            >
              Solutions <ChevronDownIcon className="size-4 ml-2" />
            </Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">
              Resources
            </Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center justify-end space-x-2">
            <DpButton>Login</DpButton>
            <DpButton variant="primary">Sign Up</DpButton>
          </div>
        </div>

        <div className="lg:hidden flex items-center justify-between p-4">
          <div className="text-2xl">
            <Image src="moniveo.svg" alt="moniveo" width={156} height={24} />
          </div>
          <div className="cursor-pointer" onClick={() => setVisible(!visible)}>
            {visible ? <XIcon /> : <MenuIcon />}
          </div>
        </div>

        {visible && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100">
            <nav className="p-4 space-y-4">
              <Link href="#" className="block hover:text-blue-500">
                Platform
              </Link>
              <Link href="#" className="hover:text-blue-500 flex items-center">
                Solutions <ChevronDownIcon className="size-4 ml-2" />
              </Link>
              <Link href="#" className="block hover:text-blue-500">
                Resources
              </Link>
              <Link href="#" className="block hover:text-blue-500">
                Pricing
              </Link>
              <div className="flex items-center space-x-2">
                <DpButton className="flex-1/2">Login</DpButton>
                <DpButton className="flex-1/2" variant="primary">
                  Sign Up
                </DpButton>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
