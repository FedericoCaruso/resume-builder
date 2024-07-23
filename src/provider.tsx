import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import type { WrapRootElementBrowserArgs } from "gatsby";
import { customTheme } from "./theme";
export const WrapRootElement = ({ element }: Pick<WrapRootElementBrowserArgs, 'element'>) => (
    <ChakraProvider theme={customTheme}>
        {element}
    </ChakraProvider>
)