import { DateTime } from '../../../node_modules/luxon/src/luxon.js';

function myTimer() {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  document.querySelector('.date').innerHTML = date;
}

const timerFunction = () => {
  setInterval(myTimer, 1000);
};

export default timerFunction;