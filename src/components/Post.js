import React from "react"
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Checkbox,
} from "@mui/material"
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material"

const Post = () => {
  return (
    <Card sx={{ margin: "5px" }}>
      <CardHeader
        avatar={<Avatar src='https://i.pravatar.cc/300'></Avatar>}
        action={
          <IconButton aria-label='settings'>
            <MoreVert />
          </IconButton>
        }
        title='Laucha'
        subheader='September 14, 2022'
      />
      <CardMedia
        component='img'
        height='20%'
        image='https://images.unsplash.com/photo-1653569397442-63e3fd38db2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8'
        alt='DJ fest'
      />
      <CardContent>
        <Typography variant='body2'>
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        <IconButton aria-label='share'>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post
