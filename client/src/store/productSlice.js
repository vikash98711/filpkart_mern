import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const URL = 'http://localhost:8000';
// action 
export const fetchData = createAsyncThunk('fetchData', async () => {
  const response = await axios("http://localhost:8000/products");
  return response;
})

const productSlice = createSlice({
  name: "PRODUCT",
  initialState: {
    isLoading: false,
    data: []
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    })

    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;

    });
    builder.addCase(fetchData.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    })
  }
})

export default productSlice.reducer;