const setofWords = [
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.",
  "McClintock's eye for detail certainly helped narrow the whereabouts of lorem ipsum's origin, however, the “how and when” still remain something of a mystery, with competing theories and timelines.",
];
const msg = document.getElementById("msg");
const typeWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime, endTime;
const playGame = () => {
  let randomNumber = Math.floor(Math.random() * setofWords.length);
  msg.innerText = setofWords[randomNumber];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
};
const endGame = () => {
  let date = new Date();
  endTime = date.getTime();
  let timeTaken = (endTime - startTime) / 1000;
  console.log(timeTaken);
  let totalStr = typeWords.value;
  let wordCount = wordCounter(totalStr);

  let speed = Math.floor((wordCount / timeTaken) * 60);
  let finalMsg = `You Typed ${wordCount} words in ${timeTaken} seconds at a speed of ${speed} words per minute.`;
  finalMsg = finalMsg + compareWords(msg.innerText, totalStr);
  msg.innerText = finalMsg;
};
const wordCounter = (str) => {
  let wordCount = 0;
  let string = str.split(" ");
  wordCount = string.length;
  console.log(wordCount);
  return wordCount;
};
const compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let count = 0;
  words1.forEach(function (word, index) {
    if (word === words2[index]) {
      count++;
    }
  });
  let errorWords = words1.length - count;
  if (count === 1 && errorWords === 1) {
    return `Typed ${count} word correctly and ${errorWords} word in error.`;
  } else if (count === 1 && errorWords === 0) {
    return `Typed ${count} word correctly and ${errorWords} words in error.`;
  } else if (count === 0 && errorWords === 1) {
    return `Typed ${count} words correctly and ${errorWords} word in error.`;
  }

  return `Typed ${count} words correctly and ${errorWords} words in error.`;
};

btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    typeWords.disabled = false;
    playGame();
  } else if (this.innerText == "Done") {
    typeWords.disabled = true;
    btn.innerText = "Start";
    endGame();
    typeWords.value = "";
  }
});
