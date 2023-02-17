import { memo, useCallback, useState, FC } from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { TitleControl } from "../molecules/TitleControl";
import { DateControl } from "../molecules/DateControl";
import { DateHelper } from "../../utils/DateHelper";

// ヘッダーコンポーネント
export const Header: FC = memo(() => {
    const [dateState, setDateState] = useState(new Date());
    const navigate = useNavigate();

    // 指定した日付を state に保持してページ遷移
    function navigateDate(date: Date) {
        setDateState(date);
        navigate(`/${DateHelper.formatDate(date)}`);
    }

    // TODO: useCallback から呼び出した関数内で state を更新した場合の依存関係の指定について再考

    // 当日に移動
    const onClickToday = useCallback(() => {
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
            <TitleControl onClickToday={onClickToday} />
            <Spacer />
            <DateControl date={dateState} onClickPrev={onClickPrev} onClickNext={onClickNext}/>
        </Flex>
    );
});
