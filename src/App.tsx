import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Shop } from './Pages/Shop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ShopCategory } from './Pages/ShopCategory'
import { Product } from './Pages/Product'
import { Cart } from './Pages/Cart'
import { LoginSignUp } from './Pages/LoginSignUp'
import { Footer } from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import { useAppDispatch } from './Redux/Hooks/global-hooks'
import { useEffect } from 'react'
import { setLoginResponse } from './Redux/Slices/loginSlice'

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const tokenString = sessionStorage.getItem('token');
    if (tokenString) {
      try {
        const tokenData = JSON.parse(tokenString);
        const accessToken = tokenData.access_token;
        dispatch(setLoginResponse(accessToken));
      } catch (err) {
        console.error('Failed to parse token from sessionStorage', err);
      }
    }
  })
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LoginSignUp />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />}></Route>
            </Route>
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div >

    </>
  )
}

export default App
