import React from "react"
import analytics from "../service/Analytics";

export default function useGoogleAnalytics() {

    React.useEffect(() => {
        analytics.init();
    }, [])

    React.useEffect(() => {
        const currentPath = "/";
        analytics.sendPageview(currentPath);
    }, [])

}