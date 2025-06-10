import { useCallback, useMemo, useState, type ReactNode } from "react";
import all_product from "../Components/Assets/all_product";
import { ShopContext } from "./ShopContext";

// --------------------------------------------------------------------------------------
type TcartItems = {
    [key: string]: number;
}

// Define context value shape
export type TShopContextType = {
    getTotalCartItems: () => number;
    getTotalCartAmount: () => number;
    all_product: typeof all_product;
    cartItems: TcartItems;
    addToCart: (itemId: number) => void;
    removeFromCart: (itemId: number | string) => void;
};

// Provider props
interface TShopContextProviderProps {
    children: ReactNode;
}
// --------------------------------------------------------------------------------------

const getDefaultCart = () => {
    const cart: TcartItems = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props: TShopContextProviderProps) => {
    const [cartItems, setCartItems] = useState<TcartItems>(getDefaultCart());

    const addToCart = useCallback((itemId: number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    }, [])

    const removeFromCart = useCallback((itemId: string | number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }, [])

    const getTotalCartAmount = useCallback(() => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += Number(itemInfo?.new_price) * cartItems[item];
            }
        }
        return totalAmount;
    }, [cartItems])

    const getTotalCartItems = useCallback(() => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }, [cartItems])

    const contextValue = useMemo(() => ({
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart
    }), [addToCart, cartItems, getTotalCartAmount, getTotalCartItems, removeFromCart])


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;