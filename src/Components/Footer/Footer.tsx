import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import pintrest_icon from '../Assets/pintester_icon.png';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" style={{ cursor: 'pointer' }} />
                <p style={{ cursor: 'pointer' }}>SHOPPER</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <a href="https://www.instagram.com/amazon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="footer-icon-container">
                        <img src={instagram_icon} alt="Instagram" />
                    </div>
                </a>

                <a href="https://www.pinterest.com/amazon"
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className="footer-icon-container">
                        <img src={pintrest_icon} alt="" />
                    </div>
                </a>

                <a href="https://www.whatsapp.com/amazon"
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className="footer-icon-container">
                        <img src={whatsapp_icon} alt="" />
                    </div>
                </a>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @2023 - All Right Reserved.</p>
            </div>
        </div >
    )
}
