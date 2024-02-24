const workTimeText = document.getElementById('work-time');

const addButton = document.getElementById('add-button');
const reduceButton = document.getElementById('reduce-button');

let workMinutes = 0;
let workSeconds = 0;

function addWorkTime() {
    if (workSeconds !== 59) {
        workSeconds += 1;
    } else {
        workSeconds = 0;
        workMinutes += 1;
    }
}

function setWorkTime() {
    workTimeText.innerText = `${workMinutes}:${workSeconds}`;
}

addButton.addEventListener('click', () => {
    addWorkTime();
    setWorkTime();
})