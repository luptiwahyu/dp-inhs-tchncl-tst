import {
  ArrowRightIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <section className="bg-white border-y border-gray-100">
        <div className="px-4 py-8 md:p-16 lg:mx-18 border-x border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <p className="font-semibold">Platform</p>
              <ul className="mt-4 space-y-3 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:text-blue-500">
                    Meet the platform
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500">
                    Storyboard
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500">
                    Cases
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500">
                    Workbench
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Solutions</p>
              <ul className="mt-4 space-y-3 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:text-blue-500">
                    By product
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500">
                    Professional services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Resource</p>
              <ul className="mt-4 space-y-3 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:text-blue-500">
                    By Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500">
                    Case studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500">
                    Library
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Company</p>
              <ul className="mt-4 space-y-3 text-sm text-gray-500">
                <li>
                  <Link href="#" className="hover:text-blue-500">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500">
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Subscribe</p>
              <div className="flex items-center bg-gray-100 py-2 px-3 space-x-1 mt-4">
                <input
                  placeholder="Your email"
                  className="w-full text-sm placeholder-gray-500"
                />
                <ArrowRightIcon className="flex-none size-4" />
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="font-semibold text-sm">Follow Us</div>
                <div className="flex items-center justify-end space-x-2">
                  <TwitterIcon className="size-4" />
                  <LinkedinIcon className="size-4" />
                  <FacebookIcon className="size-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:mx-18 py-6 px-4 lg:px-0">
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-2 text-gray-500 text-sm">
          <div>&copy;2025 Moniveo Technology, Inc.</div>
          <div className="flex items-center md:justify-center">
            <Image src="moniveo.svg" alt="moniveo" width={156} height={24} />
          </div>
          <ul className="flex items-center md:justify-end space-x-8">
            <li>
              <Link href="#" className="hover:text-blue-500">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500">
                Terms of use
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-blue-500">
                Disclosure
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-gray-500 text-sm lg:hidden">
          &copy;2025 Moniveo Technology, Inc.
        </div>
      </section>
    </footer>
  )
}
