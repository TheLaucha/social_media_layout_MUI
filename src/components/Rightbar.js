import React from "react"
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material"

const Rightbar = () => {
  return (
    <Box flex={{ sm: 3, md: 2 }} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight='100' mt={2} mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt='Remy Sharp' src='https://i.pravatar.cc/300' />
          <Avatar alt='Travis Howard' src='https://i.pravatar.cc/300' />
          <Avatar alt='Cindy Baker' src='https://i.pravatar.cc/300' />
          <Avatar alt='Agnes Walker' src='https://i.pravatar.cc/300' />
          <Avatar alt='Trevor Henderson' src='https://i.pravatar.cc/300' />
          <Avatar alt='Cindy Baker' src='https://i.pravatar.cc/300' />
          <Avatar alt='Agnes Walker' src='https://i.pravatar.cc/300' />
          <Avatar alt='Trevor Henderson' src='https://i.pravatar.cc/300' />
        </AvatarGroup>
        <Typography variant='h6' fontWeight='100' mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src='https://loremflickr.com/640/360' alt='' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://baconmockup.com/640/360' alt='' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://placekitten.com/640/360' alt='' />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight='100' mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: "100%", maxWidth: 360 }}>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src='https://www.placecage.com/640/360' />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Travis Howard' src='https://www.placecage.com/c/200/300' />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Cindy Baker' src='https://www.placecage.com/g/200/300' />
            </ListItemAvatar>
            <ListItemText
              primary='Oui Oui'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar
