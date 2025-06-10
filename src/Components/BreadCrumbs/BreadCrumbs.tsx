import arrow_icon from '../Assets/breadcrum_arrow.png';
import "./BreadCrumbs.css";

type TBreadcrumbs = {
    product: {
        category: string;
        name: string;
    }
}
export const BreadCrumbs = (props: TBreadcrumbs) => {
    const { product } = props;
    return (
        <div className="breadcrumb">
            Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
    )
}
