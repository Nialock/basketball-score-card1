let count = 0
let count2 = 0

let homeEl = document.getElementById("home-score")
let awayEl = document.getElementById("away-score")


function home1(){
    count = count + 1
    homeEl.textContent = count
}

function home2(){
    count = count + 2
    homeEl.textContent = count
}

function home3(){
    count = count + 3
    homeEl.textContent = count
}


function away1(){
    count2 = count2 + 1
    awayEl.textContent = count2
}

function away2(){
    count2 = count2 + 2
    awayEl.textContent = count2
}

function away3(){
    count2 = count2 + 3
    awayEl.textContent = count2
}

function newgame(){
    count = 0
    count2 = 0
    homeEl.textContent = 0
    awayEl.textContent = 0
    
}