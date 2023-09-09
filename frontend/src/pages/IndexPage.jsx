import React, { useEffect } from 'react'
import MainPage from '../component/MainPage'
import AboutMeOne from '../component/AboutMeOne'
import ServicesOne from '../component/ServicesOne'
import PortfolioOne from '../component/PortfolioOne'
// import '../assets/css/main.css'

const IndexPage = () => {
    useEffect(() => {
        document.title ='Personal | Portolio'
    })

    return (
        <>
            <MainPage />
            <AboutMeOne />
            <ServicesOne />
            <PortfolioOne />
        </>
    )
}

export default IndexPage