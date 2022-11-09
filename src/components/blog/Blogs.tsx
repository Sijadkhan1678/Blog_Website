import React from 'react'
import { graphql,useStaticQuery } from 'gatsby'
import {Grid,Typography,Box} from '@mui/material'
import BlogItem  from './BlogItem'


export const Blogs = () => {


  const {allContentfulBlogs} = useStaticQuery(
    graphql`
    query{
      allContentfulBlogs {
          nodes {
            title
            slug
            date(formatString: "Do,MMMM YYYY")
            featuredImage {
              gatsbyImageData
              
            }
          }
        }
      }
       `

  ) 
  // allContentfulBlogs.nodes[0].featuredImage.gatsbyImageData.images.sources[0].srcSet
  console.log()
  
  return (
  
    <Box width='100%'  mt={7} sx={{flexGrow:1}} >
    <Typography variant='h3' fontWeight="200" component='p' m={3.5}>Blogs</Typography>
    <Grid container 
          spacing={3} 
          direction='row' 
          justifyContent='space-evenly'>

      {  allContentfulBlogs.nodes.map( (blog:any)=> (<BlogItem key={blog.id} blog={blog} />)) }

    </Grid>
  </Box>
  )
}

// (blog:any) =>   

export default Blogs
