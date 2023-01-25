/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, useState, VFC } from "react";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { DateHelper } from "../../../utils/DateHelper";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
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
        <>
            <Flex
                as="nav"
                bg="teal.500"
                color="gray.50"
                align="center"
                justify="space-between"
                padding={{ base: 3, md: 5 }}
            >
                <Flex
                    align="center"
                    as="a"
                    mr={8}
                    _hover={{ cursor: "pointer" }}
                    onClick={onClickNow}
                >
                    <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
                        ホロジューラー
                    </Heading>
                </Flex>
                <Flex
                    align="center"
                    fontSize="sm"
                    display={{ base: "none", md: "flex" }}
                    flexGrow={2}
                >
                    <Box pr={4}>
                        <Link onClick={onClickPrev}>前日</Link>
                    </Box>
                    <Box>
                        <Link onClick={onClickNext}>翌日</Link>
                    </Box>
                </Flex>
                <MenuIconButton onOpen={onOpen} />
            </Flex>
            <MenuDrawer
                isOpen={isOpen}
                onClose={onClose}
                onClickNow={onClickNow}
                onClickPrev={onClickPrev}
                onClickNext={onClickNext}
            />
        </>
    );
});
