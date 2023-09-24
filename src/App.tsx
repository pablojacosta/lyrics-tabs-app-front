import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import styles from "./App.module.scss";
import "@styles/globals.scss";
import SearchSection from "@components/SearchSection";
import SongsList from "@components/SongsList";
import Title from "@components/Title";
import { useLyricsStore } from "@store/useLyricsStore";
import Loader from "@components/shared/Loader";
import useGetSearchData from "@hooks/useGetSearchData";
import Footer from "@components/shared/Footer";

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
    selectedArtist,
    selectedTitle,
  } = useLyricsStore();
  const { getData } = useGetSearchData();
  const fullBg = !lyrics && !returnedSongs;

  console.log("------------------------------");
  console.log("lyrics", lyrics);
  console.log("selectedArtis", selectedArtist);
  console.log("selectedTitle", selectedTitle);
  console.log("returnedSongs", returnedSongs);
  console.log("showLoader", showLoader);
  console.log("newSearch", newSearch);
  console.log("input", input);
  console.log("------------------------------");

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
    if (e.key === "Enter" || e.key === "NumpadEnter") {
      getData();
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
      <Footer />
    </div>
  );
};

export default App;
