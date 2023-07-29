
// Create a movie app similar to the figma design provided.
// ● Things to be done:
// ○ The first screen shows you a Discover tab with the movies list. In the prototype
// link you have all the animation related to cards and search icon.
// ○ In the sidebar only the Discover tab remains active and the rest remain inactive.
// ○ The search functionality needs to be implemented when a user clicks on the
// search icon.
// ● In the prototype link -
// ○ By clicking on the first card, you get the details for that movie. You need to
// implement the same animation for all the cards.
// ○ When you click on the 6th card, you will be able to know how the cards which
// are in between open up.
// ○ Please check the search box animation as well, by clicking on the search icon.
// ● Create reusable react components (divide the page into components as per your
// understanding)
// ● For responsiveness, you can convert the desktop design to mobile according to your
// own creativity.
// ● Please use the movies JSON Data provided from the next page to create the exercise.
// ● Page should be responsive so should look good on desktop and Mobile (no need to
// think for Tablet)
// ● We recommend to use MUI for styling.

import { useState } from 'react'
import './App.css'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from './components/atoms/Copyright'

function App() {

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Vite.js example
        </Typography>
        <Copyright />
      </Box>
    </Container>
  )
}

export default App
