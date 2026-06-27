import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router'
import { ROUTES } from '../../lib/types/Routes'
import MaxContainer from './MaxContainer'
import pageHero from '../../assets/page-hero.png'

type PageHeroProps = {
  title: string
  subtitle?: string
  /** Center the title + subtitle (back link stays top-left). */
  centered?: boolean
  /** Extra bottom padding so a card can overlap the hero without covering text. */
  tall?: boolean
  /** Where the back link points. Defaults to Home. */
  backTo?: string
  /** Back link text. Defaults to "Back to Home". */
  backLabel?: string
}

/** Dark, full-bleed header band used by inner pages (Contact, FAQ, Airport, …). */
export default function PageHero({
  title,
  subtitle,
  centered = false,
  tall = false,
  backTo = ROUTES.HOME,
  backLabel = 'Back to Home',
}: PageHeroProps) {
  return (
    // Pulled up under the sticky navbar so the image fills the top
    <section className="relative -mt-22">
      <div className="relative w-full overflow-hidden">
        <img src={pageHero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/75 to-black/55" />

        <MaxContainer
          className={`relative flex flex-col px-4 pt-32 md:px-20 md:pt-40 ${
            tall ? 'pb-32 md:pb-44' : 'pb-16 md:pb-20'
          }`}
        >
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            {backLabel}
          </Link>

          <div className={`mt-6 ${centered ? 'text-center' : ''}`}>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl md:leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className={`mt-4 text-lg text-line md:text-xl ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
                {subtitle}
              </p>
            )}
          </div>
        </MaxContainer>
      </div>
    </section>
  )
}
