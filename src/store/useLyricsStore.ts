import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LYRICS_STORE } from "@constants/env";
import { TData } from "types/data";
import { TSong } from "types/song";

interface ILyricsStore {
  newSearch: string | null;
  data: TData | null;
  song: TSong | null;
  lyrics: string | null;
  returnedSongs: TSong[] | null;
  selectedArtist: string | null;
  selectedTitle: string | null;
  showLoader: boolean;
  setNewSearch: (newSearch: string) => void;
  setData: (data: TData) => void;
  setSong: (song: TSong) => void;
  setLyrics: (lyrics: string | null) => void;
  setReturnedSongs: (returnedSongs: TSong[] | null) => void;
  setSelectedArtist: (selectedArtist: string) => void;
  setSelectedTitle: (selectedTitle: string) => void;
  setShowLoader: (showLoader: boolean) => void;
  clearStore: () => void;
}

const initialState = {
  newSearch: null,
  data: null,
  song: null,
  lyrics: null,
  returnedSongs: null,
  selectedArtist: null,
  selectedTitle: null,
  showLoader: false,
};

export const useLyricsStore = create<ILyricsStore>()(
  persist(
    (set) => ({
      ...initialState,
      setNewSearch: (newSearch: string) =>
        set((state) => ({
          ...state,
          newSearch,
        })),
      setData: (data: TData) =>
        set((state) => ({
          ...state,
          data,
        })),
      setSong: (song: TSong) =>
        set((state) => ({
          ...state,
          song,
        })),
      setLyrics: (lyrics: string | null) =>
        set((state) => ({
          ...state,
          lyrics,
        })),
      setReturnedSongs: (returnedSongs: TSong[] | null) =>
        set((state) => ({
          ...state,
          returnedSongs,
        })),
      setSelectedArtist: (selectedArtist: string) =>
        set((state) => ({
          ...state,
          selectedArtist,
        })),
      setSelectedTitle: (selectedTitle: string) =>
        set((state) => ({
          ...state,
          selectedTitle,
        })),
      setShowLoader: (showLoader: boolean) =>
        set((state) => ({
          ...state,
          showLoader,
        })),
      clearStore: () => set(() => ({ ...initialState })),
    }),
    { name: LYRICS_STORE }
  )
);
