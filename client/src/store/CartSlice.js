import { createSlice } from '@reduxjs/toolkit';

const CartSlice =   createSlice({
    name:'CartProduct',
    initialState:[],
    reducers:{

    
      addcart :(state,action)=>{
        state.push(action.payload)
        // console.log("addcart state value", state);
      },
      removecart:(state,action)=>{
       
        // console.log("removecart state value", state);
        // console.log(action);
            state.splice(action.payload,1)

      }

    }
})

export const {addcart, removecart} = CartSlice.actions;
export default CartSlice.reducer;