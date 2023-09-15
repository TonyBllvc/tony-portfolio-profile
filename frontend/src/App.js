import { BrowserRouter, Navigate, Route, Routes, } from "react-router-dom";
import Layout from "./Layout";
import logo from './assets/img/favicon.ico'
import { useEffect } from "react";
import IndexPage from "./pages/IndexPage";
// import './assets/css/main.css'
// import './assets/css/header.css'
// import ViewTimeTable from "./pages/component/ViewTimeTable";

export default function App() {
   
    useEffect(() => {    
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.href = logo; // Replace with your favicon path
    document.head.appendChild(faviconLink);

    // Clean up when component unmounts
    return () => {
      document.head.removeChild(faviconLink);
    };})

    return (
        <div>
            <BrowserRouter>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<IndexPage />} />
                        </Routes>
                    </Layout>

            </BrowserRouter>
        </div>
    )
}




