import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

const onTimeupdate = function ({ seconds }) {
  localStorage.setItem(TIME_KEY, seconds);
  console.log(seconds);
};

player.on('timeupdate', throttle(onTimeupdate, 1000));
const savedTime = localStorage.getItem(TIME_KEY);
player.setCurrentTime(savedTime ?? 0);
