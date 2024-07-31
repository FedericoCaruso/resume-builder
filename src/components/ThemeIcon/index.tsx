import { useColorMode } from '@chakra-ui/react';
import React from 'react'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";


export const ThemeIcon: React.FC = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <>
            {
                colorMode === 'dark' ?
                    <FaMoon cursor="pointer" size="20px" color='#a0aec0' onClick={toggleColorMode} />
                :
                    <FaSun cursor="pointer" size="20px" color='#a0aec0' onClick={toggleColorMode} />
            }
        </>
    )
}