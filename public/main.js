const workTimeText = document.getElementById("work-time");
const restTimeText = document.getElementById("rest-time");
const countdown = document.getElementById("countdown");

const addButtonWork = document.getElementById("add-button-work");
const reduceButtonWork = document.getElementById("reduce-button-work");
const addButtonRest = document.getElementById("add-button-rest");
const reduceButtonRest = document.getElementById("reduce-button-rest");
const startButton = document.getElementById('button-start');

let workMinutes = 0;
let restMinutes = 0;

let remainingTime;

function addWorkTime() {
  workMinutes++;
  setWorkTime();
}

function reduceWorkTime() {
  if (workMinutes <= 0) {
    return;
  }
  workMinutes--;
  setWorkTime();
}

function addRestTime() {
  restMinutes++;
  setRestTime();
}

function reduceRestTime() {
  if (restMinutes <= 0) {
    return;
  }
  restMinutes--;
  setRestTime();
}

function setWorkTime() {
  workTimeText.innerText = `${workMinutes}`;
}

function setRestTime() {
    restTimeText.innerText = `${restMinutes}`
}

function prepTimer() {
  remainingTime = workMinutes * 60; // Initialise with work time
  startTimer(remainingTime)
}

function startTimer(remainingTime) {
  
  let isWorkInterval = true;
  let intervalId;

  intervalId = setInterval(() => {
    // Update countdown display
    countdown.innerText = convertToMinutesAndSeconds(remainingTime);

    remainingTime--;

    if (remainingTime <= 0) {
      // Switch interval
      isWorkInterval = !isWorkInterval;
      remainingTime = isWorkInterval ? workMinutes * 60 : restMinutes * 60;
    }
  }, 1000); // Update every second
}

function convertToMinutesAndSeconds(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}


addButtonWork.addEventListener("click", () => {
  addWorkTime();
});

reduceButtonWork.addEventListener("click", () => {
  reduceWorkTime();
});

addButtonRest.addEventListener("click", () => {
  addRestTime();
});

reduceButtonRest.addEventListener("click", () => {
  reduceRestTime();
});

startButton.addEventListener('click', () => {
  prepTimer();
})