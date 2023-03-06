import { InputBase, Box, styled, ListItem, List  } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "../../store/ViewSlice";

 const SearchContainer =styled(Box)`
background: #FFF;
width: 38%;
border-radius:2px;
margin-left:10px;
display:flex;

`;
const InputSearchBase =styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`;
 const SearchIconWrapper =styled(Box)`
 color:blue;
 padding:5px;
 display:flex;
 
 
 `

 const ListWrapper=styled(List)`
 position:absolute;
 background-color:white;
 color:#000;
 margin-top:36px;
 `

const Search = () =>{
const dispatch= useDispatch();
  

  const dis = (val) => {
    dispatch(add(val))
    // console.log(viewSore)
    // setDataShow(val)
    // navigate('/viewproduct')
    SetText('');
}
  
const Searchproduct = useSelector(state => state.item.data.data)
// console.log('text'); 
// console.log(Searchproduct);

  const [text ,SetText]=useState('')
  const getText =(text)=>{
      SetText(text);

      
  }
    return(
        <SearchContainer>
      <InputSearchBase  placeholder='Search for products, brands and more' value={text} onChange={(e)=>getText(e.target.value)} />
      <SearchIconWrapper>
        <SearchIcon/>
      </SearchIconWrapper>

      {text && 
      <ListWrapper>
        {
          Searchproduct.filter(val => val.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(val =>
            <ListItem>
              <Link onClick={() => { dis(val) }} to={'/viewproduct'}  style={{textDecoration:'none', color:'black'}}>   {val.title.longTitle}</Link>

              </ListItem>
          )
        }
      </ListWrapper> 
      }
      </SearchContainer>
    )
}


export default Search;