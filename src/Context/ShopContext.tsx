import { createContext } from "react";
import type { TShopContextType } from "./ShopContextProvider";

// --------------------------------------------------------------------------------------
export const ShopContext = createContext<TShopContextType | null>(null);

