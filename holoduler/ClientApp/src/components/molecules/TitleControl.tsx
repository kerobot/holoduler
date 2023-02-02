import { VFC, memo } from "react";
import { Box, Heading } from "@chakra-ui/react";

type Props = {
    onClickToday: () => void;
};

export const TitleControl: VFC<Props> = memo((props) => {
    const { onClickToday } = props;

    return (
        <Box as="a" _hover={{ cursor: "pointer" }} onClick={onClickToday}>
            <Heading size='lg'>HOLODULER</Heading>
        </Box>
    );
});
