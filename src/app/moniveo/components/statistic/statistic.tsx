export default function Statistic() {
  return (
    <section className="bg-white lg:mx-18">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex justify-center py-10 border-l border-gray-100">
          <div className="text-center">
            <h1 className="text-5xl pb-2">2M+</h1>
            <div className="text-sm text-gray-500">
              <div>Customer</div>
              <div>building with Moniveo</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10 border-x border-gray-100">
          <div className="text-center">
            <h1 className="text-5xl pb-2">SOC 3</h1>
            <div className="text-sm text-gray-500">
              <div>Standards for</div>
              <div>security and compliance</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10 border-r border-gray-100">
          <div className="text-center">
            <h1 className="text-5xl pb-2">98%</h1>
            <div className="text-sm text-gray-500">
              <div>Enterprise SLA</div>
              <div>Volumes block storage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
