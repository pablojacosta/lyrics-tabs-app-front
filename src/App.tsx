import { useEffect } from "react";
import styles from "./App.module.scss";
import "@styles/globals.scss";

const App = () => {

  useEffect(() => {
  }, [
  ]);

  return (
    <div className={styles.app}>
      <h1>LYRICS AND TABS FINDER APP</h1>
    </div>
  );
};

export default App;
