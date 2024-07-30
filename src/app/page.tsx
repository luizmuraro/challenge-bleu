'use client'

import '@rainbow-me/rainbowkit/styles.css'

import Home from '@/app/home/page'
import GlobalStyle from '@/globalStyle'
import Providers from '@/infra/providers'

const App = () => {
  return (
    <Providers>
      <GlobalStyle />
      <Home />
    </Providers>
  )
}

export default App
