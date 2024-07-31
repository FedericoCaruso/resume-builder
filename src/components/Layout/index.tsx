import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import { Footer, Header } from '..';

interface ILayoutProps {
    children: React.ReactNode;
}

export const Layout = ({children}: ILayoutProps) => {
  return (
    <Container as="main" maxW="1200px" minHeight="100vh" color='white' display="flex">
      <Box style={{flex: 1}}>
        <Header />
        {children}
        <Footer />
      </Box>
    </Container>
  )
}
