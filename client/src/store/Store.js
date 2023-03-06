import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice';
import viewReducer from './ViewSlice';
import CartReducer from './CartSlice';
import removeReducer from './CartSlice'



export const store = configureStore({
    reducer: {
        item: productReducer,
        view: viewReducer,
        cart: CartReducer,
        remove: removeReducer



    }
});

// export default Store;