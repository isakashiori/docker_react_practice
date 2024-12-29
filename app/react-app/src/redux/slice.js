import {createSlice} from "@reduxjs/toolkit";
import reducers from "./reducer";


const initialState = {
  count: 0
}

export const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers
})

export const {setCount} = counterSlice.actions;

export default counterSlice.reducer;