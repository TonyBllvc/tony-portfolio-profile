import { Image, Img, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineLock, AiOutlineUser } from 'react-icons/ai'
import { BsChatDots } from 'react-icons/bs'
import { BiBookContent, BiTimeFive } from 'react-icons/bi'
import { ImSwitch } from 'react-icons/im'
import { NavLink, useNavigate } from 'react-router-dom'

const ProtoNav = () => {

    return (
        <header>
            <div className="header-area">
                <div className="main-header header-sticky sticky-bar">
                    <div className="container-fluid">
                        <div className="menu-wrapper d-flex align-items-center justify-content-between">
                            {/* <!-- Logo --> */}
                            <div className="logo">
                                <NavLink className='a' href="index.html">
                                    Tony Black
                                    {/* <img src="assets/img/logo/logo.png" alt=""> */}
                                    {/* <Img src='' /> */}
                                </NavLink>
                            </div>

                            {/* <!-- Main-menu --> */}
                            <div className="main-menu f-right d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li className="active">
                                            <NavLink className='a' to='/' >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className='a' >
                                                About
                                            </NavLink>
                                        </li>
                                        <li><NavLink className='a' >Protfolio</NavLink></li>
                                        <li><NavLink className='a' >Blog</NavLink>
                                            <ul className="submenu">
                                                <li><NavLink className='a' >Blog</NavLink></li>
                                                <li><NavLink className='a' >Blog Details</NavLink></li>
                                                <li><NavLink className='a' >Elements</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><NavLink className='a'>Contact</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                            {/* <!-- Header-btn --> */}
                            <div className="header-info-right d-none d-lg-block">
                            </div>
                            {/* <!-- Mobile Menu --> */}
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Header End --> */}
        </header>
    )
}

export default ProtoNav
