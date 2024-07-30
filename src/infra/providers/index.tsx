import { ModalProvider } from '@/infra/providers/modal'
import { WagmiProvider } from '@/infra/providers/wagmi'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const queryClient = new QueryClient()

const client = new ApolloClient({
  uri: 'http://localhost:42069/',
  cache: new InMemoryCache(),
})

function Providers({ children }: React.PropsWithChildren): React.ReactElement {
  return (
    <WagmiProvider>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <ApolloProvider client={client}>
            <ModalProvider />
            {children}
          </ApolloProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default Providers
