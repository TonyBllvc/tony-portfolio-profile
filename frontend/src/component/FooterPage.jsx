import { Box, Container } from '@chakra-ui/react'
import React from 'react'

const FooterPage = () => {
    return (
        <>
            <Box width='100%' display='flex' justifyContent='center' py='30px' bg='purple.600' color='gray.200'>
                {/* <Container > */}
                <Box width='70%'>
                    <Box width='100%' display='flex' flexDirection={['column', 'column', 'row', 'row']} justifyContent='center'>
                        <Box display='flex' justifyContent='center' width={['100%', '100%', '49%', '49%']}>
                            <Box width='95%' display='flex' fontSize={['small', 'small', '', 'large']} justifyContent={['center', 'center', 'flex-end', 'flex-end']} >
                                Copyright © 2023 All rights reserved
                            </Box>
                        </Box>
                        <Box width={['0','0', '1%', '1%']} display={['none', 'none', 'flex', 'flex']} justifyContent='center'>
                            |
                        </Box>
                        <Box display='flex' justifyContent='center' width={['100%', '100%', '49%', '49%']}>
                            <Box width='95%' display='flex' fontSize={['small', 'small', '', 'large']} justifyContent={['center', 'center', 'flex-start', 'flex-start']}>
                                Designed by Tony
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* </Container> */}
            </Box>
        </>
    )
}

export default FooterPage