import CoinForm from "./component/Form/CoinForm";
import { useEffect } from "react";
import styles from "./App.module.css";
import Footer from "./component/Footer/Footer";
import useGoogleAnalytics from "./hooks/useAnalytics";

function App() {
  useEffect(() => {
    document.title = 'Looters'
  }, [])

  useGoogleAnalytics()

  return (
    <main>
      <article className={styles.article}>
        <h1 className={styles.title}>Looters</h1>
        <p className={styles.description}>Divide your loot evenly between your players.</p>
        <CoinForm></CoinForm>
      </article>
      <Footer />
    </main>
  )
}

export default App
