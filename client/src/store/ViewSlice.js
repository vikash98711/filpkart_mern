import { createSlice } from '@reduxjs/toolkit';

const ViewSlice =   createSlice({
    name:'viewProduct',
    initialState:[],
    reducers:{

        add :(state,action)=>{
            state.splice(0,1,action.payload)
            // console.log(action)
            //   state.splice(0,0, action.payload)


        }
   
  }
})

export const {add,addcart} = ViewSlice.actions;
export default ViewSlice.reducer;