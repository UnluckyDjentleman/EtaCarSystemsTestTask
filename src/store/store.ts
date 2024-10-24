import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filterReducer";
import filterHistoryReducer from "./reducers/filterHistoryReducer";
import portfolioReducer from "./reducers/portfolioReducer";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    filterHistory: filterHistoryReducer,
    portfolio: portfolioReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
