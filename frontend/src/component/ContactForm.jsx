import { Box, Button, FormControl, FormLabel, Heading, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'

const ContactForm = () => {
    const cvOpen = () => {
        const linkCV = ''
        window.open(linkCV, '_blank')
    }
    const [pending, setPending] = useState(false)
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <Box width='100%' display='flex' justifyContent='center' bg='purple.200' py='60px' >
                <Box width='90%' border='2px solid darkviolet' borderRadius='md' px='13px' py='20px' >
                    <Box width='100%' display='flex' flexDirection={['column', 'column', 'row', 'row']} justifyContent='center'>
                        <Box my={['25px', '25px', '0', '0']} width={['100%', '100%', '49%', '49%']} display='flex' justifyContent='center'>
                            <Box width='90%'>
                                <form onSubmit={handleSubmit}>
                                    <VStack spacing='5px' color='black' >
                                        <Box width='100%'>
                                            <Heading fontSize='x-large' color='purple.800'>
                                                Message Me
                                            </Heading>
                                            <hr className=' w-16 sm:w-20 md:w-28 text-purple-500 md:py-3 my-2 text-lg border-purple-500 border-t-4 flex-grow' />
                                        </Box>

                                        <FormControl id='name' isRequired>
                                            <Input height={['35px', '35px', '40px', '40px']} color='purple' border='2px solid ' borderColor='purple.300' _hover={{ borderColor: 'purple.400'}} _active={{ borderColor: 'purple.400'}} _focus={{ borderColor: 'purple.400'}} type='text' bg='unset' placeholder='Your Name' value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </FormControl>

                                        <FormControl id='email' isRequired>
                                            <Input height={['35px', '35px', '40px', '40px']} color='purple' border='2px solid ' borderColor='purple.300' _hover={{ borderColor: 'purple.400'}} _active={{ borderColor: 'purple.400'}} _focus={{ borderColor: 'purple.400'}} type='text' bg='unset' placeholder='Your Email' value={role} onChange={(e) => setRole(e.target.value)} />
                                        </FormControl>

                                        <FormControl id='email' isRequired>
                                            <Input height={['35px', '35px', '40px', '40px']} color='purple' border='2px solid ' borderColor='purple.300' _hover={{ borderColor: 'purple.400'}} _active={{ borderColor: 'purple.400'}} _focus={{ borderColor: 'purple.400'}} type='text' bg='unset' placeholder='The Subject' value={role} onChange={(e) => setRole(e.target.value)} />
                                        </FormControl>

                                        <FormControl id='email' isRequired>
                                            <Textarea color='purple' border='2px solid ' borderColor='purple.300' _hover={{ borderColor: 'purple.400'}} _active={{ borderColor: 'purple.400'}} _focus={{ borderColor: 'purple.400'}} placeholder='Your Message' size='lg' resize='vertical' />
                                        </FormControl>

                                        {/* Button for Log in */}
                                        <Button height={['35px', '35px', '40px', '40px']} color='whiteAlpha.900' colorScheme='purple' width='100%' style={{ marginTop: 15 }} type='submit' isLoading={pending}  >
                                            Send Message
                                        </Button>
                                        {/* {error && <div className="text-red-700 font-bold mt-3 text-center border-red-700 border-solid border-2"> {error} </div>} */}


                                    </VStack>
                                </form>

                            </Box>
                        </Box>
                        <Box my={['25px', '25px', '0', '0']} width={['100%', '100%', '49%', '49%']} display='flex' justifyContent='center'>
                            <Box width='95%'>
                                <Box width='100%'>
                                    <VStack>
                                        <Box width='100%'>
                                            <Heading fontSize='x-large' color='purple.800'>
                                                Get In Touch
                                            </Heading>
                                            <hr className=' w-16 sm:w-20 md:w-28 text-purple-500 md:py-3 my-2 text-lg border-purple-500 border-t-4 flex-grow' />
                                        </Box>
                                        <Box width='100%' display='flex' flexDirection='column' mb='5px'>
                                            <Box display='flex' flexDirection='row' justifyContent='flex-start' mb='5px'>
                                                <AiOutlineMail className='text-xl md:text-2xl text-purple-900 font-black mr-5' />
                                                <Text color='purple.800'>
                                                    george.ekwemadu@gmail.com
                                                </Text>
                                            </Box>
                                            <Box display='flex' flexDirection='row' justifyContent='flex-start' mb='5px'>
                                                <AiOutlinePhone className='text-xl md:text-2xl text-purple-900 font-black mr-5' />
                                                <Text color='purple.800'>
                                                    +234 8083 037 157
                                                </Text>
                                            </Box>
                                            <Box display='flex' flexDirection='row' justifyContent='flex-start' mb='5px'>
                                                <AiOutlineMail className='text-xl md:text-2xl text-purple-900 font-black mr-5' />
                                                <Text color='purple.800'>
                                                    george.ekwemadu@gmail.com
                                                </Text>
                                            </Box>
                                        </Box>
                                        <Box width='100%' display='flex' flexDirection='column'>
                                            <Box display='flex' flexDirection='row' mt='30px' justifyContent='center'>
                                                <Button onClick={cvOpen} variant='variants'>
                                                    Download CV
                                                </Button>
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