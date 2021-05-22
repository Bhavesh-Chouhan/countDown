let minutes = 10;
let time = minutes * 60;

const countDownEl = document.getElementById("para");

const countDown = () => {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  //if remainder is less than 10 seconds means 9 , 8  .. then add o before
  //remainder sot that 0 is displayed before single 9,8,..
  countDownEl.innerHTML = `${minutes} : ${seconds}`;
  time--;
};
setInterval(countDown, 1000);
