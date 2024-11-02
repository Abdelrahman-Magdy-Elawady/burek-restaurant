import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cartReducer } from "./Slices/CartSlice";
import { activeLinkReducer } from "./Slices/ActiveLinkSlice";
//-----------------------------------------------------
import { categoriesApi } from "./APIS/categoriesApi";
import { specificCategoryApi } from "./APIS/specificCategoryApi";
//------------------------------------------------------
export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [specificCategoryApi.reducerPath]: specificCategoryApi.reducer,
    cart: cartReducer,
    activeLink: activeLinkReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(categoriesApi.middleware)
      .concat(specificCategoryApi.middleware);
  },
});
setupListeners(store.dispatch);

//----------------------------------------------------------

export { useFetchCategoriesQuery } from "./APIS/categoriesApi";
export { useFetchSpecificCategoryQuery } from "./APIS/specificCategoryApi";

//----------------------------------------------------------------------
export {
  addToCart,
  removeFromCart,
  cleanCart,
  modifyCart,
} from "./Slices/CartSlice";

export { setActiveLink } from "./Slices/ActiveLinkSlice";
