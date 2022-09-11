import CoinForm from "./component/Form/CoinForm";
import {useEffect} from "react";
import styles from "./App.module.css";

import ReactGA from 'react-ga';

function App() {

    const TRACKING_ID = "UA-240800186-1";
    ReactGA.initialize(TRACKING_ID);

    useEffect(() => {
        document.title = "DnD Coin Splitter";
    }, []);

    return (
    <main>
        <article className={styles.article}>
            <h1 className={styles.title}><abbr title="Dungeons and Dragons">DnD</abbr> Coin Splitter</h1>
            <CoinForm></CoinForm>
        </article>
    </main>
  );
}

export default App;
