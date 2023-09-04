import { Box, Button, Image, Img, Text, } from '@chakra-ui/react'
import React, { useState } from 'react'
import '../assets/css/header.css'
import { AiOutlineArrowRight, } from 'react-icons/ai'
import { BsChatDots, BsList } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import { BiBookContent, BiTimeFive, BiTimer } from 'react-icons/bi'
import { ImList, ImList2, ImSwitch } from 'react-icons/im'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <header>
            <div className="header-area header-transparent">
                <div className="main-header header-sticky sticky-bar">
                    <div className='w-full'>
                        <Box width='100%' display='flex' alignContent='center' justifyContent='space-between' flexWrap='wrap' alignItems='center' >
                            {/* Logo (Writeup) */}
                            <Box width={['70%', '30%', '20%', '17%']}>
                                <Box width='100%' flex={{ md: 'flex-start' }}>
                                    <Text color='purple.400' fontSize='3xl' fontWeight='bold'>
                                        Tony.
                                    </Text>
                                </Box>
                            </Box>

                            {/* Dropdown Buttons */}
                            <Box display={{ base: "flex", lg: "none" }} py={['14px', '31px', '']} justifyContent='flex-end' width={['30%', '40%', '40%', '']} >
                                {!toggle &&
                                    <BsList onClick={() => setToggle(!toggle)} className='text-2xl md:text-4xl text-purple-800 font-black' />
                                }
                                {toggle &&
                                    <FaTimes onClick={() => setToggle(!toggle)} className='text-2xl md:text-4xl text-purple-800 font-bold' />
                                }
                            </Box>

                            {/* Navigation menu */}
                            <Box display={{ base: "none", md: "none", lg: "flex" }} width='55%'>
                                <Box width='100%' >
                                    <nav className='w-full' >
                                        <ul className='flex flex-row' id="navigation">
                                            <li className="active">
                                                <NavLink className={({ isActive }) => isActive ? 'a' : 'b'} to='/' >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li className="active">
                                                <NavLink className={({ isActive }) => isActive ? 'a' : 'b'} to='/about'>
                                                    About
                                                </NavLink>
                                            </li>
                                            <li className="active">
                                                <NavLink className={({ isActive }) => isActive ? 'a' : 'b'} to='/portfolio' >
                                                    Protfolio
                                                </NavLink>
                                            </li>
                                            {/* <li className="active">
                                                <NavLink className={({ isActive }) => isActive ? 'a' : 'b'}  >
                                                    Blog
                                                </NavLink>
                                                <ul className="submenu">
                                                    <li className="active">
                                                        <NavLink className={({ isActive }) => isActive ? 'a' : 'b'}  >
                                                            Blog
                                                        </NavLink>
                                                    </li>
                                                    <li className="active">
                                                        <NavLink className={({ isActive }) => isActive ? 'a' : 'b'}  >
                                                            Blog Details
                                                        </NavLink>
                                                    </li>
                                                    <li className="active">
                                                        <NavLink className={({ isActive }) => isActive ? 'a' : 'b'}  >
                                                            Elements
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </li> */}
                                            <li className="active">
                                                <NavLink className={({ isActive }) => isActive ? 'a' : 'b'} to='/portfolio'>
                                                    Contact
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </nav>
                                </Box>
                            </Box>
                            <Box display={{ base: "none", md: "none", lg: "flex" }} width='20%' height='100%'>
                                <Box width='100%' display='flex' height='100%' justifyContent='center'>
                                    <Button fontSize='xl' fontWeight='semibold' p='7' variant='variants' >
                                        Let's Talk <AiOutlineArrowRight className='text-white text-lg' />
                                    </Button>
                                </Box>
                            </Box>

                            {/* Dropdown menu */}
                            {toggle &&
                                <hr className='w-full text-black md:py-3 md:-mt-2 text-sm ' />
                            }
                            {toggle &&
                                <Box transition='ease-in' transitionDelay='10s' transformOrigin='top' display={{ base: "flex", lg: "none" }} width='100%'>
                                    <Box width='95%' transition='ease-in' transitionDelay='10s' transformOrigin='top' >
                                        <nav className='w-full mb-6 '  >
                                            <ul className='w-full flex flex-col'>
                                                <li className='w-full flex '>
                                                    <NavLink className={({ isActive }) => isActive ? 'bg-purple-700 w-full px-5 md:px-12 py-1 md:py-3 text-lg md:text-4xl text-white' : 'w-full px-5 md:px-12 py-1 md:py-3 text-lg md:text-4xl text-purple-600'} to='/' >
                                                        Home
                                                    </NavLink>
                                                </li>
                                                <li className="w-full flex">
                                                    <NavLink className={({ isActive }) => isActive ? 'bg-purple-700 w-full px-5 md:px-12 py-1 md:py-3 text-lg md:text-4xl text-white' : 'w-full px-5 md:px-12 py-1 md:py-3 text-lg md:text-4xl text-purple-600'} to='/about'>
                                                        About
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </nav>
                                    </Box>
                                </Box>
                            }
                        </Box>
                    </div>
                </div>
            </div>
            {/* <!-- Header End --> */}
        </header>

    )
}

export default NavBar
