import styled from "@emotion/styled";
import { Typography, Box, MenuItem, Menu } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from "react";




const Component = styled(Menu)`
margin-top: 5px
`

const Logout = styled(Typography)`
font-size:14px;
margin-left:20px;
`




const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleclick = (event) => {
    setOpen(event.currentTarget)
  }
  const handleClose = () => {
    setOpen(false)
  }


  const logout = () => {
    setAccount('');
  }


  return (
    <>
      <Box onClick={handleclick}>  <Typography style={{ marginTop: 2, cursor: 'pointer' }}>{account}</Typography></Box>
      <Component

        anchorEl={open}
        open={open}
        onClose={handleClose}

      >

        <MenuItem onClick={() => { handleClose(); logout(); }}>
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  )
}

export default Profile;