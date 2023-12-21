const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const clearBtn = document.querySelector('.clear-btn');
const inputEl = document.querySelector('.timer-input');
const tableEl = document.querySelector('.table');

console.log(startBtn, stopBtn, clearBtn, inputEl);

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);
clearBtn.addEventListener('click', onClear);
inputEl.addEventListener('input', onChange);

let timerId;
let interval;

startBtn.disabled = true;
stopBtn.disabled = true;
clearBtn.disabled = true;

function onChange(event) {
  if (!(inputEl.value == 0)) {
    console.log(inputEl.value);
    startBtn.disabled = false;
    interval = inputEl.value;
  } else {
    startBtn.disabled = true;
  }
}

function onStart(event) {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  clearBtn.disabled = false;

  timerId = setInterval(() => {
    for (let i = 0; i < 2; i++) {
      let color = getRandomHexColor();
      if (i % 2 === 0) {
        tableEl.insertAdjacentHTML(
          'beforeend',
          `<tr class="tr-color-1"><td class="hex-code">${color}</td><td class="color" style="background-color: ${color}"></td></tr>`
        );
      } else {
        tableEl.insertAdjacentHTML(
          'beforeend',
          `<tr class="tr-color-2"><td class="hex-code">${color}</td><td class="color" style="background-color: ${color}"></td></tr>`
        );
      }
    }
  }, interval);
}

function onStop(event) {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timerId);
}

function onClear(event) {
  tableEl.innerHTML = '<tr><th>Hex code</th><th>Color</th></tr>';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
