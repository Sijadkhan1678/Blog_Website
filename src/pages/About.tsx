import React from 'react'
import {Box,Typography} from "@mui/material"
import {Link,HeadFC} from "gatsby"

const About = () => {
    return (
        <Box>
            <Link to="/">Back to Home</Link>
           <Typography>
               this website is developed by sijad khan
           </Typography>

        </Box>
    )

}
export default About

export const Head:HeadFC = () => <title>About page</title>