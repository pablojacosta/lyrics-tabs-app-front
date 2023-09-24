import { useLyricsStore } from "@store/useLyricsStore";
import styles from "./GoBackButton.module.scss";
import IconBxArrowBack from "@components/elements/Icons/ArrowIcon/ArrowIcon";

const GoBackButton = () => {
  const { setLyrics, setSelectedArtist, setSelectedTitle, setShowLoader } =
    useLyricsStore();

  const handleOnClick = () => {
    setLyrics(null);
    setSelectedArtist(null);
    setSelectedTitle(null);
    setShowLoader(false);
  };

  return (
    <div className={styles.goBackButton}>
      <button onClick={handleOnClick}>
        <span>
          <IconBxArrowBack />
        </span>
        Go Back
      </button>
    </div>
  );
};

export default GoBackButton;
