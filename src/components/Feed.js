import React from "react"
import { Box } from "@mui/material"
import Post from "./Post"

const Feed = () => {
  return (
    <Box flex={{ xs: 3, md: 4 }} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  )
}

export default Feed
