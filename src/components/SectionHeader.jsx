import React from 'react'
import { Container, Heading, Button, Flex, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const SectionHeader = ({children, buttontext, buttonhref,size="2xl"}) => {
  return (
    <Container maxW="100%" py={8} mx={"auto"}>
      <Flex 
        align="center" 
        width="100%"
        mb={4}
      >
        <Heading size={size} mr={6}>{children}</Heading>
        
        {buttontext && buttonhref && (
          <Box mr={6}>
            <Link to={buttonhref}>
              <Button colorScheme="blue" size="md">
                {buttontext}
              </Button>
            </Link>
          </Box>
        )}
        
        <Box 
          flex="1" 
          height="2px" 
          bg="gray.200" 
        />
      </Flex>
    </Container>
  )
}

export default SectionHeader