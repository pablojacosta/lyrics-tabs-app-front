import { useEffect } from "react";
import styles from "./App.module.scss";
import "@styles/globals.scss";
import SearchSection from "@components/SearchSection";

const App = () => {
  useEffect(() => {}, []);

  return (
    <div className={styles.app}>
      <h1>LYRICS AND TABS FINDER</h1>
      <SearchSection
        handleInputChange={() => {}}
        onKeyDown={() => {}}
        getData={() => {}}
      />
    </div>
  );
};

export default App;
