import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => setMenu("shop")}><Link className='Link' to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("mens")}><Link className='Link' to="/mens">Men</Link>{menu == "mens" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("women")}><Link className='Link' to="/womens">Women</Link>{menu == "women" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("kids")}><Link className='Link' to="/kids">Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to="/LoginSignUp"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}
