import Image from 'next/image'
import { FC } from 'react'
import styles from './clients.module.css'

const Clients: FC = () => {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="lg:mx-18">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          <div
            className={`${styles['client']} ${styles['client--bl-gray']} px-10 text-gray-500`}
          >
            Trusted by 100+ world&apos;s best brand
          </div>
          <div className={`${styles['client']} ${styles['client--bl-gray']}`}>
            <Image src="client-ebay.svg" alt="ebay" width={90} height={36} />
          </div>
          <div className={`${styles['client']} ${styles['client--bl-gray']}`}>
            <Image
              src="client-expedia.svg"
              alt="expedia"
              width={146}
              height={32}
            />
          </div>
          <div className={`${styles['client']} ${styles['client--bl-gray']}`}>
            <Image
              src="client-docusign.svg"
              alt="docusign"
              width={130}
              height={30}
            />
          </div>
          <div className={`${styles['client']} ${styles['client--bx-gray']}`}>
            <Image
              src="client-phantom.svg"
              alt="phantom"
              width={129}
              height={30}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
