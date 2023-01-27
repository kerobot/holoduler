import { memo, VFC } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react";

import { Holodule } from "../../../types/api/holodule";
import { StreamerHelper } from "../../../utils/StreamerHelper";

type Props = {
    holodule: Holodule;
    onClick: (key: string) => void;
};

export const StreamCard: VFC<Props> = memo((props) => {
    const { holodule, onClick } = props;

    return (
        <Box
            w="260px"
            h="260px"
            bg="white"
            borderRadius="10px"
            shadow="md"
            p={4}
            _hover={{ cursor: "pointer", opacity: 0.8 }}
            onClick={() => onClick(holodule.key)}
        >
            <Stack textAlign="center">
                <Image
                    borderRadius="full"
                    boxSize="160px"
                    src={StreamerHelper.getThumbnailUrl(holodule.video_id)}
                    m="auto"
                />
                <Text fontSize="lg" fontWeight="bold">
                    {holodule.name}
                </Text>
                <Text fontSize="sm" color="gray">
                    {holodule.title}
                </Text>
            </Stack>
        </Box>
    );
});
