import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import user_icon from '../Assets/man.png'

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    const shopContext = useContext(ShopContext);
    if (!shopContext) {
        throw new Error("ShopContext must be used within a ShopContextProvider");
    }
    const { getTotalCartItems } = shopContext;

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li>
                    <Link className='Link' to="/shop" onClick={() => setMenu("shop")}>Shop</Link> {menu === "shop" ? <hr /> : <></>}
                </li>
                <li>
                    <Link className='Link' to="/mens" onClick={() => setMenu("men")}>Mens</Link>{menu == "men" ? <hr /> : <></>}
                </li>
                <li>
                    <Link className='Link' to="/womens" onClick={() => setMenu("women")}>Womens</Link>{menu == "women" ? <hr /> : <></>}
                </li>
                <li>
                    <Link className='Link' to="/kids" onClick={() => setMenu("kid")}>Kids</Link>{menu === "kid" ? <hr /> : <></>}
                </li>
            </ul>
            <div className='nav-login-cart'>
                <Link to="/"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            <div>
                <Link to="/">
                    <img src={user_icon} alt="user" className='user-image' />
                </Link>
            </div>

        </div>
    )
}
