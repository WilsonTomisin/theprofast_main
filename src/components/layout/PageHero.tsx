import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router'
import { ROUTES } from '../../lib/types/Routes'
import MaxContainer from './MaxContainer'
import pageHero from '../../assets/page-hero.png'

type PageHeroProps = {
  title: string
  subtitle: string
}

/** Dark, full-bleed header band used by inner pages (Contact, FAQ, …). */
export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    // Pulled up under the sticky navbar so the image fills the top
    <section className="relative -mt-22">
      <div className="relative w-full overflow-hidden">
        <img src={pageHero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/75 to-black/55" />

        <MaxContainer className="relative px-4 pt-32 pb-16 md:px-20 md:pt-40 md:pb-20">
          <Link
            to={ROUTES.HOME}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Back to Home
          </Link>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl md:leading-tight">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-line md:text-xl">{subtitle}</p>
        </MaxContainer>
      </div>
    </section>
  )
}
