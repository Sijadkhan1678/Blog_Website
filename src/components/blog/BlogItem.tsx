import React from 'react'
//import Img from "gatsby"
import {
  Paper,
  Grid,
  Typography,
  Box,
  Button,
  Stack
} from '@mui/material'

import hero  from './hero.jpg'



export const BlogItem = () => {

  return (
     
    <Grid item xs={10.3}  md={5.7} >
     <Paper elevation={6}>

      <img src={hero} alt='title' width='100%' style={style} />

      <Box  mt={2.4} pl={1.5} >

        <Typography  variant='h3'
                     fontWeight='500'
                     fontSize='1rem'
                                  >
                  how to build website using html css javascspt
         </Typography>

            <Typography component='p'
                        fontWeight="300"
                        fontSize="0.6rem"
                        textAlign='left' p={1.3}>
                         3/4/2022
              </Typography>
         </Box>
</Paper>
 </Grid>

  )
}

const style = {
  borderRadius: '0.8rem'
}


export default BlogItem