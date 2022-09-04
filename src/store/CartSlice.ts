import { createSlice } from "@reduxjs/toolkit";
import { IItem } from "../types/types";

interface InitialState {
  items: IItem[];
  totalPrice: 0;
}

const initialState: InitialState = {
  items: [],
  totalPrice: 0
}

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.items.push({
        name: action.payload.name,
        id: action.payload.id,
        price: action.payload.price,
        selected: action.payload.selected,
        category: action.payload.category,
        imgLink: action.payload.imgLink,
        more: action.payload.more,
        info: action.payload.info
      });
      state.totalPrice += parseInt(action.payload.price);
    },
    removeCartItem: (state, action) => {
      const item = state.items.find(item => item.id == action.payload.id);
      if (item)
      state.totalPrice -= parseInt(item.price);
      state.items = state.items.filter(item => item.id !== action.payload.id);
    }
  }
})

export const {addCartItem, removeCartItem} = cartSlice.actions;
export default cartSlice.reducer;