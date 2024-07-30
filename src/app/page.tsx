'use client'

import '@rainbow-me/rainbowkit/styles.css'

import Home from '@/app/home/page'
import GlobalStyle from '@/globalStyle'
import Providers from '@/infra/providers'
import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()
const App = () => {
  return (
    <Providers>
      <GlobalStyle />
      <Home />
    </Providers>
  )
}

export default App
