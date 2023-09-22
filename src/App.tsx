/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import "@styles/globals.scss";
import SearchSection from "@components/SearchSection";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import SongsList from "@components/SongsList";
import { TData } from "types/data";
import { THit } from "types/hit";
import { TSong } from "types/song";

const App = () => {
  const [input, setInput] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [data, setData] = useState<TData | null>(null);
  const [returnedSongs, setReturnedSongs] = useState<TSong[] | null>(null);
  const [lyrics, setLyrics] = useState(null);
  const [selectedArtist, setSelectedArtist] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [loading, setLoading] = useState(false);

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
  }, [input, newSearch]);

  useEffect(() => {
    if (!data) {
      return;
    }

    setReturnedSongs(data.hits.map((hit: THit) => hit.result));
  }, [data]);

  const getData = () => {
    setLoading(true);

    const options: AxiosRequestConfig<any> = {
      method: "GET",
      url: "http://localhost:3001/songs",
      responseType: "text",
      params: { newSearch },
    };

    axios
      .request(options)
      .then((response: any) => {
        setData(JSON.parse(response.data));
      })
      .finally(() => setLoading(false))
      .catch((err) => console.log(err));

    document.title = `Results for ${newSearch}`;
  };

  const onKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      setLyrics(null);
      setNewSearch(input);
      setInput("");
      document.title = `Results for ${newSearch}`;
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
        handleInputChange={handleInputChange}
        onKeyDown={onKeyDown}
        getData={getData}
      />
      {!loading && (
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
