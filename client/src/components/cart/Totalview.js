import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import React from 'react'
import { useState, useEffect } from 'react';

const Heading=styled(Box)`
padding:15px 24px;
background-color:#fff;
border-bottom: 1px solid #f0f0f0;
margin-left:12px;

`
const Textheading=styled(Typography)`
color:#878787;
`
const Container=styled(Box)`
padding:  15px 24px;
background-color:#fff;
margin-left:12px;
& > p{
    margin-bottom:20px;
    font-size:14px;
} 
`

const Price=styled(Box)`
float:right;
`

const Totalview = ({CartSelector}) => {
  const [price,setPrice]=useState(0)
  const [discount,setDiscount]=useState(0)

  useEffect(()=>{
    totalAmount()
  },[CartSelector])

  const totalAmount=()=>{
    let price =0, discount =0;
    CartSelector.map(item =>{
      price += item.price.mrp;
      discount += (item.price.mrp -item.price.cost);
    })
    setPrice(price);
    setDiscount(discount);
  }
  return (
   <>
   <Box>
                <Heading>
                  <Textheading>Price Details</Textheading>
                </Heading>
                <Container>
              
                
                  <Typography>Price ({CartSelector?.length} item)
                  <Price component="span">₹{price}</Price>
                  </Typography>
              
                  <Typography>Discount
                  <Price component="span">-₹{discount}</Price>
                  </Typography>

                  <Typography>Delivery Charges
                  <Price component="span">₹40</Price>
                  </Typography> 

                  <Typography variant="h6" style={{marginBottom: "20px"}}>Total Amount
                  <Price component="span">₹{price - discount + 40}</Price>
                  </Typography>
                  <Typography style={{ color:"green"}}>You will save ₹{discount - 40  } on this order</Typography>
                </Container>


              </Box>
   
   </>
  )
}

export default Totalview;
