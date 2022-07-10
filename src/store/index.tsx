import { configureStore } from "@reduxjs/toolkit";
// import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

// Before react 18
// export const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});