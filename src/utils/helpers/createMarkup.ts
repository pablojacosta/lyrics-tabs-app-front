export const createMarkup = (
  selectedTitle: string,
  selectedArtist: string,
  lyrics: string
) => {
  return {
    __html:
      `<h2><u>${selectedTitle} (${selectedArtist})</u></h2><br>` +
      lyrics +
      "<br><br>",
  };
};
