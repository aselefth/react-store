import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const formSLice = createSlice({
  name: 'formSlice',
  initialState: {
    name: '',
    price: '',
    category: 'все',
    imgLink: '',
    info: ''
  },
  reducers: {
    handleNameChange: (state, action) => {
      state.name = action.payload.name;
    },
    handlePriceChange: (state, action) => {
      state.price = action.payload.price;
    },
    handleCategoryChange: (state, action) => {
      state.category = action.payload.category;
    },
    handleImgLinkChange: (state, action) => {
      state.imgLink = action.payload.imgLink;
    },
    handleInfoChange: (state, action) => {
      state.info = action.payload.info;
    }
  }
});

export const {
  handleNameChange, 
  handlePriceChange, 
  handleCategoryChange, 
  handleImgLinkChange, 
  handleInfoChange} = formSLice.actions;
export default formSLice.reducer;