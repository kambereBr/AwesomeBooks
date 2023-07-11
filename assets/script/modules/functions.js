function myTimer() {
  const date = new Date().toUTCString();
  document.querySelector('.date').innerHTML = date;
}

const timerFunction = () => {
  setInterval(myTimer, 1000);
};

export default timerFunction;