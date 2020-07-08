const hoursEls = document.querySelectorAll('#hours .number');
// console.log(hoursEls);
const minutesEls = document.querySelectorAll('#minutes .number');
const secondsEls = document.querySelectorAll('#seconds .number');

// 0-9数字
const states = [
  [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13],
  [3, 5, 8, 10, 13],
  [1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13],
  [1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13],
  [1, 3, 4, 5, 6, 7, 8, 10, 13],
  [1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13],
  [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13],
  [1, 2, 3, 5, 8, 10, 13],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13],
];

function getTime() {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  hours = (hours < 10 ? `0${hours}` : hours).toString().split('');
  minutes = (minutes < 10 ? `0${minutes}` : minutes).toString().split('');
  seconds = (seconds < 10 ? `0${seconds}` : seconds).toString().split('');
  //   console.log(hours, minutes, seconds);

  // 设置小时
  displayNumber(hoursEls[0], +hours[0]);
  displayNumber(hoursEls[1], +hours[1]);

  // 设置分钟
  displayNumber(minutesEls[0], +minutes[0]);
  displayNumber(minutesEls[1], +hours[1]);
  // 设置秒数
  displayNumber(secondsEls[0], +seconds[0]);
  displayNumber(secondsEls[1], +seconds[1]);
}

function displayNumber(el, number) {
  const pieces = el.querySelectorAll('.piece');
  //依据state数字模版数组显示/隐藏小方块
  pieces.forEach((piece, index) => {
    if (states[+number].includes(index + 1)) {
      piece.classList.add('show');
    } else {
      piece.classList.remove('show');
    }
  });
}

getTime();
setInterval(getTime, 1000);
