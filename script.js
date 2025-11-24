const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
let intervalID;
let totalSeconds = 0;
let totalMinutes = 0;
const addSeconds = () => {
  totalSeconds += 1;
  if (totalSeconds === 60) {
    totalMinutes += 1;
    totalSeconds = 0;
  }
  minutes.textContent = String(totalMinutes).padStart(2, "0");
  seconds.textContent = String(totalSeconds).padStart(2, "0");
};

const start = () => {
  if (intervalID) clearInterval(intervalID);
  intervalID = setInterval(addSeconds, 1000);
};

const reset = () => {
  totalSeconds = 0;
  totalMinutes = 0;
  seconds.textContent = "00";
  minutes.textContent = "00";
};

const stop = () => {
  clearInterval(intervalID);
};

//=============LISTENERS============
startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);
