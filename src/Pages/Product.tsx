import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext"
import { useParams } from "react-router-dom";
import { BreadCrumbs } from "../Components/BreadCrumbs/BreadCrumbs";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { DescriptionBox } from "../Components/DescriptionBox/DescriptionBox";
import { RelatedProducts } from "../Components/RelatedProducts/RelatedProducts";

export const Product = () => {
    const shopContext = useContext(ShopContext);
    if (!shopContext) {
        throw new Error("")
    }
    const { all_product } = shopContext;

    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <BreadCrumbs product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
}
