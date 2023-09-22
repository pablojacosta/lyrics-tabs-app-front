import { TSong } from "types/song";
import styles from "./Song.module.scss";

interface ISong {
  title: string;
  artist: string;
  image: string;
  tabsUrl: string;
  getLyrics: (song: TSong) => void;
  song: TSong;
}

const Song = ({ title, artist, image, tabsUrl, getLyrics, song }: ISong) => {
  return (
    <div className={styles.song} onClick={() => getLyrics(song)}>
      <div className={styles.left}>
        <picture>
          <img src={image} alt="Album" />
        </picture>
        <p>
          {title} ({artist})
        </p>
      </div>
      <a href={tabsUrl} target="_blank" rel="noopener noreferrer">
        <button>Tabs</button>
      </a>
    </div>
  );
};

export default Song;
