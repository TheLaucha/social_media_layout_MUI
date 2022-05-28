import styled from "@emotion/styled"
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material"
import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material"
import { Box, boxSizing } from "@mui/system"
import React, { useState } from "react"

const Add = () => {
  const [open, setOpen] = useState(false)

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  })

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title='Add'
        sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}
      >
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          bgcolor='background.default'
          color={"text.primary"}
          width={400}
          height={280}
          p={3}
          borderRadius={5}
        >
          <Typography variant='h6' color='gray' textAlign='center'>
            Create post
          </Typography>
          <UserBox>
            <Avatar alt='Remy Sharp' src='https://www.placecage.com/640/360' />
            <Typography variant='span' fontWeight={500} textAlign='center'>
              Nicolas Cage
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id='standard-multiline-static'
            multiline
            rows={2}
            placeholder="What's on your mind"
            defaultValued='Default Value'
            variant='standard'
          ></TextField>
          <Stack direction='row' gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary'></EmojiEmotions>
            <Image color='secondary'></Image>
            <VideoCameraBack color='success'></VideoCameraBack>
            <PersonAdd color='error'></PersonAdd>
          </Stack>
          <ButtonGroup fullWidth variant='contained' aria-label='outlined primary button group'>
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange>Icon</DateRange>
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add
