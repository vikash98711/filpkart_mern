import { Button, ButtonBase, Grid, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
// import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Cartitems from './Cartitems';
import Emptycart from './Emptycart';
import Totalview from './Totalview';
// import ButtonGroup from './ButtonGroup';


const Container = styled(Grid)(({theme})=>({
  padding: '20px 135px',
  [theme.breakpoints.down('md')]:{
    padding:' 15px 0'
  }

}))



const header =styled(Box)`
padding: 15px 24px;
`



const ButtonWrapper=styled(Box)`
padding: 16px 22px;
background:#fff;
box-shadow: 0 -20px 10px 0 rgb(0 0 0 / 10%)
border-top: 1px solid #f0f0f0;

`

const StyledButton =styled(Button)`
display:flex;
margin-left:auto;
background-color:#fb641b;
color:#fff;
width:250px;
height:51px;
border-radius:2px;
`


const LeftComponent=styled(Grid)(({theme})=>({
  paddingRight:15,
  backgroundColor:'#fff',
  [theme.breakpoints.down('md')]:{
    marginBottom:15
  }
  
  
}))




const Cart = () => {

  const CartSelector = useSelector(state => (state.cart))
  // console.log(CartSelector)

  return (
    <>
    
 
      { CartSelector.length ? 
          <Container container>
            <LeftComponent item lg={9} md={9} sm={12} xs={12}>
              <Box>
                <Typography>My Cart ({CartSelector.length})</Typography>
              </Box>
              {
                CartSelector.map((val, i)=>{
                  return(
                  <Cartitems val={val} i={i}/>
                  ) 
                })
              }
              <ButtonWrapper>
                <StyledButton>Place Order</StyledButton>
              </ButtonWrapper>
            </LeftComponent>

            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Totalview CartSelector={CartSelector}/>
            </Grid>
          
          </Container>


             : <Emptycart/>

}

          
    </>


        
      
      
     
  )



}

export default Cart;
