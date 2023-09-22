import { getTabsUrl } from "@utils/helpers/getTabsUrl";
import styles from "./SongsList.module.scss";
import ChosenSong from "./components/ChosenSong";
import Song from "./components/Song";
import Container from "@components/elements/Container";
import { useLyricsStore } from "@store/useLyricsStore";
import useGetLyrics from "@hooks/useGetLyrics";

const SongsList = () => {
  const { lyrics, returnedSongs, selectedArtist, selectedTitle } =
    useLyricsStore();
  const { getLyrics } = useGetLyrics();
  const showSongsList = !lyrics && returnedSongs;
  const showLyrics = lyrics && selectedArtist && selectedTitle;

  return (
    <Container>
      <div className={styles.songsList}>
        {showSongsList && (
          <ul>
            {returnedSongs.map((song) => (
              <Song
                key={song.id}
                title={song.title}
                artist={song.primary_artist.name}
                image={song.header_image_thumbnail_url}
                tabsUrl={getTabsUrl(song)}
                getLyrics={getLyrics}
                song={song}
              />
            ))}
          </ul>
        )}
        {showLyrics && (
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
