import React from "react";
import analytics from "../domain/Analytics";

export default function useGoogleAnalytics() {
  React.useEffect(() => {
    analytics.init()
  }, [])

  React.useEffect(() => {
    const currentPath = '/'
    analytics.sendPageview(currentPath)
  }, [])
}
