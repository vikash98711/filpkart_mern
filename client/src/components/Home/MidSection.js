import { Grid ,  styled} from '@mui/material'
import React from 'react'
import {imageURL} from '../../constants/data'

const Wrapper =styled(Grid)`
margin-top:10px;
`

const Images =styled('img')(({ theme})=>({
    marginTop:12,
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    [theme.breakpoints.down ('md')]:{
      objectFit: 'cover',
      height:120
    }
}));


const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
    <>
  <Wrapper lg={12} sm={12} md={12} container>
   {
    imageURL.map((image, i)=>{
        return(
            <Grid item lg={4} md={4} sm={12}>
            <img src={image} alt='image'  style={{width:'100%'}} key={i}/>
           </Grid>
        )
    })
   }
  </Wrapper>
  <Images src={url} alt="opps"/>
  </>
  )
}

export default MidSection
