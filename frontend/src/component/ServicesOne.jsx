import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const ServicesOne = () => {
    return (
        <>
            <Box width='100%' my='70px'>
                <Box width='90%'>
                    <Box width='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Box width='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center' textAlign='center' >
                            <h1 className=' text-3xl md:text-5xl font-semibold'>
                                ServicesOne
                            </h1>
                            <hr className=' w-16 sm:w-20 md:w-28 text-purple-500 md:py-3 my-2 text-lg border-purple-500 border-t-4 flex-grow' />
                        </Box>
                        <Box w='100%' display='flex' justifyContent='center' alignItems='center'>
                            <Box width={['85%', '85%', '87%', '87%']} py='10px' >

                                <Box width='100%' gridArea='auto' gridGap='3' gridAutoRows='auto' gridRow='auto'>
                                    {/* Card section */}
                                    <Box boxShadow='lg' width={['100%', '100%', '32%', '32%']} p='20px'>
                                        <Box width='100%'>
                                            <Box width='100%' display='flex' flexDirection='row' justifyContent='space-around'>
                                                <h1 className='mt-3 text-xl md:text-2xl lg:text-5xl tracking-tight font-semibold md:font-semibold'>
                                                    Web-Design
                                                </h1>
                                            </Box>
                                            <Box width='100%'>
                                                <Text letterSpacing='tight' color='blackAlpha.700' fontWeight={['medium', 'semibold', 'semibold', 'semibold']} fontSize={['13', '13', '13', '16']} textAlign='justify' my='2'>
                                                    For more than 5 years now, design has been the central piece of my world. On this fast and mind-blowing journey, I have moved over the years from being a visual designer to a full-time UX/UI thinker and designer.
                                                </Text>
                                            </Box>
                                            
                                        </Box>
                                    </Box>
                                    
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ServicesOne