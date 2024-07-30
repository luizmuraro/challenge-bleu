import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { WagmiProvider as Provider, http } from 'wagmi'
import { sepolia } from 'wagmi/chains'

const projectId = '4a41101d606efd7f9109cfd33032f026' // TODO: Insert projectID on .env

const config = getDefaultConfig({
  appName: 'bleu-challenge',
  projectId: projectId,
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
  ssr: true, // If your dApp uses server side rendering (SSR)
})

export const WagmiProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => (
  <Provider config={config}>{children}</Provider>
)
