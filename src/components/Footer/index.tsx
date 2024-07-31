import { Box, Text} from '@chakra-ui/react'
import React from 'react'
import { TextGradient } from '../TextGradient'

export const Footer = () => {
  return (
    <Box style={{
        position: "absolute",
        bottom: 0,
        minHeight: 50,
        padding: 5,
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    }}>
        <TextGradient
            text='© CARUSO_SALVATORE_FEDERICO'
            fontSize="xs"
        />
    </Box>
  )
}
