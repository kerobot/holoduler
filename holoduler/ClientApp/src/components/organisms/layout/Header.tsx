import { memo, useCallback, useState, VFC } from "react";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { DateControl } from "../../molecules/DateControl";
import { DateHelper } from "../../../utils/DateHelper";

export const Header: VFC = memo(() => {
    const [dateState, setDateState] = useState(new Date());
    const navigate = useNavigate();

    // 指定した日付を state に保持してページ遷移
    function navigateDate(date: Date) {
        setDateState(date);
        navigate(`/${DateHelper.formatDate(date)}`);
    }

    // 日付を移動するためのメモ化したコールバック関数群
    // 依存配列の要素のいずれかが変化した場合のみメモ化した値を再計算する

    // 当日に移動
    const onClickNow = useCallback(() => {
        navigateDate(new Date());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateState]);

    // 前日に移動
    const onClickPrev = useCallback(() => {
        navigateDate(DateHelper.addDays(dateState, -1));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateState]);

    // 翌日に移動
    const onClickNext = useCallback(() => {
        navigateDate(DateHelper.addDays(dateState, 1));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateState]);

    return (
        <Flex minWidth='max-content' alignItems='center' gap='2' p='3' h="20" w="100%">
            <Box as="a" _hover={{ cursor: "pointer" }} onClick={onClickNow}>
                <Heading size='lg'>HOLODULER</Heading>
            </Box>
            <Spacer />
            <DateControl date={dateState} onClickPrev={onClickPrev} onClickNext={onClickNext}/>
        </Flex>
    );
});
