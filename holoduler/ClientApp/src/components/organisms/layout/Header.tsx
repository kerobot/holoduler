/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, useState, VFC } from "react";
import { Box, Flex, Heading, ButtonGroup, Button, Spacer, Text, Center } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";

import { DateHelper } from "../../../utils/DateHelper";

export const Header: VFC = memo(() => {
    const [dateState, setDateState] = useState(DateHelper.dateToString(new Date()));

    const navigate = useNavigate();

    // 指定した日付を state に保持してページ遷移
    const navigateDate = (dateString: string) => {
        setDateState(dateString);
        navigate(`/${dateString}`);
    };

    // 日付を移動するためのメモ化したコールバック関数群
    // 依存配列の要素のいずれかが変化した場合のみメモ化した値を再計算する

    // 当日に移動
    const onClickNow = useCallback(() => {
        navigateDate(DateHelper.dateToString(new Date()));
    }, [dateState]);

    // 前日に移動
    const onClickPrev = useCallback(() => {
        navigateDate(DateHelper.getPrevStringDate(dateState));
    }, [dateState]); // 依存配列には関数内で利用する日付文字列を指定

    // 翌日に移動
    const onClickNext = useCallback(() => {
        navigateDate(DateHelper.getNextStringDate(dateState));
    }, [dateState]); // 依存配列には関数内で利用する日付文字列を指定

    return (
        <Flex minWidth='max-content' alignItems='center' gap='2' p='3' h="20" w="100%">
            <Box as="a" _hover={{ cursor: "pointer" }} onClick={onClickNow}>
                <Heading size='lg'>HOLODULER</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Button leftIcon={<ArrowLeftIcon />} colorScheme='facebook' variant='outline' onClick={onClickPrev}>Prev</Button>
                <Center>
                    <Text fontSize='lg'>{DateHelper.dateToString(DateHelper.stringToDate(dateState),"/")}</Text>
                </Center>
                <Button rightIcon={<ArrowRightIcon />} colorScheme='facebook' variant='outline' onClick={onClickNext}>Next</Button>
            </ButtonGroup>
        </Flex>
    );
});
