import { Box, Card, CardBody, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const ServicesOne = () => {
    return (
        <>
            <Box width='100%' my='70px'>
                <Box width='100%'>
                    <Box width='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Box width='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center' textAlign='center' >
                            <h1 className=' text-3xl md:text-5xl font-semibold'>
                                Services
                            </h1>
                            <hr className=' w-16 sm:w-20 md:w-28 text-purple-500 md:py-3 my-2 text-lg border-purple-500 border-t-4 flex-grow' />
                        </Box>
                        <Box w='100%' display='flex' justifyContent='center' alignItems='center'>
                            <Box width={['85%', '85%', '88%', '88%']} py={['20px', '15px', '10px', '10px']} display='flex' justifyContent='center' alignItems='center'>

                                <Box width={['90%', '90%', '100%', '100%']} display='flex' justifyContent='center' alignItems='center'>
                                    {/* Card section */}
                                    <SimpleGrid spacing={4}
                                    templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']} gap={2} 
                                    // templateColumns='repeat(auto-fill, minimax(30%, 1fr))' 
                                    >

                                        <Card boxShadow='lg' p={['1px', '3px', '5px', '5px']}>
                                            <CardBody width='100%'>
                                                <Box width='100%' display='flex' flexDirection='row' justifyContent='space-around' mb={[ '3px', '10px', '10px', '15px']}>
                                                    <h1 className='mt-3 uppercase text-xl md:text-xl text-center lg:text-3xl tracking-tight lg:tracking-tighter font-semibold md:font-semibold lg:font-bold'>
                                                        Web-Design
                                                    </h1>
                                                </Box>
                                                <Box width='100%' mt={['3px', '10px', '10px', '15px']}>
                                                    <Text letterSpacing='tight' color='blackAlpha.700' fontWeight={['medium', 'semibold', 'semibold', 'semibold']} fontSize={['12', '12', '12.5', '17']} textAlign='justify' mx={['5px', '5px','10px','']} my='2'>
                                                        For more than 5 years now, design has been the central piece of my world. On this fast and mind-blowing journey, I have moved over the years from being a visual designer to a full-time UX/UI thinker and designer.
                                                    </Text>
                                                </Box>

                                            </CardBody>
                                        </Card>

                                    
                                        <Card boxShadow='lg' p={['1px', '3px', '5px', '5px']}>
                                            <CardBody width='100%'>
                                                <Box width='100%' display='flex' flexDirection='row' justifyContent='space-around' mb={[ '3px', '10px', '10px', '15px']}>
                                                    <h1 className='mt-3 uppercase text-xl md:text-xl lg:text-3xl text-center tracking-tight lg:tracking-tighter font-semibold md:font-semibold lg:font-bold'>
                                                        Web Development
                                                    </h1>
                                                </Box>
                                                <Box width='100%' mt={['3px', '10px', '10px', '15px']}>
                                                    <Text letterSpacing='tight' color='blackAlpha.700' fontWeight={['medium', 'semibold', 'semibold', 'semibold']}  fontSize={['12', '12', '12.5', '17']} textAlign='justify' mx={['5px', '5px','10px','']} my='2'>
                                                        For more than 5 years now, design has been the central piece of my world. On this fast and mind-blowing journey, I have moved over the years from being a visual designer to a full-time UX/UI thinker and designer.
                                                    </Text>
                                                </Box>

                                            </CardBody>
                                        </Card>
                                        <Card boxShadow='lg' p={['1px', '3px', '5px', '5px']}>
                                            <CardBody width='100%'>
                                                <Box width='100%' display='flex' flexDirection='row' justifyContent='space-around' mb={[ '3px', '10px', '10px', '15px']}>
                                                    <h1 className='mt-3 uppercase text-xl md:text-xl lg:text-3xl text-center tracking-tight lg:tracking-tighter font-semibold md:font-semibold lg:font-bold'>
                                                        Responsive Designs
                                                    </h1>
                                                </Box>
                                                <Box width='100%' mt={['3px', '10px', '10px', '15px']}>
                                                    <Text letterSpacing='tight' color='blackAlpha.700' fontWeight={['medium', 'semibold', 'semibold', 'semibold']}  fontSize={['12', '12', '12.5', '17']} textAlign='justify' mx={['5px', '5px','10px','']} my='2'>
                                                        For more than 5 years now, design has been the central piece of my world. On this fast and mind-blowing journey, I have moved over the years from being a visual designer to a full-time UX/UI thinker and designer.
                                                    </Text>
                                                </Box>

                                            </CardBody>
                                        </Card>

                                    </SimpleGrid>
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