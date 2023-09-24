/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useLyricsStore } from "@store/useLyricsStore";
import { THit } from "types/hit";

const useGetSearchData = () => {
  const { newSearch, setData, data, setReturnedSongs, setShowLoader } =
    useLyricsStore();
  const [isDataLoading, setDataIsLoading] = useState(false);

  useEffect(() => {
    if (!data || isDataLoading) {
      setShowLoader(true);
      return;
    }

    setReturnedSongs(data.hits.map((hit: THit) => hit.result));
    setShowLoader(false);

    return () => {
      setReturnedSongs(null);
    };
  }, [data, setReturnedSongs, isDataLoading, setShowLoader]);

  const getData = async () => {
    if (!newSearch) {
      return;
    }

    setDataIsLoading(true);

    const options: AxiosRequestConfig<any> = {
      method: "GET",
      url: "/songs",
      responseType: "text",
      params: { newSearch },
    };

    await axios
      .request(options)
      .then((response: AxiosResponse<any, any>) => {
        setData(JSON.parse(response.data));
      })
      .finally(() => setDataIsLoading(false))
      .catch((err) => console.log(err));

    document.title = `Results for ${newSearch}`;
  };

  return { getData };
};

export default useGetSearchData;
