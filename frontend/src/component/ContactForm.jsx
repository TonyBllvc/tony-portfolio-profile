import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { BiMailSend } from 'react-icons/bi'

const ContactForm = () => {
    return (
        <>
            <Box width='100%' display='flex' justifyContent='center' bg='purple.600' pt='30px' >
                <Box width='90%' border='2px solid gray' borderRadius='md' px='13px' py='20px' >
                    <Box width='100%' bg='teal.500' display='flex' flexDirection={['column', 'column', 'row', 'row']} justifyContent='center'>
                        <Box bg='yellow' width={['100%', '100%', '49%', '49%']} display='flex' justifyContent='center'>
                            <Box>

                            </Box>
                        </Box>
                        <Box bg='blue.200' width={['100%', '100%', '49%', '49%']} display='flex' justifyContent='center'>
                            <Box width='95%'>
                                <Box width='100%'>
                                    <VStack>
                                        <Box width='100%'>
                                            <Heading fontSize='x-large' color='whiteAlpha.800'>
                                                Get In Touch
                                            </Heading>
                                            <hr className=' w-16 sm:w-20 md:w-28 text-purple-500 md:py-3 my-2 text-lg border-purple-500 border-t-4 flex-grow' />
                                        </Box>
                                        <Box width='100%' bg='teal.100' display='flex' flexDirection='column'>
                                            <Box bg='red.300' display='flex' flexDirection='row' justifyContent='flex-start' mb='5px'>
                                                <AiOutlineMail className='text-xl md:text-2xl text-purple-800 font-black mr-5' />
                                                <Text>
                                                    george.ekwemadu@gmail.com
                                                </Text>
                                            </Box>
                                            <Box bg='red.300' display='flex' flexDirection='row' justifyContent='flex-start' mb='5px'>
                                                <AiOutlinePhone className='text-xl md:text-2xl text-purple-800 font-black mr-5' />
                                                <Text>
                                                    +234 8083 037 157
                                                </Text>
                                            </Box>
                                            <Box bg='red.300' display='flex' flexDirection='row' justifyContent='flex-start' mb='5px'>
                                                <AiOutlineMail className='text-xl md:text-2xl text-purple-800 font-black mr-5' />
                                                <Text>
                                                    george.ekwemadu@gmail.com
                                                </Text>
                                            </Box>
                                        </Box>
                                    </VStack>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ContactForm