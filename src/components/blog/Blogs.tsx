import React from 'react'
import {Grid,Box} from '@mui/material'
import BlogItem  from './BlogItem'

export const Blogs = () => {
  return (
  
    <Box width='100%'  mt={7} sx={{flexGrow:1}} >
  
    <Grid container 
          spacing={3} 
          direction='row' 
          justifyContent='space-evenly'>
    
              <BlogItem  />
              <BlogItem  />
              <BlogItem  />
              <BlogItem  />
              <BlogItem  />
    
    </Grid>
  </Box>
  )
}

export default Blogs
