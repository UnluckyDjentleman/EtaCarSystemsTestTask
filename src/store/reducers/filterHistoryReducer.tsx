import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import FilterHistory from "../../constants/types/filterHistory";
import { HistoryParams } from "../../constants/historyParams";

const initialState: FilterHistory = HistoryParams[0].value;

export const filterHistoryReducer = createSlice({
  name: "filterHistory",
  initialState,
  reducers: {
    setInterval: (state, action: PayloadAction<FilterHistory>) => {
      (state.start = action.payload.start),
        (state.end = action.payload.end),
        (state.interval = action.payload.interval);
    },
  },
});

export const { setInterval } = filterHistoryReducer.actions;

export default filterHistoryReducer.reducer;
