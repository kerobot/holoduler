import { useCallback, useState } from "react";
import axios from "axios";

import { Holodule } from "../types/api/holodule";
import { useMessage } from "./useMessage";

export const useHolodules = () => {
    const { showMessage } = useMessage();

    const [loading, setLoading] = useState(false);
    const [holodules, setHolodules] = useState<Array<Holodule>>([]);

    const getHolodules = useCallback((dateString: string) => {
        setLoading(true);
        axios
            .get<Array<Holodule>>(`api/Holodules/${dateString}`)
            .then((res) => setHolodules(res.data))
            .catch(() =>
                showMessage({ title: "スケジュールの取得に失敗しました", status: "error" })
            )
            .finally(() => setLoading(false));
    }, [showMessage]);

    return { getHolodules, loading, holodules };
};
