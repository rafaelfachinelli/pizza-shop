import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { Toaster } from '@/components/ui/sonner'

import { router } from './pages/routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
