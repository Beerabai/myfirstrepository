
import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./Slice"

const store = configureStore({
    reducer: {
      movie: movieSlice, 
    },
  });
export default store