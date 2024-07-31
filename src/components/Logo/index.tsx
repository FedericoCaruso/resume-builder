import React from 'react';
import {
    Link
} from "@chakra-ui/react";
import { TextGradient } from '..';

export const Logo: React.FC = () => {
  return (
    <Link href='./' _hover={{textDecoration: "none", opacity: .8}} >
        <TextGradient text='Resume Builder' />
    </Link>
  )
}