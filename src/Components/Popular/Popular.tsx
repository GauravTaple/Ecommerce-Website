import "./Popular.css";
import data_product from "../Assets/data";
import { Item } from "../Item/Item";
import type { TProduct } from "../Types/types";

export const Popular = () => {
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item: TProduct, i: string | number) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}
