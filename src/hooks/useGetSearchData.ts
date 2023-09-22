/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useLyricsStore } from "@store/useLyricsStore";
import { THit } from "types/hit";

const useGetSearchData = () => {
  const { newSearch, setData, data, setReturnedSongs } = useLyricsStore();
  const [isDataLoading, setDataIsLoading] = useState(false);

  useEffect(() => {
    if (!data || isDataLoading) {
      return;
    }

    setReturnedSongs(data.hits.map((hit: THit) => hit.result));

    return () => {
      setReturnedSongs(null);
    };
  }, [data, setReturnedSongs, isDataLoading]);

  const getData = async () => {
    setDataIsLoading(true);

    const options: AxiosRequestConfig<any> = {
      method: "GET",
      url: "http://localhost:3001/songs",
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

  return { getData, isDataLoading };
};

export default useGetSearchData;
