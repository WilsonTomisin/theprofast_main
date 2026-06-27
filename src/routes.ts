import { createBrowserRouter } from 'react-router'
import { ROUTES } from './lib/types/Routes'
import { Landing, Contact, FAQ, Airport, VehicleSelection, Checkout } from './pages'
import MainLayout from './layout/Main'

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    Component: MainLayout,
    children: [
      { index: true, Component: Landing },
      {
        path: ROUTES.CONTACT,
        Component: Contact,
      },
      {
        path: ROUTES.FAQS,
        Component: FAQ,
      },
      {
        path: ROUTES.AIRPORT,
        Component: Airport,
      },
      {
        path: ROUTES.VEHICLE_SELECTION,
        Component: VehicleSelection,
      },
      {
        path: ROUTES.CHECKOUT,
        Component: Checkout,
      },
    ],
  },
])
