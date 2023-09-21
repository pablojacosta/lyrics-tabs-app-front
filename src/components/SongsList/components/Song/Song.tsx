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
    <div className={styles.song}>
      <picture>
        <img src={image} alt="Album" />
      </picture>
      <a onClick={() => getLyrics(url, title, artist)}>
        {title} ({artist})
      </a>
      <a href={tabsUrl} target="_blank" rel="noopener noreferrer">
        [Tabs]
      </a>
      <div></div>
    </div>
  );
};

export default Song;
