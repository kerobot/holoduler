import { useCallback, useState } from "react";
import axios from "axios";

import { Schedules } from "../types/api/schedules";
import { useMessage } from "./useMessage";

// Web API を呼んで配信予定を取得するカスタムフック
export const useSchedules = () => {
    const { showMessage } = useMessage();

    const [loading, setLoading] = useState(false);
    const [schedules, setSchedules] = useState<Schedules>();

    const getSchedules = useCallback((dateString: string) => {
        setLoading(true);
        axiosClient
            .get<Schedules>(`api/Holodules/${dateString}`)
            .then((res) =>
                setSchedules(res.data)
            ).catch(() =>
                showMessage({ title: "スケジュールの取得に失敗しました", status: "error" })
            )
            .finally(() => setLoading(false));
    }, [showMessage]);

    return { getSchedules, loading, schedules };
};

function dateParseChallenge(key: string, val: any) {
    if (typeof val === "string") {
        const time = Date.parse(val);
        if (!Number.isNaN(time)) {
            return new Date(time);
        }
    }
    return val;
}

const axiosClient = axios.create({
    transformResponse: (data: any) => {
        if (typeof data === "string") {
            try {
                return JSON.parse(data, dateParseChallenge);
            } catch (e) {
                // Ignore error
            }
        }
        return data;
    }
});