import ReactGA from "react-ga";

const TRACKING_ID : string = "UA-240800186-1";
ReactGA.initialize(TRACKING_ID);

const init = () : void => {
    const isDev: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
    ReactGA.initialize(TRACKING_ID, { debug: isDev })
};

const sendPageview = (path : string) : void => {
    ReactGA.set({ page: path })
    ReactGA.pageview(path)
};

const analytics = {
    init: init,
    sendPageview: sendPageview
}
export default analytics;