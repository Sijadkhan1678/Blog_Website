import React from 'react'
import {Link} from "gatsby"
import {Box,Stack} from '@mui/material'


export const Navbar = () => {
  return (
    
     <Box p={4} px={8} border={2}>
      <Stack direction='row' justifyContent='space-between' 
         alignItems='center'>
      <Box width='10px'>
      {/* <img width='40px' src={} alt='logo'/> */}
      </Box>
      <Stack direction='row' justifyContent='space-between'
      width='30%'>

        <Link to='/' >Home</Link>
        <Link to='/blogs' >Blogs</Link>
        <Link to='/about' >About</Link>

      </Stack>
      <Box width='13%' > 

 
      </Box>
     </Stack>
 </Box>

  )
}

export default Navbar