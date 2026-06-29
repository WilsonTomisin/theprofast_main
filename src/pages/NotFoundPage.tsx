import { Link } from 'react-router'
import { Compass, ArrowLeft } from 'lucide-react'
import { MaxContainer } from '../components/layout'
import { CTAButton } from '../components/form'
import { ROUTES } from '../lib/types/Routes'

export default function NotFoundPage() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-4 py-20 md:px-20">
      <MaxContainer className="flex max-w-xl flex-col items-center gap-6 text-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-soft">
          <Compass className="h-10 w-10 text-brand" strokeWidth={1.6} />
        </span>

        <p className="text-6xl font-bold text-ink md:text-7xl">404</p>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-ink md:text-3xl">Page not found</h1>
          <p className="text-base text-body">
            The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to={ROUTES.HOME}>
            <CTAButton variant="primary" leftIcon={<ArrowLeft className="h-5 w-5" strokeWidth={2} />}>
              Back to Home
            </CTAButton>
          </Link>
          <Link to={ROUTES.CONTACT}>
            <CTAButton variant="outline">Contact Support</CTAButton>
          </Link>
        </div>
      </MaxContainer>
    </main>
  )
}
