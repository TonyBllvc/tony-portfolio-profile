import { Box, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const AboutMeOne = () => {
    return (
        <section>
            <Box width='100%' display='flex' flexDirection='row' justifyContent='space-around' py='40px'>

                <Box width={['85%', '85%', '87%', '87%']} py='30px' >
                    <Box width='100%' bg='whitesmoke' px={['20px', '20px', '20px', '20px']} py={['30px', '30px', '30px', '30px']} boxShadow='lg' display='flex' flexDirection={['column', 'column', 'row', 'row']}>

                        <Box width={['100%', '100%', '50%', '50%']} bg='whitesmoke'>
                            <Box width='100%' display='flex' flexDirection='column' justifyContent='center'>

                                <Box width='100%' display='flex' flexDirection={['column', 'column', 'row', 'row']} justifyContent='space-around'>
                                    <Box w idth={['100%', '100%', '35%', '35%']}>
                                        ddddd
                                        {/* Image goes here */}
                                        <Box width='100%' py={['50px', '60px', '80px', '70px']}>

                                        </Box>
                                    </Box>
                                    <Box width={['100%', '100%', '65%', '65%']}>
                                        {/* Proile id goe here(create a table) */}
                                        <Box display='flex' width='100%'>
                                            <TableContainer width="100%" whiteSpace='break-spaces'>
                                                <Table width='100%' display='flex' flexDirection='row'>
                                                    <Thead width={['20%', '13%', '29%', '35%']}>
                                                        <Tr display='flex' width='100%' flexDirection='column' >
                                                            <Th width='100%' px='1px' justifyContent='start' overflow='hidden' textOverflow='ellipsis' wordBreak='break-all'>
                                                                <Box py={[1.5, 1.5, 1.5, 1.5]} width='100%' letterSpacing='tight' color='blackAlpha.700' fontWeight={['medium', 'bold', 'extrabold', 'black']} fontSize={['11', '11', '12', '14']} textAlign={['start', 'start', 'end', 'end']}>
                                                                    Name:
                                                                </Box>
                                                            </Th>
                                                            <Th width='100%' px='1px' justifyContent='start' overflow='hidden' textOverflow='ellipsis' wordBreak='break-all'>
                                                                <Box py={[1.5, 1.5, 1.5, 1.5]} width='100%' letterSpacing='tight' color='blackAlpha.700' fontWeight={['bold', 'bold', 'extrabold', 'black']} fontSize={['11', '11', '12', '14']} textAlign={['start', 'start', 'end', 'end']}>
                                                                    Profile:
                                                                </Box>
                                                            </Th>
                                                            <Th width='100%' px='1px' justifyContent='start' overflow='hidden' textOverflow='ellipsis' wordBreak='break-all'>
                                                                <Box py={[1.5, 1.5, 1.5, 1.5]} width='100%' letterSpacing='tight' color='blackAlpha.700' fontWeight={['bold', 'bold', 'extrabold', 'black']} fontSize={['11', '11', '12', '14']} textAlign={['start', 'start', 'end', 'end']}>
                                                                    Email:
                                                                </Box>
                                                            </Th>
                                                            <Th width='100%' px='1px' justifyContent='start' overflow='hidden' textOverflow='ellipsis' wordBreak='break-all'>
                                                                <Box py={[1.5, 1.5, 1.5, 1.5]} width='100%' letterSpacing='tight' color='blackAlpha.700' fontWeight={['bold', 'bold', 'extrabold', 'black']} fontSize={['11', '11', '12', '14']} textAlign={['start', 'start', 'end', 'end']}>
                                                                    Phone:
                                                                </Box>
                                                            </Th>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody width={['80%', '87%', '71%', '65%']}>
                                                        <Tr display='flex' width='100%' flexDirection='column' >
                                                            <Td width='100%' px='1px' display='flex' justifyContent='start' overflow='hidden' textOverflow='ellipsis' wordBreak='break-all'>
                                                                <Box width={['100%', '100%', '100%']} letterSpacing='tighter' color='blackAlpha.700' fontWeight={['medium', 'semibold', 'medium', 'semibold']} fontSize={['11', '11', '12', '14']} borderLeft={['1px', '1px', '0', '0']} borderBottom={['1px', '1px', '0', '0']} pl={['4px', '4px', '0', '0']} borderColor='purple.300' textAlign='start'>
                                                                    Ekwemadu George Chike
                                                                </Box>
                                                            </Td>
                                                            <Td width='100%' px='1px' display='flex' justifyContent='start' overflow='hidden' textOverflow='ellipsis' wordBreak='break-all'>
                                                                <Box width={['100%', '100%', '100%']} letterSpacing='tighter' color='blackAlpha.700' fontWeight={['medium', 'semibold', 'medium', 'semibold']} fontSize={['11', '11', '12', '14']} borderLeft={['1px', '1px', '0', '0']} borderBottom={['1px', '1px', '0', '0']} pl={['4px', '4px', '0', '0']} borderColor='purple.300' textAlign='start'>
                                                                    Front-end Develpoer
                                                                </Box>
                                                            </Td>
                                                            <Td width='100%' px='1px' display='flex' justifyContent='start' overflow='hidden' textOverflow='ellipsis' wordBreak='break-all'>
                                                                <Box width={['100%', '100%', '100%']} letterSpacing='tighter' color='blackAlpha.700' fontWeight={['medium', 'semibold', 'medium', 'semibold']} fontSize={['11', '11', '12', '14']} borderLeft={['1px', '1px', '0', '0']} borderBottom={['1px', '1px', '0', '0']} pl={['4px', '4px', '0', '0']} borderColor='purple.300' textAlign='start'>
                                                                    gtcekwemadu@gmail.com
                                                                </Box>
                                                            </Td>
                                                            <Td width='100%' px='1px' display='flex' justifyContent='start' overflow='hidden' textOverflow='ellipsis' wordBreak='break-all'>
                                                                <Box width={['100%', '100%', '100%']} letterSpacing='tighter' color='blackAlpha.700' fontWeight={['medium', 'semibold', 'medium', 'semibold']} fontSize={['11', '11', '12', '14']} borderLeft={['1px', '1px', '0', '0']} borderBottom={['1px', '1px', '0', '0']} pl={['4px', '4px', '0', '0']} borderColor='purple.300' textAlign='start'>
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
                                <Box width='100%' mt='5' >
                                    <Box width='100%'>

                                        {/* The skills goes here */}
                                        <h2>
                                            Skills
                                        </h2>
                                        <hr className='w-full text-purple-900 md:py-3 mt-2 text-lg ' />
                                        {/* Line */}
                                        <span>

                                        </span>
                                        {/* </div> */}
                                    </Box>

                                </Box>

                            </Box>
                        </Box>

                        <Box pl='15px' mt={['20', '20', '0', '0']} width={['100%', '100%', '50%', '50%']}>
                            <Box>
                                {/* About me */}
                                <h1 className=' text-2xl md:text-4xl font-semibold'>
                                    About Me
                                </h1>
                                <hr className=' w-16 sm:w-20 md:w-28 text-purple-500 md:py-3 my-2 text-lg border-purple-500 border-t-4 flex-grow' />
                                <Box>
                                    <Text letterSpacing='tight' color='blackAlpha.700' fontWeight={['medium', 'semibold', 'semibold', 'semibold']} fontSize={['13', '13', '13', '16']} textAlign='justify' my='2'>
                                        For more than 5 years now, design has been the central piece of my world. On this fast and mind-blowing journey, I have moved over the years from being a visual designer to a full-time UX/UI thinker and designer.
                                    </Text>
                                    <Text letterSpacing='tight' color='blackAlpha.700' fontWeight={['medium', 'semibold', 'semibold', 'semibold']} fontSize={['13', '13', '13', '16']} textAlign='justify' my='2'>
                                        At the moment, this journey has brought me to Cloud Academy in Mendrisio, Switzerland where I am a full-time Product Designer. In this position, as with freelance, I am working remotely and I have been for approximately two years
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </section>
    )
}

export default AboutMeOne
