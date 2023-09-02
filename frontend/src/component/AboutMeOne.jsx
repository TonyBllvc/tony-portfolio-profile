import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const AboutMeOne = () => {
    return (
        <section>
            <Box width='100%' bg='blue' display='flex' flexDirection='row' justifyContent='space-around' py='40px'>

                <Box width={['95%', '95%', '90%', '85%']} py='30px' >
                    <Box width='100%' bg='whitesmoke' boxShadow='lg' >

                        <Box width='50%' bg='whitesmoke'>
                            <Box width='100%' display='flex' flexDirection='column' justifyContent='center'>

                                <Box width='100%' display='flex' flexDirection={['column', 'column', 'row', 'row']} justifyContent='space-around'>
                                    <Box width={['100%', '100%', '40%', '35%']}>

                                        {/* Image goes here */}
                                        <Box width='100%' py={['50px', '60px', '80px', '70px']}>

                                        </Box>
                                    </Box>
                                    <Box width={['100%', '100%', '60%', '65%']}>
                                        {/* Proile id goe here(create a table) */}
                                        <Box display='flex' width='100%'>
                                            <TableContainer width="100%" whiteSpace='break-spaces'>
                                                <Table width='100%' display='flex' flexDirection='row'>
                                                    <Thead width={['40%', '40%', '25%', '35%']}>
                                                        <Tr display='flex' width='100%' flexDirection='column'>
                                                            <Th width='100%' px='1px' justifyContent='start' overflow='hidden' textOverflow='ellipsis' wordBreak='break-all'>
                                                                <Box py={[1.5, 1.5, 1.5, 1.5]} width='100%' color='blackAlpha.800' fontWeight={['medium', 'semibold', 'extrabold', 'black']} fontSize={['10', '10', '12', '14']} textAlign='end'>
                                                                    Name:
                                                                </Box>
                                                            </Th>
                                                            <Th width='100%' px='1px' justifyContent='start' overflow='hidden' textOverflow='ellipsis' wordBreak='break-all'>
                                                                <Box py={[1.5, 1.5, 1.5, 1.5]} width='100%' color='blackAlpha.800' fontWeight={['medium', 'semibold', 'extrabold', 'black']} fontSize={['10', '10', '12', '14']} textAlign='end'>
                                                                    Profile:
                                                                </Box>
                                                            </Th>
                                                            <Th width='100%' px='1px' justifyContent='start' overflow='hidden' textOverflow='ellipsis' wordBreak='break-all'>
                                                                <Box py={[1.5, 1.5, 1.5, 1.5]} width='100%' color='blackAlpha.800' fontWeight={['medium', 'semibold', 'extrabold', 'black']} fontSize={['10', '10', '12', '14']} textAlign='end'>
                                                                    Email:
                                                                </Box>
                                                            </Th>
                                                            <Th width='100%' px='1px' justifyContent='start' overflow='hidden' textOverflow='ellipsis' wordBreak='break-all'>
                                                                <Box py={[1.5, 1.5, 1.5, 1.5]} width='100%' color='blackAlpha.800' fontWeight={['medium', 'semibold', 'extrabold', 'black']} fontSize={['10', '10', '12', '14']} textAlign='end'>
                                                                    Phone:
                                                                </Box>
                                                            </Th>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody width={['70%', '60%', '75%', '65%']}>
                                                        <Tr display='flex' width='100%' flexDirection='column'   >
                                                            <Td width='100%' px='1px' display='flex' justifyContent='start' overflow='hidden' textOverflow='ellipsis' wordBreak='break-all'>
                                                                <Box width={['100%', '100%', '100%']} color='blackAlpha.800' fontWeight={['medium', 'semibold', 'medium', 'semibold']} fontSize={['10', '10', '12', '14']} textAlign='start'>
                                                                    Ekwemadu George Chike
                                                                </Box>
                                                            </Td>
                                                            <Td width='100%' px='1px' display='flex' justifyContent='start' overflow='hidden' textOverflow='ellipsis' wordBreak='break-all'>
                                                                <Box width={['100%', '100%', '100%']} color='blackAlpha.800' fontWeight={['medium', 'semibold', 'medium', 'semibold']} fontSize={['10', '10', '12', '14']} textAlign='start'>
                                                                    Front-end Develpoer
                                                                </Box>
                                                            </Td>
                                                            <Td width='100%' px='1px' display='flex' justifyContent='start' overflow='hidden' textOverflow='ellipsis' wordBreak='break-all'>
                                                                <Box width={['100%', '100%', '100%']} color='blackAlpha.800' fontWeight={['medium', 'semibold', 'medium', 'semibold']} fontSize={['10', '10', '12', '14']} textAlign='start'>
                                                                    gtcekwemadu@gmnail.com
                                                                </Box>
                                                            </Td>
                                                            <Td width='100%' px='1px' display='flex' justifyContent='start' overflow='hidden' textOverflow='ellipsis' wordBreak='break-all'>
                                                                <Box width={['100%', '100%', '100%']} color='blackAlpha.800' fontWeight={['medium', 'semibold', 'medium', 'semibold']} fontSize={['10', '10', '12', '14']} textAlign='start'>
                                                                    +23480830157
                                                                </Box>
                                                            </Td>
                                                        </Tr>
                                                    </Tbody>
                                                </Table>
                                            </TableContainer>
                                        </Box>
                                        {/* </Box> */}
                                    </Box>

                                </Box>
                                <Box width='100%'>
                                    <Box width='100%'>
                                        sh
                                        {/* The skills goe here */}
                                    </Box>

                                </Box>

                            </Box>
                        </Box>

                        <Box width='50%'>
                            <Box>
                                {/* About me */}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </section>
    )
}

export default AboutMeOne
