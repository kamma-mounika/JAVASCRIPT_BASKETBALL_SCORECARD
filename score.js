let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtn1 = document.getElementById("home-score-btn-2")
let homeStoreEl =document.getElementById("home-score")
let homeEl = document.getElementById("home-score2")
let homeScore1 = 0
let homeScore2 = 0

function increaseHomeScoreOne(){
    homeScore1 += 1
    homeStoreEl.textContent = homeScore1
}
function increaseHomeScoreTwo(){
    homeScore1 += 2
    homeStoreEl.textContent = homeScore1
}

function increaseHomeScoreThree(){
    homeScore1 += 3
    homeStoreEl.textContent = homeScore1
}

function increaseHomeScore1(){
    homeScore2 += 1
    homeEl.textContent = homeScore2
}
function increaseHomeScore2(){
    homeScore2 += 2
    homeEl.textContent = homeScore2
}
function increaseHomeScore3(){
    homeScore2 += 3
    homeEl.textContent = homeScore2
}