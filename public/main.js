const workTimeText = document.getElementById("work-time");
const restTimeText = document.getElementById("rest-time");

const addButtonWork = document.getElementById("add-button-work");
const reduceButtonWork = document.getElementById("reduce-button-work");
const addButtonRest = document.getElementById("add-button-rest");
const reduceButtonRest = document.getElementById("reduce-button-rest");

let workMinutes = 0;
let restMinutes = 0;

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
