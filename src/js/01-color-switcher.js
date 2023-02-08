const stop = document.querySelector('[data-stop]');
const start = document.querySelector('[data-start]');

start.addEventListener('click', onStartPress);
stop.addEventListener('click', onStopPress);

const INTERVAL_DURATION = 1000;

function onStartPress(event) {
  bodyColor = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, INTERVAL_DURATION);

  start.disabled = true;
  stop.disabled = false;
}

function onStopPress(event) {
  clearInterval(bodyColor);
  start.disabled = false;
  stop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
