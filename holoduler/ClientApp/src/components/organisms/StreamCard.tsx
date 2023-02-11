import { memo, FC } from "react";
import { Box, Image, Text, Link } from "@chakra-ui/react";

import { Holodule } from "../../types/api/holodule";
import { StreamerHelper } from "../../utils/StreamerHelper";
import { DateHelper } from "../../utils/DateHelper";
import { StreamTime } from "../atoms/StreamTime";

type Props = {
    holodule: Holodule;
    today: Date;
};

export const StreamCard: FC<Props> = memo((props) => {
    const { holodule, today } = props;

    return (
        <Box w="300px" h="220px" bg="white" borderRadius="10px" shadow="md" p={2} _hover={{ opacity: 0.8 }}>
            <Box w='280px' overflow='hidden' textAlign="center">
                <Box display='flex'>
                    <Box w="120px" textAlign="center">
                        <Box fontWeight='semibold' p="1">
                            <StreamTime date={DateHelper.stringToDateTime(holodule.datetime)} today={today} />
                        </Box>
                        <Box>
                            <Link href={StreamerHelper.getChannelUrl(holodule.name)} isExternal>
                                <Image
                                    borderRadius="full"
                                    boxSize="50px"
                                    m="auto"
                                    src={StreamerHelper.getImageUrl(holodule.name)}
                                    alt={holodule.name}/>
                            </Link>
                        </Box>
                        <Box p="1">
                            <Text fontSize="md" as="b" noOfLines={2}>
                                {holodule.name}
                            </Text>
                        </Box>
                    </Box>
                    <Box w="160px">
                        <Link href={holodule.url} isExternal>
                            <Image src={StreamerHelper.getThumbnailUrl(holodule.video_id)} w="100%" />
                        </Link>
                    </Box>
                </Box>
                <Text fontSize="sm" mt="1" noOfLines={3}>
                    {holodule.title}
                </Text>
            </Box>
        </Box>
    );
});
