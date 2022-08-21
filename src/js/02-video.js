import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeUpdate = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
  console.log(seconds);
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));
const savedSeconds = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(savedSeconds);

