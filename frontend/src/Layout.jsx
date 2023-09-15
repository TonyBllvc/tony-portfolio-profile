import React from 'react'
import NavBar from './Layout/NavBar'
import FooterPage from './component/FooterPage'

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <FooterPage />
        </>
    )
}

export default Layout