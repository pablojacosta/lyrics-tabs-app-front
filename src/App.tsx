import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import styles from "./App.module.scss";
import "@styles/globals.scss";
import SearchSection from "@components/SearchSection";
import SongsList from "@components/SongsList";
import Title from "@components/Title";
import { useLyricsStore } from "@store/useLyricsStore";
import Loader from "@components/shared/Loader";

const App = () => {
  const [input, setInput] = useState("");
  const {
    newSearch,
    setNewSearch,
    setLyrics,
    showLoader,
    setShowLoader,
    clearStore,
    lyrics,
    returnedSongs,
  } = useLyricsStore();
  const fullBg = !lyrics && !returnedSongs;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    clearStore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!input) {
      setShowLoader(false);
      return;
    }

    setNewSearch(input);
    setLyrics(null);
    setInput("");
  }, [input, newSearch, setLyrics, setNewSearch, setShowLoader]);

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      setLyrics(null);
      setNewSearch(input);
      setInput("");
      document.title = `Results for ${newSearch}`;
    }
  };

  return (
    <div className={`${styles.app} ${fullBg ? styles.fullBg : ""}`}>
      <Title />
      <SearchSection
        handleInputChange={handleInputChange}
        onKeyDown={onKeyDown}
      />
      {showLoader && <Loader />}
      <SongsList />
    </div>
  );
};

export default App;
