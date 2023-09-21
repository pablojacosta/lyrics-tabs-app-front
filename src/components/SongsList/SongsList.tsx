import { getTabsUrl } from "@utils/helpers/getTabsUrl";
import styles from "./SongsList.module.scss";
import ChosenSong from "./components/ChosenSong";
import Song from "./components/Song";
import { TSong } from "types/song";

interface ISongsList {
  selectedArtist: string;
  selectedTitle: string;
  lyrics: string | null;
  returnedSongs: TSong[];
  getLyrics: (url: string, title: string, artist: string) => void;
}

const SongsList = ({
  returnedSongs,
  getLyrics,
  selectedArtist,
  selectedTitle,
  lyrics,
}: ISongsList) => {
  return (
    <div className={styles.songsList}>
      {!lyrics ? (
        <ul>
          {returnedSongs.map((song) => (
            <Song
              key={song.id}
              title={song.title}
              url={song.url}
              artist={song.primary_artist.name}
              image={song.header_image_thumbnail_url}
              tabsUrl={getTabsUrl(song)}
              getLyrics={getLyrics}
            />
          ))}
        </ul>
      ) : (
        <ChosenSong
          selectedArtist={selectedArtist}
          selectedTitle={selectedTitle}
          lyrics={lyrics}
        />
      )}
    </div>
  );
};

export default SongsList;
