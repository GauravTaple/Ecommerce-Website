import arrow_icon from '../Assets/breadcrum_arrow.png';
import "./BreadCrumbs.css";

export const BreadCrumbs = (props) => {
    const { product } = props;
    return (
        <div className="breadcrumb">
            Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
    )
}
