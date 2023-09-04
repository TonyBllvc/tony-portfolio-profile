import { Box } from '@chakra-ui/react'
import React from 'react'

const Services = () => {
    return (
        <>
            <Box width='100%' my='70px'>
                <Box width='90%'>
                    <Box width='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Box width='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center' textAlign='center' >
                            <h1 className=' text-3xl md:text-5xl font-semibold'>
                                Services
                            </h1>
                            <hr className=' w-16 sm:w-20 md:w-28 text-purple-500 md:py-3 my-2 text-lg border-purple-500 border-t-4 flex-grow' />
                        </Box>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                            <Box>
                            
                                <Box>

                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Services