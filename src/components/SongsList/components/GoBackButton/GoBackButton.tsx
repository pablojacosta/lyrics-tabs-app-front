import { useLyricsStore } from "@store/useLyricsStore";
import styles from "./GoBackButton.module.scss";
import IconBxArrowBack from "@components/elements/Icons/ArrowIcon/ArrowIcon";

const GoBackButton = () => {
  const { setNewSearch, setLyrics } = useLyricsStore();

  const handleOnClick = () => {
    setNewSearch("");
    setLyrics(null);
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
