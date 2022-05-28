import { Box, Container, createTheme, Stack, ThemeProvider } from "@mui/material"
import "./App.css"
import Rightbar from "./components/Rightbar"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Navbar from "./components/Navbar"
import Add from "./components/Add"
import { useState } from "react"

function App() {
  const [mode, setMode] = useState("light")

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#FDCA40",
      },
      secondary: {
        main: "#542E71",
      },
      warning: {
        main: "#A799B7",
      },
      error: {
        main: "#FB3640",
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor='background.default' color={"text.primary"}>
        <Navbar></Navbar>
        <Stack direction='row' spacing={2} justifyContent='center'>
          <Sidebar setMode={setMode} mode={mode}></Sidebar>
          <Feed></Feed>
          <Rightbar></Rightbar>
        </Stack>
        <Add></Add>
      </Box>
    </ThemeProvider>
  )
}

export default App
