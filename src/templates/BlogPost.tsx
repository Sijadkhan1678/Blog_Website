import React, { useState } from 'react'
// import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { StaticImage, GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import { PageProps, useStaticQuery, graphql } from 'gatsby'
import { Box, Typography } from '@mui/material'





const BlogPost = ({ data }: any) => {
  // {pageContext}:PageProps
  const [isAuth, setIsAuth] = useState(true)
  console.log(data)
  const blog = data.allContentfulBlogs.nodes[0]

  const image: any = getImage(blog.featuredImage)

  console.log('current blog', blog.body.raw)

  // const {title,featuredImage} = 
  //  console.log('props',props.data)


  //  console.log('BlogPosResponse',allContentfulBlogs)
  //  console.log('page',pageContext)
  return (

    <Box p="2rem 1.7rem" //mt={{ sm: 2, md: 6 }} 
    m="0 auto" >

      <Box sx={{m: "auto"}}>

        <Typography variant='h3' mb={1} mt={4}>

          {/* How to build Web app using mern stack */}
          {blog.title}
        </Typography>

        <Typography component='div' mb={2} py={2}>
          {blog.date}
        </Typography>

        <GatsbyImage image={image} alt='blog-post'  />

      </Box>

      <Typography component='p' mt={2.7}>
        {/* {documentToReactComponents(blog.body.raw)} */}
      </Typography>



    </Box>

  )
}

export const query = graphql`

query ($slug:String){
  allContentfulBlogs (filter:{slug:{eq: $slug }}) {
   nodes {

     title
     date(formatString: "Do,MMMM YYYY")
     featuredImage {
       gatsbyImageData (
        width: 600
        height: 330
        
      )
       
     }
     body {
      raw
    }
   }
 }
}
`



export default BlogPost;