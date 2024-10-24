import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Filter from "../../constants/types/filter";

const initialState: Filter = {
  limit: 20,
  offset: 0,
  ids: "",
  search: "",
  order_by: "",
};

export const filterReducer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setOrderBy: (state, action: PayloadAction<string>) => {
      state.order_by = action.payload;
    },
  },
});

export const { setPage, setSearch, setOrderBy } = filterReducer.actions;

export default filterReducer.reducer;
