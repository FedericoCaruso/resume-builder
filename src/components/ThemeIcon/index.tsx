import { useColorMode } from '@chakra-ui/react';
import React from 'react'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { GradientIcon } from '../GradientIcon';


export const ThemeIcon: React.FC = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <>
            {
                colorMode === 'dark' ?
                    <GradientIcon>
                        <FaMoon cursor="pointer" size="20px" onClick={toggleColorMode} />
                    </GradientIcon>
                :
                    <GradientIcon>
                        <FaSun cursor="pointer" size="20px" onClick={toggleColorMode} />
                    </GradientIcon>
            }
        </>
    )
}