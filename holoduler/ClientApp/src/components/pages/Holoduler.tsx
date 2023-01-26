import { memo, useEffect, VFC, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";

import { DateHelper } from "../../utils/DateHelper";
import { useHolodules } from "../../hooks/useHolodules";

export const Holoduler: VFC = memo(() => {
    const { date } = useParams();
    const dateString = date || DateHelper.dateToString(new Date());

    const { getHolodules, loading, holodules } = useHolodules();

    useEffect(() => {
        getHolodules(dateString)
    }, [getHolodules, dateString]);

    console.log(holodules);

    return (
        <>
            <h1>ホロジューラー</h1>
            <p>{dateString}</p>

            {loading ? (
                <Center h="100vh">
                    <Spinner color="teal.200" />
                </Center>
            ) : (
                <Wrap p={{ base: 4, md: 10 }}>
                    {
                        holodules.length > 0 ? (
                            holodules.map((holodule) => (
                                <WrapItem key={holodule.key} mx="auto">
                                    {holodule.title}
                                </WrapItem>
                            ))
                        ) : (
                            <p>予定がありません</p>
                        )
                    }
                </Wrap>
            )}
        </>
    );
});
