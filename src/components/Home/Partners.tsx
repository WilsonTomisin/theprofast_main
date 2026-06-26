import Badge from './Badge'
import MaxContainer from '../layout/MaxContainer'
import partners from '../../assets/partners.png'

export default function Partners() {
  return (
    <section className="px-4 py-10 md:px-20">
      <MaxContainer className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-5 text-center">
          <Badge label="Partners" />
          <div>
            <h2 className="text-3xl font-bold text-ink md:text-5xl md:leading-tight">
              Trusted by Leading Organizations
            </h2>
            <p className="mt-2 text-lg text-body md:text-xl">
              Partnering with Nigeria's top companies for reliable transport
            </p>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <img src={partners} alt="Partner organizations" className="h-auto w-full opacity-90" />
        </div>
      </MaxContainer>
    </section>
  )
}
