import React from 'react'
import { Text, TextProps } from '@chakra-ui/react'

interface ITextGradientProps extends TextProps {
    text: string;
}

export const TextGradient = ({text, fontSize, bgGradient, fontWeight}: ITextGradientProps) => {
  return (
    <Text 
        bgGradient={bgGradient ?? 'linear(to-l, #7928CA, #FF0080)'}
        bgClip='text'
        fontSize={fontSize ?? '2xl'}
        fontWeight={fontWeight ?? 'extrabold'}
    >
        {text}
    </Text>
  )
}
