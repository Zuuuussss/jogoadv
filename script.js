// variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = generateRandomNumber()
let xAttempts = 1

//eventos

btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handResetClick)
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    handResetClick()
  }
})

// funções
function handResetClick() {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  xAttempts = 1
}

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
    randomNumber = generateRandomNumber()
  }

  inputNumber.value = ""
  xAttempts++
}

function generateRandomNumber() {
  return Math.round(Math.random() * 10)
}
