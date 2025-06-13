import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import user_icon from '../Assets/man.png';
import { useAppDispatch, useAppSelector } from '../../Redux/Hooks/global-hooks';
import axios from 'axios';
import { setLogout } from '../../Redux/Slices/loginSlice';

// -------------------------------------------------------------------------------------
interface TProfile {
    avatar: string;
    creationAt: string;
    email: string;
    id: number;
    name: string;
    password: string;
    role: string;
    updatedAt: string;
}
// -------------------------------------------------------------------------------------
export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { access_token } = useAppSelector((state) => state.login);
    console.log(access_token, 'access_token++++++++++++++++');

    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const dispatch = useAppDispatch();
    const [, setProfileData] = useState<TProfile>();
    const navigate = useNavigate();

    const shopContext = useContext(ShopContext);
    if (!shopContext) {
        throw new Error("ShopContext must be used within a ShopContextProvider");
    }
    const { getTotalCartItems } = shopContext;

    const handleLogout = () => {
        dispatch(setLogout());
        sessionStorage.removeItem('token');
        navigate('/')
        setShowDropdown(false);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(e.target as Node)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        console.log("useEffect called...!!!");

        if (access_token) {
            const tokenData = JSON.parse(sessionStorage.getItem('token') ?? '{}');
            const accessToken = tokenData.access_token;
            const header = {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
            axios.get('https://api.escuelajs.co/api/v1/auth/profile', header)
                .then((res) => setProfileData(res.data))
                .catch((error) => console.log(error, "error ocurred in profile api"))
        }
    }, [access_token])

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p style={{ cursor: 'pointer' }}>SHOPPER</p>
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
                <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>

            {!access_token ? (
                <div className='nav-login-cart'>
                    <Link to="/"><button>Login</button></Link>
                </div>
            ) : (
                <div className={`user-dropdown ${showDropdown ? "show" : ""}`} ref={dropdownRef}>
                    <button
                        onClick={() => setShowDropdown(prev => !prev)}
                        className="user-button"
                        aria-label="User menu"
                    >
                        <img
                            src={user_icon}
                            alt="User"
                            className="user-image"
                        />
                    </button>
                    <div className="dropdown-content">
                        {/* <div style={{ textAlign: 'center' }}>{profileData?.name}</div> */}
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            )}


        </div >

    )
}
