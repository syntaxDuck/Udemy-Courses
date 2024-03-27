import { createSlice } from "@reduxjs/toolkit";

const initalCartState = {
  items: {},
  totalQuantity: 0,
  changed: false,
  showCart: false,
  notification: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initalCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItem(state, action) {
      if (state.items[action.payload.id]) {
        state.items[action.payload.id].quantity++;
      } else {
        state.items[action.payload.id] = {
          title: action.payload.title,
          quantity: 1,
          price: action.payload.price,
        };
      }
      state.totalQuantity++;
      state.changed = true;
    },
    removeItem(state, action) {
      if (state.items[action.payload.id].quantity !== 1) {
        state.items[action.payload.id].quantity--;
      } else {
        delete state.items[action.payload.id];
      }
      state.totalQuantity--;
      state.changed = true;
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
