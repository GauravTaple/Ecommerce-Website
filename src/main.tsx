import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ShopContextProvider from './Context/ShopContextProvider.tsx'
import { Provider } from 'react-redux'
import { store } from './Redux/Store/index.ts'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <ShopContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ShopContextProvider>
  // </StrictMode>,
)
