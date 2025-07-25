import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productListReducer, productDetailsReducer } from './reducers/ProductReducers';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? 
    JSON.parse(localStorage.getItem('cartItems')) : []

const preloadedState = {
    cart: {
        cartItems: cartItemsFromStorage
    }
};


const store = configureStore({
    reducer, // Thunk est déjà inclus par défaut ici
    preloadedState,
    devTools: true
});

export default store;


