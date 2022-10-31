import React, { FC, ReactNode } from 'react'
import Navbar from './Navbar'

interface Children {
    children: ReactNode
}

const Layout:FC <Children> = ({children}) => {

    return(
    <div>
        <Navbar />
       { children} 
    </div>
    )
}

export default Layout