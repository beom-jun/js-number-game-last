//랜덤번호 지정 -  o
//유저가 번호를 입력한다. 그리고 go라는 버튼 누름 - o
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다! -o
//랜덤번호 < 유저번호 -> down! -o
//랜덤번호 > 유저번호 -> up! -o
//reset버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다. (더이상 추측 불가, 버튼이 잠김)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깎지 않는다.

let computerNum = 0
let playButton = document.getElementById("play-Button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 5
let gameover = false
let chancearea = document.getElementById("chance-area")
let history=[]


playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus",function(){userInput.value=""})


function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답",computerNum)
}

function play(){
   let uservalue = userInput.value

if(uservalue < 1 || uservalue >100){
  resultArea.textContent = "Please Input Number 1~100 !"
  return
}


    if(history.includes(uservalue)){
        resultArea.textContent="Please Input Another Number"
        return
    }
    chances --;
    chancearea.textContent =`COUNT : ${chances}`

   if(uservalue < computerNum){
    resultArea.textContent = "UP !!"

    console.log("UP !!")
   }else if(uservalue > computerNum){
    resultArea.textContent = "DOWN !!"

    console.log("Down !!")
   }else {
    resultArea.textContent = "COLLECT!!"
    console.log("COLLECT!!")
    gameover=true
   }

   history.push(uservalue)

   if(chances < 1){
     gameover =true
   }

   if(gameover ==true){
    playButton.disabled = true
   }
}

function reset() {
    userInput.value = ""
    pickRandomNum()
    
    resultArea.textContent="HERE RESULT"

    
    
    gameEnd = false;
    chances = 5;
    playButton.disabled =false;
    chancearea.textContent =`COUNT : ${chances}`;
    history = [];
}


pickRandomNum()
