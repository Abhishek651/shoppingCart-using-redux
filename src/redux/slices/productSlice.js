import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  coupon: [{ code: "10OFF", discount: 10 }],
  discount: 0,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existing = state.productList.find(
        (item) => item.id === action.payload.id,
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.productList.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    removeProduct: (state, action) => {
      const quantity = action.payload.quantity - 1;

      if (quantity == 0) {
        state.productList = state.productList.filter(
          (i) => action.payload.id != i.id,
        );
      } else {
        state.productList = state.productList.map((i) =>
          action.payload.id == i.id ? { ...i, quantity: quantity } : i,
        );
      }
    },

    calculateDiscount: (state, action) => {
      const appliedCoupon = state.coupon.find((c) => c.code === action.payload); //returns matched coupon object

      if (appliedCoupon) {
        state.discount = appliedCoupon.discount;
        state.error = null;
      } else {
        state.error = 'invalid coupon'
      }
    },
  },
});

export const { addProduct, removeProduct, calculateDiscount } = productSlice.actions;
export default productSlice.reducer;
