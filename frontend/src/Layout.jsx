import React from 'react'
import NavBar from './Layout/NavBar'

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}

export default Layout