/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useLyricsStore } from "@store/useLyricsStore";
import { TSong } from "types/song";

const useGetLyrics = () => {
  const {
    setSelectedArtist,
    setSelectedTitle,
    setLyrics,
    setShowLoader,
    lyrics,
  } = useLyricsStore();
  const [isLyricsLoading, setIsLyricsLoading] = useState(false);

  useEffect(() => {
    if (!lyrics || isLyricsLoading) {
      setShowLoader(true);
      return;
    }

    setShowLoader(false);
  }, [isLyricsLoading, lyrics, setShowLoader]);

  const getLyrics = async (song: TSong) => {
    const { url, title, primary_artist } = song;

    setIsLyricsLoading(true);
    setSelectedArtist(primary_artist.name);
    setSelectedTitle(title);

    const options: AxiosRequestConfig<any> = {
      method: "GET",
      url: "https://lyrics-and-tabs-finder.onrender.com/lyrics",
      responseType: "text",
      params: { passedUrl: url },
    };

    await axios
      .request(options)
      .then((response: AxiosResponse<any, any>) => {
        setLyrics(response.data);
      })
      .finally(() => setIsLyricsLoading(false))
      .catch((err) => console.log(err));
  };

  return { getLyrics, isLyricsLoading };
};

export default useGetLyrics;
