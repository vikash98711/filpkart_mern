



// components
import Header from './components/header/Header';
import Home from './components/Home/Home';
import DataProvider from './context/DataProvider';
import { useDispatch } from 'react-redux';
// import { cart } from './store/productSlice';
import { useEffect, } from 'react';


import { Box } from '@mui/material';
import { fetchData } from './store/productSlice';

import DetailsView from './components/details/DetailsView'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/cart/Cart';
import Fotter from './components/Footer/Fotter';




function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch((fetchData()))
  }, [])


  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          < Routes>
            <Route path='/' element={<Home />} />
            <Route path='/viewproduct' element={<DetailsView />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
          {/* <Fotter /> */}
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
