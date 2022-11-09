import React from 'react'
import {Link} from 'gatsby'
import { StaticImage,GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"

import {
  Paper,
  Grid,
  Typography,
  Box,
  Button,
  Stack
} from '@mui/material'


export const BlogItem = ({blog}:any) => {

   const {title,date,featuredImage,slug} = blog 
  
   const image:any = getImage(featuredImage)
  
  return (
     
    <Grid item xs={10.3}  md={3.5} >
     <Paper elevation={6}>
      <Link to='/blog:${slug}'>    {/* <StaticImage src={image} alt='title'  style={style} /> */}
      <GatsbyImage image={image} alt='blog' />

      <Box  mt={2.4} pl={1.5} >

        <Typography  variant='h3'
                     fontWeight='500'
                     fontSize='1rem'
                                  >
                  {title}
         </Typography>

            <Typography component='p'
                        fontWeight="300"
                        fontSize="0.7rem"
                        textAlign='left' p={1.3}>
                         {date}
              </Typography>
         </Box>
         </Link>
  
</Paper>
 </Grid>

  )
}

const style = {
  borderRadius: '0.8rem',
  height: '250px'
 // width:'400px'
}


export default BlogItem