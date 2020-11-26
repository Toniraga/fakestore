import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from '../redux/cart/cart.reducer'

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	cartReducer
});

export default persistReducer(persistConfig, rootReducer);
