import Solution from './components/solution/solution'
import Header from './components/header/header'
import Clients from './components/clients/clients'
import Toolkit from './components/toolkit/toolkit'
import Automation from './components/automation/automation'
import Platform from './components/platform/platform'
import Statistic from './components/statistic/statistic'
import Pricing from './components/pricing/pricing'
import CallToAction from './components/call-to-action/call-to-action'
import Footer from './components/footer/footer'

export default function Moniveo() {
  return (
    <>
      <Header />
      <Solution />
      <Clients />
      <Toolkit />
      <Automation />
      <Platform />
      <Statistic />
      <Pricing />
      <CallToAction />
      <Footer />
    </>
  )
}
