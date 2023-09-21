import { TSong } from "types/song";

export const getTabsUrl = (song: TSong) => {
  return `http://www.songsterr.com/a/wa/bestMatchForQueryString?s={${song.title}}&a={${song.primary_artist.name}}`;
};
