// redux
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

// store
import type { AppDispatch, RootState } from "../Store";

// Use throughout your app instead of plain `useAppDispatch` and `useAppSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
