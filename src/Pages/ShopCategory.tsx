import { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import drop_down_icon from '../Components/Assets/dropdown_icon.png';
import { Item } from '../Components/Item/Item';
import type { TProduct, TShopCategory } from '../Components/Types/types';

export const ShopCategory = (props: TShopCategory) => {
    const shopContext = useContext(ShopContext);
    if (!shopContext) {
        throw new Error("");
    }
    const { all_product } = shopContext;


    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={drop_down_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item: TProduct) => {
                    if (props.category === item.category) {
                        return (
                            <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        )
                    } else {
                        return null;
                    }
                })
                }
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    )
}
