import { useContext, useMemo, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import { Item } from '../Components/Item/Item';
import type { TProduct, TShopCategory } from '../Components/Types/types';

export const ShopCategory = (props: TShopCategory) => {
    const [sortOption, setSortOption] = useState<string>('default');
    const shopContext = useContext(ShopContext);
    if (!shopContext) {
        throw new Error("");
    }
    const { all_product } = shopContext;

    const filteredAndSortedProducts = useMemo(() => {
        const filtered = all_product.filter((item) => item.category === props.category);

        switch (sortOption) {
            case 'price-low-high':
                return [...filtered].sort((a, b) => a.new_price - b.new_price);
            case 'price-high-low':
                return [...filtered].sort((a, b) => b.new_price - a.new_price);
            case 'name-a-z':
                return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
            case 'name-z-a':
                return [...filtered].sort((a, b) => b.name.localeCompare(a.name));
            default:
                return filtered;
        }
    }, [all_product, sortOption, props.category]);

    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    <label>Sort by : </label>
                    <select onChange={(e) => setSortOption(e.target.value)} value={sortOption} style={{ border: 'none', fontSize: '15px', padding: "1px" }}>
                        <option value="default">Default</option>
                        <option value="price-low-high">Price: Low to High</option>
                        <option value="price-high-low">Price: High to Low</option>
                        <option value="name-a-z">Name: A to Z</option>
                        <option value="name-z-a">Name: Z to A</option>
                    </select>
                </div>
            </div>
            <div className="shopcategory-products">
                {filteredAndSortedProducts.map((item: TProduct) => (
                    <Item key={item.id} {...item} />
                ))}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    )
}
