import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productListReducer } from './reducers/ProductReducers';

const reducer = combineReducers({
    productList: productListReducer
});

const store = configureStore({
    reducer: reducer, // ← c’est ici que tu dois utiliser ton combineReducers
    // middleware, devTools, etc. peuvent aussi être ajoutés ici si nécessaire
});

export default store;
