const GOOGLE_API_KEY = "AIzaSyAecxUYMA4UroshvWotlBSDxvFmoqDPKT8";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  GOOGLE_API_KEY;
