import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ShopContextProvider from './Context/ShopContext.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  // </StrictMode>,
)
