import React, { useState } from "react"
import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material"
import { Pets, Mail, Notifications } from "@mui/icons-material"

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}))

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          LAUCHA DEV
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder='search...'></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail></Mail>
          </Badge>
          <Badge badgeContent={2} color='error'>
            <Notifications></Notifications>
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            src='https://i.pravatar.cc/300'
            sx={{ width: "30px", height: "30px" }}
          ></Avatar>
        </Icons>
        <UserBox>
          <Avatar
            onClick={(e) => setOpen(true)}
            src='https://i.pravatar.cc/300'
            sx={{ width: "30px", height: "30px" }}
          ></Avatar>
          <Typography variant='span'>Laucha</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
