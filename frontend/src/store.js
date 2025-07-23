import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productListReducer } from './reducers/ProductReducers';

const reducer = combineReducers({
    productList: productListReducer
});

const store = configureStore({
    reducer, // Thunk est déjà inclus par défaut ici
    devTools: true
});

export default store;


