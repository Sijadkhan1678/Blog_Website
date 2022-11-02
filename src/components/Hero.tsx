import React from 'react';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import hero from '../images/hero.jpg'

const Hero = () => {
  
  return (

    <Box sx={{
        bgcolor: 'red',
        width: "100%",
        background: `url(${hero})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
       // mt: 2,
        height: { sx: "60px", md: "550px" }
      }}>

      <Box sx={{
        pt : {xs:6,md: 13 },
        ml : {xs:1.2, md:7 },
        height : '500px' 
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
    </Box>
  )

}
export default Hero