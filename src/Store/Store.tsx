// store.js
import { applyMiddleware, createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage
import { Reducer } from "./Reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducer);

export const Store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware())
);

export const persistor = persistStore(Store);
