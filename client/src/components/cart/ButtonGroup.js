import styled from '@emotion/styled';
import { Button , ButtonGroup} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';

const Component =styled(ButtonGroup)`
margin-top:30px;

`
const StyledButton=styled(Button)`
border-radius:50%;
background-color:white;

`


const GroupedButton = () => {
  return (
    <Component>
        <StyledButton>-</StyledButton>
        <StyledButton>1</StyledButton>
        <StyledButton>+</StyledButton>
    </Component>
      
    
  )
}

export default GroupedButton;
