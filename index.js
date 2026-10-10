const numberDisplay = document.getElementById("numberDisplay");
const progressBar = document.getElementById('progress-bar');
const restartBt = document.getElementById("restartBt");
const submitBt = document.getElementById("submitBt");
const startBt = document.getElementById("startBt");
const board1 = document.getElementById("board1");
const board2 = document.getElementById("board2");
const board3 = document.getElementById("board3");
const board4 = document.getElementById("board4");
const nextBt = document.getElementById("nextBt");
const score = document.getElementById("score");
const text2 = document.getElementById("p4");
const text1 = document.getElementById("p2");
let digitCount = 0;
let guessNumber = 0;
let number = 0;
let max = 10;
let min = 1;

console.log(min);
console.log(max);



function startLoading() {
  progressBar.style.transition = 'none';
  progressBar.style.width = '0%';
  
  void progressBar.offsetWidth; 
  
  progressBar.style.transition = ''; 
  requestAnimationFrame(() => {
    progressBar.style.width = '100%';
  });
}

function start(){
  board1.style.display = "none"
  board2.style.display = "flex"
  progressBar.style.display = "block"
  number = Math.floor(Math.random() * (max - min))+ min;
  startLoading();
  console.log(number);
  numberDisplay.textContent = number
  setTimeout(() => {
    board2.style.display = "none"
    board3.style.display = "flex"
  }, 7000);  
}

function compare(){
  max *= 10
  min *= 10
  console.log(min);
  console.log(max);
  guessNumber = document.getElementById("input").value
  if(guessNumber == 0){
    return;
  }
  else if(guessNumber == number){
    board3.style.display = "none"
    board4.style.display = "flex"
    text1.textContent = number
    text2.textContent = guessNumber
    text2.style.color = "green"
    digitCount++
  }
  else{
    board3.style.display = "none"
    board4.style.display = "flex"
    text1.textContent = number
    text2.style.color = "red"
    text2.textContent = guessNumber
    nextBt.style.display = "none"
    score.style.display = "block"
    score.textContent = `You got ${digitCount} digits!`
  }
}

function next(){
  if(guessNumber == number){
    board4.style.display = "none"
    progressBar.style.display = "block"
    start()
    document.getElementById("input").value = ""
  }
}

function restart(){
  console.log("restarted");
  board4.style.display = "none"
  board1.style.display = "flex"
  max = 10
  min = 1
  digitCount = 0
  number = 0
  guessNumber = 0
  document.getElementById("input").value = ""
  nextBt.style.display = "block"
  score.style.display = "none"
}

startBt.onclick = function(){
  start()
}

submitBt.onclick = function(){
  compare()
}

nextBt.onclick = function(){
  next()
}

restartBt.onclick = function(){
  restart()
}