import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productListReducer, productDetailsReducer } from './reducers/ProductReducers';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
});

const store = configureStore({
    reducer, // Thunk est déjà inclus par défaut ici
    devTools: true
});

export default store;


