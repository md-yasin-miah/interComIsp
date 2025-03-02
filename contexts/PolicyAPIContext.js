"use client";
import { COLLECTION } from "@/helper/config";
import { DB, getUrl } from "@/helper/functions";
import { createContext, useState } from "react";

export const PolicyAPIContext = createContext();

export const PolicyAPIProvider = ({ children }) => {
    const initial = {
        data: null,
        isLoading: false,
        isError: false,
    }
    const [policy, setPolicy] = useState(initial);

    const getPolicy = async () => {
        setPolicy({ ...initial, isLoading: true });
        DB.collection(COLLECTION.POLICIES).getFullList(
            { filter: `active = true` },
            { requestKey: null },
        ).then((result) => {
            const data = result.map(item => ({
                ...item,
                BTRC_tarrif_url: getUrl(item, 'BTRC_tarrif')
            }));
            setPolicy({ ...initial, data: data?.[0] });
        }).catch((error) => {
            setPolicy({ ...initial, isError: true });
        })
    }

    return (
        <PolicyAPIContext.Provider value={{
            policy,
            getPolicy
        }}>
            {children}
        </PolicyAPIContext.Provider>
    )
}