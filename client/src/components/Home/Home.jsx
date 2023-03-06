import { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

import {styled, Box} from '@mui/material';
import FullData from "./Fulldata";
import MidSection from "./MidSection"

// import { fetchData } from '../../store/productSlice';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';




const Component =styled(Box)`
padding:10px 10px;
background:#f2f2f2
`
const Home =()=>{

    // const dispatch = useDispatch();
    // const State = useSelector(state => state);
    // // console.log("state",state)
    // useEffect(() => {
    //     dispatch((fetchData()))
    // }, [])




    

    return(
        <>
        <Navbar/>
        <Component >
        <Banner/>
      <FullData title="Deal of the Day" timing={true}/>
      <MidSection/>
      <FullData  title="Discount of you" timing={false}/>
      <FullData title="Suggesting item" timing={false}/>

      


        </Component>
        
        </>
    )
}


export default Home;