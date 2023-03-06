import { Button, Typography, styled, Box, Grid, Table, TableBody, TableRow, TableCell } from '@mui/material';
import { ShoppingCart, FlashOn, LocalOffer } from '@mui/icons-material';
// import FlashOnIcon from '@mui/icons-material/FlashOn';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addcart} from '../../store/CartSlice'
import { useDispatch } from 'react-redux';

// import from '@mui/icons-material/LocalOffer';



const LeftContainer = styled(Box)`
min-width:40%;
padding: 10px 0 0 18px;
`

const ViewImage = styled('img')({
  // padding : '15px 20px',
  // border : '1px solid #f0f0f0',
  // width: '90%',
  padding: 1
})

const Component = styled(Box)`
background : #F2F2F2;
`
const Container = styled(Grid)(({theme})=>({
  background : '#FFFFFF',
  display:'flex',
  [theme.breakpoints.down('md')]:{
    margin: 0
  }
}))



const RightContainer = styled(Grid)`
margin-top: 50px;
`
const StyledButton = styled(Button)(({theme}) =>({
width: '48%', 
height:'50px',
borderRadius: '2px',
[theme.breakpoints.down('lg')]:{
  width:'46%'

},
[theme.breakpoints.down('sm')]:{
  width:'48%'
}
}));


const SmallText = styled(Box)`
font-size:14px;
vertical-align:baseline;
& > p {
  font-size:14px;
  margin-top:10px;
}
`
const Badge = styled(LocalOffer)`
margin-right:10px;
color:#00cc00;
font-size:15px;
`


// table css 

const ColumnText=styled(TableRow)`
font-size:14px;
vertical-align: baseline;
& > td {
  font-size:14px;
  margin-top:10px;
  border:none;

}
`

const DetailsView = () => {
  const dispatch = useDispatch()
 
const tableURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000))
  const navigate = useNavigate();

  const CartToPage = (val) => {
    dispatch(addcart(val))

    navigate('/cart')
    // console.log(CartSelector)
  }






  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const viewproduct = useSelector((state) => state.view)
  // console.log(viewproduct);
  return (
    <Component>
      {
        viewproduct.map((val) => {
          return (
            <Container container>

              <Grid item lg={4} md={4} sm={8}>
                <LeftContainer>
                  <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%' }}>
                    <ViewImage src={val.detailUrl}    style={{width:"100%"}}/>
                  
                  </Box>
                  <StyledButton variant='contained' style={{ background: '#ff9f00' }} onClick={() => { CartToPage(val) }}><ShoppingCart />Add to Cart</StyledButton>
                  <StyledButton variant='contained' style={{ marginLeft: 10, background: '#fb541b' }}><FlashOn />Buy Now</StyledButton>
                </LeftContainer>
              </Grid>

              <RightContainer item lg={8} md={8} sm={8}>
                <Typography >{val.title.longTitle}</Typography>
                <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                  8 Ratings & 1 Reviews
                  <Box component="span"><img src={fassured} style={{ width: 77, marginLeft: 20 }} /></Box>
                </Typography>


                <Typography>
                  <Box component="span" style={{ fontSize: 28 }}>₹{val.price.cost}</Box>
                  <Box component="span" style={{ color: '#878787', marginLeft: 12 }}><strike>₹{val.price.mrp}</strike></Box>
                  <Box component="span" style={{ color: '#388E3C', marginLeft: 12 }}>{val.price.discount}</Box>
                </Typography>
                <Typography>Available offers</Typography>

                <SmallText>
                  <Typography><Badge />Get extra 20% upto ₹50 on 1 item(s) T&C</Typography>
                  <Typography><Badge />Buy this Product and Get Extra ₹500 Off on Two-WheelersT&C</Typography>
                  <Typography><Badge />Special PriceGet extra 10% off (price inclusive of cashback/coupon)T&C</Typography>
                  <Typography><Badge />Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*</Typography>
                  <Typography><Badge />Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</Typography>
                </SmallText>

                <Table>
                  <TableBody>
                    <ColumnText>
                      <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                      <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toString()} | ₹40</TableCell>
                    </ColumnText>

                    <ColumnText>
                      <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                      <TableCell style={{ fontWeight: 600 }}> No Warranty</TableCell>
                    </ColumnText>


                    <ColumnText>
                      <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                      <TableCell >
                        <Box component="span" style={{ color: '#2874f0' }}>SuperComNet</Box>
                        <Typography>GST Invoice available</Typography>
                        <Typography>View more sellers starting from ₹{val.price.cost}</Typography>
                      </TableCell>
                      </ColumnText>

                           <ColumnText>
                            <TableCell colSpan={2}>
                                    <img src={tableURL} style={{width:390}} alt="flipkartspoint"/>
                            </TableCell>
                           </ColumnText>

                           <ColumnText>
                            <TableCell style={{color: '#878787'}}>Description</TableCell>
                            <TableCell>{val.description}</TableCell>
                                
                            
                           </ColumnText>
                  </TableBody>
                </Table>


              </RightContainer>

            </Container>
          )
        })
      }

    </Component>
  )
}

export default DetailsView
