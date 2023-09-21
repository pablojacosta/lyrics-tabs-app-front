/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import "@styles/globals.scss";
import SearchSection from "@components/SearchSection";
import { api_key } from "@constants/env";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import SongsList from "@components/SongsList";

const App = () => {
  const [update, setUpdate] = useState(false);
  const [input, setInput] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [returnedSongs, setReturnedSongs] = useState([]);
  const [lyrics, setLyrics] = useState(null);
  const [selectedArtist, setSelectedArtist] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let didCancel = false;
    console.log("UPDATE");

    if (!newSearch) {
      return;
    }

    if (!didCancel) {
      const options = {
        method: "GET",
        url: "https://genius.p.rapidapi.com/search",
        params: { q: `${newSearch}` },
        headers: {
          "x-rapidapi-host": "genius.p.rapidapi.com",
          "x-rapidapi-key": api_key,
        },
      };

      axios
        .request(options)
        .then((response: AxiosResponse<any, any>) => {
          setReturnedSongs(
            response.data.response.hits.map((hit: any) => hit.result)
          );
          setLoading(true);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    return () => {
      didCancel = true;
      setLoading(false);
    };
  }, [newSearch, update]);

  const getData = () => {
    setLyrics(null);
    setUpdate((prevState) => !prevState);
    setNewSearch(input);
    setInput("");
    document.title = `Results for ${input}`;
  };

  const onKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      setLyrics(null);
      setUpdate((prevState) => !prevState);
      setNewSearch(input);
      setInput("");
      document.title = `Results for ${input}`;
    }
  };

  const getLyrics = (url: string, title: string, artist: string) => {
    setSelectedArtist(artist);
    setSelectedTitle(title);

    const options: AxiosRequestConfig<any> = {
      method: "GET",
      url: "http://localhost:3001/lyrics",
      responseType: "text",
      params: { passedUrl: url },
    };

    axios
      .request(options)
      .then((response: AxiosResponse<any, any>) => {
        setLyrics(response.data);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.app}>
      <h1>LYRICS AND TABS FINDER</h1>
      <SearchSection
        handleInputChange={() => {}}
        onKeyDown={onKeyDown}
        getData={getData}
      />
      {!loading && lyrics && (
        <SongsList
          selectedArtist={selectedArtist}
          selectedTitle={selectedTitle}
          lyrics={lyrics}
          returnedSongs={returnedSongs}
          getLyrics={getLyrics}
        />
      )}
    </div>
  );
};

export default App;
