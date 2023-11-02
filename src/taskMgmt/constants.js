import 'dotenv/config';

export default {
  adafruitIO: {
    username: process.env.ADAFRUIT_IO_USERNAME,
    key: process.env.ADAFRUIT_IO_KEY,
    feed: process.env.ADAFRUIT_IO_FEEDNAME,
  },
};
