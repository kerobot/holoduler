import { useParams } from "react-router-dom";
import { memo, VFC } from "react";

import { DateHelper } from "../../utils/DateHelper";

export const Holoduler: VFC = memo(() => {
    const { date } = useParams();
    const dateString = date || DateHelper.dateToString(new Date());

    return (
        <div>
            <h1>ホロジューラー</h1>
            <p>パラメーターは {dateString } です</p>
        </div>
    );
});
