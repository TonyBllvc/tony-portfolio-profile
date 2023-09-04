import React, { useEffect } from 'react'
import MainPage from '../component/MainPage'
import AboutMeOne from '../component/AboutMeOne'
import Services from '../component/Services'
// import '../assets/css/main.css'

const IndexPage = () => {
    useEffect(() => {
        document.title ='Personal | Portolio'
    })

    return (
        <>
            <MainPage />
            <AboutMeOne />
            <Services />
        </>
    )
}

export default IndexPage