import { FC, memo } from "react";
import { ButtonGroup, Center } from "@chakra-ui/react";

import { PrevButton } from "../atoms/PrevButton";
import { NextButton } from "../atoms/NextButton";
import { StreamDate } from "../atoms/StreamDate";

type Props = {
    date: Date;
    onClickPrev: () => void;
    onClickNext: () => void;
};

export const DateControl: FC<Props> = memo((props) => {
    const {
        date,
        onClickPrev,
        onClickNext
    } = props;

    return (
        <ButtonGroup gap='2'>
            <PrevButton onClick={onClickPrev} />
            <Center><StreamDate date={date} /></Center>
            <NextButton onClick={onClickNext} />
        </ButtonGroup>
    );
});
