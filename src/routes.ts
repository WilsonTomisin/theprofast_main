import { createBrowserRouter } from 'react-router'
import { ROUTES } from './lib/types/Routes'
import LandingPage from './pages/LandingPage'
import ContactPage from './pages/ContactPage'
import FaqPage from './pages/FaqPage'
import MainLayout from './layout/Main'

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    Component: MainLayout,
    children: [
      { index: true, Component: LandingPage },
      {
        path: ROUTES.CONTACT,
        Component: ContactPage,
      },
      {
        path: ROUTES.FAQS,
        Component: FaqPage,
      },
    ],
  },
])
