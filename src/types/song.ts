export type TSong = {
  id: number;
  title: string;
  url: string;
  primary_artist: {
    name: string;
  };
  header_image_thumbnail_url: string;
};
