import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Logo, ThemeIcon } from '..'

export const Header = () => {
  return (
    <Flex color='white' sx={{height: 50, alignItems: "center", justifyContent: "space-between"}}>
        <Logo />
        <ThemeIcon />
    </Flex>
  )
}
