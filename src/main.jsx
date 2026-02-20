import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import client from './GRAPHQL/Client.js'
import { ApolloProvider } from '@apollo/client/react'
import { BrowserRouter } from 'react-router-dom'





createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <ApolloProvider client={client}>
    <StrictMode>
      <App />
    </StrictMode>
  </ApolloProvider>
 </BrowserRouter>
  ,
)
