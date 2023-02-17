import { memo, useEffect, FC, useRef } from "react";
import { useParams } from "react-router-dom";
import { Center, Spinner, Wrap, WrapItem, Text } from "@chakra-ui/react";

import { DateHelper } from "../../utils/DateHelper";
import { StreamCard } from "../organisms/StreamCard";
import { useHolodules } from "../../hooks/useHolodules";

// 配信予定ページコンポーネント
export const Holoduler: VFC = memo(() => {
    const { date } = useParams();
    const { getHolodules, loading, holodules } = useHolodules();

    const today = new Date();
    const dateString = date || DateHelper.formatDate(today);
    const didMountRef = useRef(false);

    useEffect(() => {
        // strict モード対策
        if (process.env.NODE_ENV === "development") {
            if (didMountRef.current) {
                didMountRef.current = false;
                return;
            }
        }
        getHolodules(dateString)
    }, [getHolodules, dateString]);

    return (
        <>
            {loading ? (
                <Center h='100px' w="100%">
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl' />
                </Center>
            ) : (
                <Wrap>
                    {
                        holodules.length > 0 ? (
                            holodules.map((holodule) => (
                                <WrapItem key={holodule.key} mx="auto">
                                    <StreamCard holodule={holodule} today={today} />
                                </WrapItem>
                            ))
                        ) : (
                            <Text fontSize="md" as="b">予定がありません</Text>
                        )
                    }
                </Wrap>
            )}
        </>
    );
});
