import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reservedProducts: [],
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.reservedProducts.find(
        (product) => product.idx === newProduct.idx,
      );
      if (!existingProduct) {
        state.reservedProducts.push({
          ...newProduct,
          quantity: 1,
        });
      } else {
        existingProduct.quantity += 1;
      }
    },
    changeQuantity(state, action) {
      const selectedProduct = state.reservedProducts.find(
        (product) => product.idx === action.payload.idx,
      );

      if (
        (selectedProduct.maximumPurchases === selectedProduct.quantity) &
        (action.payload.newQuantity === 1)
      ) {
      } else if (
        (selectedProduct.quantity === 1) &
        (action.payload.newQuantity === -1)
      ) {
      } else {
        selectedProduct.quantity += action.payload.newQuantity;
      }
    },
    removeFromCart(state, action) {
      const idx = action.payload;
      state.reservedProducts = state.reservedProducts.filter(
        (product) => product.idx !== idx,
      );
    },
  },
});

export const reservationActions = reservationSlice.actions;
export default reservationSlice.reducer;
