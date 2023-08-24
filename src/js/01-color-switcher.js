const bodyColor = document.querySelector('body');
const btnSTART = document.querySelector('[data-start]');
const btnSTOP = document.querySelector('[data-stop]');
let intervalId = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
btnSTOP.setAttribute('disabled', '');

btnSTART.addEventListener('click', element => {
  element.target.setAttribute('disabled', true);
  btnSTOP.removeAttribute('disabled');

  intervalId = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

btnSTOP.addEventListener('click', element => {
  element.target.setAttribute('disabled', true);
  btnSTART.removeAttribute('disabled');

  clearInterval(intervalId);
});
