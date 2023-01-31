import { memo, VFC } from "react";
import { Box, Image, Stack, Text, Avatar, Link } from "@chakra-ui/react";

import { Holodule } from "../../../types/api/holodule";
import { StreamerHelper } from "../../../utils/StreamerHelper";
import { DateHelper } from "../../../utils/DateHelper";

type Props = {
    holodule: Holodule;
};

export const StreamCard: VFC<Props> = memo((props) => {
    const { holodule } = props;

    return (
        <Box w="290px" h="200px" bg="white" borderRadius="10px" shadow="md" p={2} _hover={{ opacity: 0.8 }}>
            <Stack textAlign="center">
                <Box w='270px' overflow='hidden'>
                    <Box display='flex'>
                        <Box w="120px" textAlign="center">
                            <Box fontWeight='semibold' p="1">
                                {DateHelper.formatTime(DateHelper.stringToDateTime(holodule.datetime))}
                            </Box>
                            <Box>
                                <Link href={StreamerHelper.getChannelUrl(holodule.name)} isExternal>
                                    <Avatar name={holodule.name} src={StreamerHelper.getImageUrl(holodule.name)} />
                                </Link>
                            </Box>
                            <Box fontWeight='semibold' p="1">
                                {holodule.name}
                            </Box>
                        </Box>
                        <Box w="150px">
                            <Link href={holodule.url} isExternal>
                                <Image src={StreamerHelper.getThumbnailUrl(holodule.video_id)} w="100%" />
                            </Link>
                        </Box>
                    </Box>
                    <Text fontSize="sm" color="black" mt="1" noOfLines={3}>
                        {holodule.title}
                    </Text>
                </Box>
            </Stack>
        </Box>
    );
});
