import { VFC, memo } from "react";
import { Text } from "@chakra-ui/react";

import { DateHelper } from "../../utils/DateHelper";

type Props = {
    date: Date;
};

export const StreamTime: VFC<Props> = memo((props) => {
    const { date } = props;

    const today = new Date();
    const timeColor = date.getTime() < today.getTime() ? "gray.500" : "blue.500";

    return (
        <Text fontSize="md" as="b" noOfLines={1} color={timeColor}>
            {DateHelper.formatTime(date, ":")}
        </Text>
    );
});
