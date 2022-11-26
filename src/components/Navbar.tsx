import React from 'react'
import {Link} from "gatsby"
import {Box,Stack,Badge,} from '@mui/material'


export const Navbar = () => {
  return (

       <Box p={2} px={8}  >
           <Stack direction='row' justifyContent='space-between' 
           alignItems='center'>
             
             <Stack direction='row' justifyContent='space-evenly'
             width='75%' >
             <Link to='/' style={style}>Home</Link>
             <Link to='/Blog/' style={style}>Blog</Link>
             <Link to='/About/' style={style}>About</Link>
             </Stack>
             <Box width='13%' > 

        
          <Link style={{color:'black'}} to='/login'>
          Login
           </Link>
    
     
             </Box>
            </Stack>
            
       </Box>

  )
}

const style =  { fontWieght: '800px',
  fontSize: '1.2rem',
  textDecoration: 'none',
  

 
}


export default Navbar
