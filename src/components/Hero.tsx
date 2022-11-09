import React,{FC} from 'react';
import {graphql,useStaticQuery} from 'gatsby'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import BackgroundImage from 'gatsby-background-image'

 interface Data {
     data: any
}

const Hero = () => {
  
  const { heroImage } = useStaticQuery(

    graphql`
      query {
        heroImage: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(maxHeight:210,maxWidth: 430, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      
      }
    `
  )

  /*const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 491px)`,
    },
  ]*/
     
  return (

    <Box sx={{
        /*bgcolor: 'red',
        width: "100%",
        backgroundImage: 'url(./hero.jpg)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat', */
        mt: 2,
        // height: { sx: "60px", md: "550px" } 
      }}>
       <BackgroundImage  fluid={heroImage.childImageSharp.fluid}>      
         <Box sx={{

        pt : { xs:6,md: 13  },
        ml : { xs:1.2, md:7 },
        height : '450px' 
                      
                 }}>

          <Typography variant='h3' color='white' mt={{sm:2,md:9}}>
           Write and Earn
            </Typography>
            <br />
            <Typography component='p' color='#120B0E'>
            Start your bloging store  <br />
             show your show your talent to World
            </Typography>

      </Box>
      </BackgroundImage>

    </Box>
  )

}
export default Hero

