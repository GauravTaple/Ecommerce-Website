import { Link } from "react-router-dom";
import "./Item.css";
import type { TProduct } from "../Types/types";

export const Item = (props: TProduct) => {
    return (
        <div className="item">
            <Link to={`/product/${props.id}`}>
                <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt="image" />
            </Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.new_price}
                </div>
                <div className="item-price-old">
                    ${props.old_price}
                </div>
            </div>
        </div >
    );
}