import { useEffect } from "react";
import styles from "./ChosenSong.module.scss";
import { createMarkup } from "@utils/helpers/createMarkup";

interface IChosenSong {
  selectedTitle: string;
  selectedArtist: string;
  lyrics: string;
}

const ChosenSong = ({ selectedTitle, selectedArtist, lyrics }: IChosenSong) => {
  useEffect(() => {
    if (lyrics) {
      document.title = `${selectedArtist}'s ${selectedTitle} Lyrics`;
    }
  }, [lyrics, selectedArtist, selectedTitle]);

  return (
    <div className={styles.chosenSong}>
      <a href="">
        --- Tabs for {selectedArtist}'s {selectedTitle} ---
      </a>
      <div className={styles.lyrics}>
        <div
          dangerouslySetInnerHTML={createMarkup(
            selectedTitle,
            selectedArtist,
            lyrics
          )}
        />
      </div>
    </div>
  );
};

export default ChosenSong;
