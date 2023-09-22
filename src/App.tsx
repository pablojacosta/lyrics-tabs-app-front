/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import "@styles/globals.scss";
import SearchSection from "@components/SearchSection";
import SongsList from "@components/SongsList";
import Title from "@components/Title";
import { useLyricsStore } from "@store/useLyricsStore";
import useGetSearchData from "@hooks/useGetSearchData";

const App = () => {
  const [input, setInput] = useState("");
  const { newSearch, setNewSearch, setLyrics } = useLyricsStore();
  const { isDataLoading } = useGetSearchData();
  const showSongsList = !isDataLoading;

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (!input) {
      return;
    }

    setNewSearch(input);
    setLyrics(null);
    setInput("");
  }, [input, newSearch, setLyrics, setNewSearch]);

  const onKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      setLyrics(null);
      setNewSearch(input);
      setInput("");
      document.title = `Results for ${newSearch}`;
    }
  };

  return (
    <div className={styles.app}>
      <Title />
      <SearchSection
        handleInputChange={handleInputChange}
        onKeyDown={onKeyDown}
      />
      {showSongsList && <SongsList />}
    </div>
  );
};

export default App;
