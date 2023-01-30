import { VFC, memo } from "react";
import { Text, ButtonGroup, Center } from "@chakra-ui/react";

import { PrevButton } from "../atoms/button/PrevButton";
import { NextButton } from "../atoms/button/NextButton";
import { DateHelper } from "../../utils/DateHelper";

type Props = {
    dateState: string;
    onClickPrev: () => void;
    onClickNext: () => void;
};

export const DateControl: VFC<Props> = memo((props) => {
    const {
        dateState,
        onClickPrev,
        onClickNext
    } = props;

    return (
        <ButtonGroup gap='2'>
            <PrevButton onClick={onClickPrev} />
            <Center>
                <Text fontSize='lg'>{DateHelper.dateToString(DateHelper.stringToDate(dateState),"/")}</Text>
            </Center>
            <NextButton onClick={onClickNext} />
        </ButtonGroup>
    );
});
