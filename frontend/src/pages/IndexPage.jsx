import React, { useEffect } from 'react'
import MainPage from '../component/MainPage'
import AboutMeOne from '../component/AboutMeOne'
// import '../assets/css/main.css'

const IndexPage = () => {
    useEffect(() => {
        document.title ='Personal | Portolio'
    })

    return (
        <>
            <MainPage />
            <AboutMeOne />
        </>
    )
}

export default IndexPage