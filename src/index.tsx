import React from 'react'
import ReactDOM from 'react-dom/client'
import { CoinApp } from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <CoinApp />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
)
