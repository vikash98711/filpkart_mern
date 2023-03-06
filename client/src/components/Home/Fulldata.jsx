
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
// import { fetchData } from '../../store/productSlice';
import 'react-multi-carousel/lib/styles.css';
import { Box } from '@mui/system';
import { Typography, Button, styled } from '@mui/material';
import { add } from '../../store/ViewSlice'

import Countdown from 'react-countdown';

import { Link, useNavigate } from 'react-router-dom';





const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Component = styled(Box)`
margin-Top:14px;
background:#ffffff;
`
const Deal = styled(Box)`
padding:15px 20px;
display: flex;
`
const Timer = styled(Box)`
display:flex;
margin-left:10px;
align-items:center;
color: #7f7f7f;
`
const DealText = styled(Typography)`
font-size:22px;
font-weight:600;
margin-right:25px;
line-height:32px;
`

const ViewAllButton = styled(Button)`
margin-left:auto;
background-color:2874f0;
border-radius:2px;
font-size:13px;
font-weight:600;
`

const ImTic = styled('img')({
    width: 'auto',
    height: 150
});

const Text = styled(Typography)`
font-size:14px;
margin-top:5px;
`




// count down rendern function 
const renderer = ({ hours, minutes, seconds }) => {
    return <Box variant="span">{hours}: {minutes}: {seconds} Left</Box>;

};

// count down rendern function 





const FullData = ({ title, timing }) => {
    const navigate = useNavigate()
    const [apiData, SetApiData] = useState([]);

    const [dataShow, setDataShow] = useState(false);
    const viewSore = useSelector(state => state.item.data.data)
    // console.log(viewSore)
    const dispatch = useDispatch();

// direct api call method to see our all products 
    //     const response =async ()=> {  
    //         const res = await axios("http://localhost:8000/products");
    //         // console.log(res.data);
    //         setStoreData(res.data)
    //         // console.log(storeData)
    // };

    // useEffect(()=>{
    //  response(); 
    // },[])
// direct api call method to see our all products 

    useEffect(() => {
        SetApiData(viewSore)
    })




    const dis = (val) => {
        dispatch(add(val))
        // console.log(viewSore)
        setDataShow(val)
        // navigate('/viewproduct')
    }








    const timer = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    return (
        <>
            <Component>
                <Deal>
                    <DealText>{title}</DealText>
                    {
                        // this part of remove timer 
                        timing &&
                        <Timer>
                            <img src={timer} style={{ width: 20 }} />
                            <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                        </Timer>
                    }

                    <ViewAllButton variant='contained'>view All</ViewAllButton >
                </Deal>
                <Carousel responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    keyBoardControl={true}
                    centerMode={true}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    containerClass="carousel-container">



                    {
                        apiData ? apiData.map((val, i) => {
                            return (

                                <>

                                    <Link onClick={() => { dis(val) }} to={'/viewproduct'} style={{ textDecoration: 'none' }}>
                                        <Box>
                                            <ImTic src={val.url} alt="error" key={i} />

                                            <Text style={{ fontWeight: 800, color: '#212121' }}>{val.title.shortTitle}</Text>
                                            <Text style={{ color: 'green' }}>{val.discount}</Text>
                                            <Text style={{ color: '#212121', opacity: '.6' }}>{val.tagline}</Text>
                                        </Box>
                                    </Link>
                                </>
                            )
                        }) : []
                    }

                </Carousel>
            </Component>
            {/* {
            apiData ? apiData.map((value)=>{
                return(
                <> <div>
                    <img src={value.url} onClick={()=>{dis(value)}}/>
                    </div></>
                )
            }) : null
          }  */}

        </>
    )
}

export default FullData;