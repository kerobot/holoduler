import { memo, ReactNode, VFC } from "react";
import { Flex } from "@chakra-ui/react";

import { Header } from "../organisms/layout/Header";

type Props = {
    children: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
    const { children } = props;
    return (
        <>
            <Flex as="header" position="fixed" backgroundColor="white" w="100%" top="0px">
                <Header />
            </Flex>
            <Flex as="main" mt="20" p="3">
                {children}
            </Flex>
        </>
    );
});
