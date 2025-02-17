// import { configureStore } from '@reduxjs/toolkit'
// import cardSlice from "../features/cartSlice"

// export const store = configureStore({
//     reducer: {
//       allCard : cardSlice
//     }
//   })



import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/cartSlice"

export const store = configureStore({
  reducer: {
   allCard : cardSlice
  },
});
