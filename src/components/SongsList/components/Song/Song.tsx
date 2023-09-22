import styles from "./Song.module.scss";

interface ISong {
  title: string;
  url: string;
  artist: string;
  image: string;
  tabsUrl: string;
  getLyrics: (url: string, title: string, artist: string) => void;
}

const Song = ({ title, url, artist, image, tabsUrl, getLyrics }: ISong) => {
  return (
    <div className={styles.song} onClick={() => getLyrics(url, title, artist)}>
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
