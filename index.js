let Home = document.getElementById("home")
let Guest = document.getElementById("guest")
let scoreHome = 0
let scoreGuest = 0

function add1_h() {
    scoreHome += 1
    Home.textContent = scoreHome
}

function add2_h() {
    scoreHome += 2
    Home.textContent = scoreHome
}

function add3_h() {
    scoreHome += 3
    Home.textContent = scoreHome
}

function add1_g() {
    scoreGuest += 1
    Guest.textContent = scoreGuest
}

function add2_g() {
    scoreGuest += 2
    Guest.textContent = scoreGuest
}

function add3_g() {
    scoreGuest += 3
    Guest.textContent = scoreGuest
}

function reset() {
    scoreGuest = 0
    scoreHome = 0
    Guest.textContent = scoreGuest
    Home.textContent = scoreHome
}