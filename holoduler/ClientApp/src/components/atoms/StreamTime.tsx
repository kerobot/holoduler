import { VFC, memo } from "react";
import { Text } from "@chakra-ui/react";

import { DateHelper } from "../../utils/DateHelper";

type Props = {
    date: Date;
};

export const StreamDate: VFC<Props> = memo((props) => {
    const {
        date
    } = props;

    const today = new Date();
    const timeColor = date.getTime() < today.getTime() ? "#a9a9a9" : "#1e90ff";

    return (
        <Text fontSize="md" as="b" noOfLines={1} color={timeColor}>
            {DateHelper.formatTime(date, ":")}
        </Text>
    );
});
