import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import addEllipsis from '../../utlis/common-utils';
import GroupedButton from './ButtonGroup';
import { useDispatch } from 'react-redux';
import {removecart} from '../../store/CartSlice'




const Component =styled(Box)`
border-top:1px solid #f0f0f0;
display:flex;
`
const LeftComponent=styled(Box)`
margin: 20px;
display:flex;
flex-direction:column;

`
const SmallText=styled(Typography)`
color:#878787;
font-size:14px;
margin-top:10px;
`

const Remove=styled(Button)`
margin-top:8px;
font-size:16px;
color:black;
font-weight:600;
`

const Cartitems = ({val, i}) => {
  const dispatch = useDispatch();

    
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'



  // const removeItemFromCart=()=>{
  //   console.log("btn click")
  //      dispatch(removecart())
  // }


  return (
    <Component>
        <LeftComponent>
         <img src={val.url} alt="oops" style={{width:110, height:110}}/>
         <GroupedButton/>
        </LeftComponent>

        <Box style={{margin:20}}>
    <Typography >{addEllipsis(val.title.longTitle)}</Typography>
    <SmallText>Seller:RetailNet
        <Box component="span"><img src={fassured} alt="flipkart assured" style={{width:50,marginLeft:"10px" }}/></Box>
    </SmallText>
    <Typography style={{margin:'20px 0'}}>
                  <Box component="span" style={{ fontSize: 28 }}>₹{val.price.cost}</Box>
                  <Box component="span" style={{ color: '#878787', marginLeft: 12 }}><strike>₹{val.price.mrp}</strike></Box>
                  <Box component="span" style={{ color: '#388E3C', marginLeft: 12 }}>{val.price.discount}</Box>
                </Typography>
                <Remove onClick={()=>{ dispatch(removecart(i))}}>remove</Remove>

        
        </Box>
    </Component>
  )
}

export default Cartitems;
