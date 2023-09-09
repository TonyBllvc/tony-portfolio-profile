import { Box, Card, CardBody, CardFooter, Divider, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { BiBookContent, BiTimeFive, BiTimer } from 'react-icons/bi'
import React from 'react'

const PortfolioOne = () => {
    return (
        <>
            <Box width='100%' my='70px'>
                <Box width='100%'>
                    <Box width='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Box width='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center' textAlign='center' >
                            <h1 className=' text-3xl md:text-5xl font-semibold'>
                                Portfolio
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
                                                <Box width='100%' display='flex' flexDirection='row' justifyContent='space-around'>
                                                    <Image alt='webapp' borderRadius='lg' />

                                                </Box>
                                                <Stack mt='6' spacing='3'>
                                                    <Box width='100%' display='flex' flexDirection='row' justifyContent='space-around'>
                                                        <Heading size='md'>
                                                            Workout
                                                        </Heading>
                                                    </Box>
                                                    <Box width='100%' >
                                                        <Text letterSpacing='tight' color='blackAlpha.700' fontWeight={['medium', 'semibold', 'semibold', 'semibold']} fontSize={['12', '12', '12.5', '17']} textAlign='justify' mx={['5px', '5px', '10px', '']}>
                                                            For more than 5 years now, design has been the ..
                                                        </Text>
                                                    </Box>
                                                </Stack>

                                            </CardBody>

                                            <Divider />
                                            <CardFooter width='100%'>
                                                <Box width='100%' display='flex' justifyContent='space-around'>
                                                    <Box width='45%' display='flex' alignItems='center' justifyContent='flex-start' >
                                                        <Text color='gray.500' textAlign='left'>
                                                            Javascript
                                                        </Text>
                                                    </Box>
                                                    <Box width='45%' display='flex' justifyContent='center' alignItems='center' >
                                                        <Text color='gray.500' display='flex' justifyContent='center' alignItems='center' textAlign='center'>
                                                            <BiTimeFive className='text-gray-500 text-lg mr-1' /> 10 Mins
                                                        </Text>
                                                    </Box>
                                                </Box>
                                            </CardFooter>
                                        </Card>

                                        
                                        <Card boxShadow='lg' p={['1px', '3px', '5px', '5px']}>
                                            <CardBody width='100%'>
                                                <Box width='100%' display='flex' flexDirection='row' justifyContent='space-around'>
                                                    <Image alt='webapp' borderRadius='lg' />

                                                </Box>
                                                <Stack mt='6' spacing='3'>
                                                    <Box width='100%' display='flex' flexDirection='row' justifyContent='space-around'>
                                                        <Heading size='md'>
                                                            Workout
                                                        </Heading>
                                                    </Box>
                                                    <Box width='100%' >
                                                        <Text letterSpacing='tight' color='blackAlpha.700' fontWeight={['medium', 'semibold', 'semibold', 'semibold']} fontSize={['12', '12', '12.5', '17']} textAlign='justify' mx={['5px', '5px', '10px', '']}>
                                                            For more than 5 years now, design has been the ..
                                                        </Text>
                                                    </Box>
                                                </Stack>

                                            </CardBody>

                                            <Divider />
                                            <CardFooter width='100%'>
                                                <Box width='100%' display='flex' justifyContent='space-around'>
                                                    <Box width='45%' display='flex' alignItems='center' justifyContent='flex-start' >
                                                        <Text color='gray.500' textAlign='left'>
                                                            Javascript
                                                        </Text>
                                                    </Box>
                                                    <Box width='45%' display='flex' justifyContent='center' alignItems='center' >
                                                        <Text color='gray.500' display='flex' justifyContent='center' alignItems='center' textAlign='center'>
                                                            <BiTimeFive className='text-gray-500 text-lg mr-1' /> 10 Mins
                                                        </Text>
                                                    </Box>
                                                </Box>
                                            </CardFooter>
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

export default PortfolioOne