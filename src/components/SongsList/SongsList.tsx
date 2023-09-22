import { getTabsUrl } from "@utils/helpers/getTabsUrl";
import styles from "./SongsList.module.scss";
import ChosenSong from "./components/ChosenSong";
import Song from "./components/Song";
import { TSong } from "types/song";
import Container from "@components/elements/Container";

interface ISongsList {
  selectedArtist: string;
  selectedTitle: string;
  lyrics: string | null;
  returnedSongs: TSong[] | null;
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
    <Container>
      <div className={styles.songsList}>
        {!lyrics && returnedSongs ? (
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
    </Container>
  );
};

export default SongsList;
