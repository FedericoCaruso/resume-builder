import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import type { WrapRootElementBrowserArgs } from "gatsby";
import { customTheme } from "./theme";
import { Layout } from "./components";
export const WrapRootElement = ({ element }: Pick<WrapRootElementBrowserArgs, 'element'>) => (
    <ChakraProvider theme={customTheme}>
        <Layout>
            {element}
        </Layout>
    </ChakraProvider>
)