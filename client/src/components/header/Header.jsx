
import { AppBar, Toolbar, Box, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';


//components

import Search from './Search';
import CustomButtons from './CustomButtons';


const StyLedHeader = styled(AppBar)`
 background: #2874f0;
 height: 55px;
 `;

const Component = styled(Link)`
 margin-left: 12%;
 line-height: 0;
 text-decoration: none;
 color: inherit;
 `;

const SubHeading = styled(Typography)`
 font-size:10px;
 font-style: italic;
 `;
const Pluslogo = styled('img')({
   width: 10,
   height: 10,
   marginLeft: 4
})

const CustomButtonsWrapper = styled(Box)`
margin: 0 4% 0 auto; 
 `

const Header = () => {

   const logoURl = 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png';

   const SubURl = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";

   return (
      <StyLedHeader>
         <Toolbar style={{ minHeight: 55 }}>

            <Component to='/'>
               <img src={logoURl} alt="logo" style={{ width: 75 }} />
               <Box style={{ display: 'flex' }}>
                  <SubHeading>Explore&nbsp;
                     <Box component="span" style={{ color: '#ffe500' }}  >Plus</Box>
                  </SubHeading>
                  <Pluslogo src={SubURl} alt="sublogo" />
               </Box>
            </Component>

            <Search />
            <CustomButtonsWrapper>
               <CustomButtons />
            </CustomButtonsWrapper>


         </Toolbar>
      </StyLedHeader>
   )
}

export default Header;