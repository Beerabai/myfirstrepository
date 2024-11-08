import { createSlice } from "@reduxjs/toolkit";
import { movieList } from "./Array";

const initialState ={
    movieList :movieList,
    Banner:true
     

}

const movieSlice = createSlice({
    name: "movie",
    initialState,
  reducers:{
    setmovieList:(state,action)=>{
        state.movieList =action.payload
        
    },
    setBanner:(state,action)=>{
      state.Banner =action.payload;
    }
  
  
  }
})
export const {setmovieList,setBanner} = movieSlice.actions;
export default movieSlice.reducer;