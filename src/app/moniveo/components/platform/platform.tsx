import Image from 'next/image'

export default function Platform() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="lg:mx-18 bg-linear-to-b from-white to-blue-100 border-x border-gray-100">
        <div className="pt-10 md:pt-18 px-4 md:px-20">
          <div className="text-center text-sm text-blue-500">THE PLATFORM</div>
          <div className="grid grid-cols-5 pt-5 gap-4">
            <div className="col-span-1 flex items-start justify-end">
              <Image
                src="platform-1.svg"
                alt="platform-1"
                width={120}
                height={82}
              />
            </div>
            <div className="col-span-3 text-center lg:px-26">
              <div className="text-3xl md:text-5xl pb-5">
                Connected AI orchestration platform
              </div>
              <div className="text-sm text-gray-500">
                Powerful and production-ready, our cloud platform has the
                solutions you need to succeed.
              </div>
            </div>
            <div className="col-span-1 flex items-end">
              <Image
                src="platform-2.svg"
                alt="platform-2"
                width={120}
                height={82}
              />
            </div>
          </div>
          <div>
            <Image
              src="platform-dashboard.svg"
              alt="platform-dashboard"
              width={1080}
              height={572}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
