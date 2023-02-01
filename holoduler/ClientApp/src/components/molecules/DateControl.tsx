import { VFC, memo } from "react";
import { Text, ButtonGroup, Center } from "@chakra-ui/react";

import { PrevButton } from "../atoms/button/PrevButton";
import { NextButton } from "../atoms/button/NextButton";
import { DateHelper } from "../../utils/DateHelper";

type Props = {
    date: Date;
    onClickPrev: () => void;
    onClickNext: () => void;
};

export const DateControl: VFC<Props> = memo((props) => {
    const {
        date,
        onClickPrev,
        onClickNext
    } = props;

    return (
        <ButtonGroup gap='2'>
            <PrevButton onClick={onClickPrev} />
            <Center>
                <Text fontSize='xl' as='b'>{DateHelper.formatDate(date,"/")}</Text>
            </Center>
            <NextButton onClick={onClickNext} />
        </ButtonGroup>
    );
});
