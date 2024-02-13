const bananaHeight = 20 // cm
const bananaWeight = 0.125 // kg
const fact = document.getElementById("factPara")

const htbButton = document.getElementById("htbButton") // Height to Banana
const htbInput = document.getElementById("htbInput")
const htbResult = document.getElementById("htbResult")
htbButton.onclick = () => { // cm to banan
    const result = Number(htbInput.value) / bananaHeight
    
    htbResult.innerText = `= ${result} bananas`;
}

const bthButton = document.getElementById("bthButton") // Banana to Height
const bthInput = document.getElementById("bthInput")
const bthResult = document.getElementById("bthResult")
bthButton.onclick = () => { // banan to cm
    const result = Number(bthInput.value) * bananaHeight

    bthResult.innerText = `= ${result} cm`;
}

const wtbButton = document.getElementById("wtbButton") // Weight to Banana
const wtbResult = document.getElementById("wtbResult")
const wtbInput = document.getElementById("wtbInput")
wtbButton.onclick = () => { // kg to banan
    const result = Number(wtbInput.value) / bananaWeight

    wtbResult.innerText = `= ${result} bananas`;
}

const btwButton = document.getElementById("btwButton") // Banana to Weight
const btwInput = document.getElementById("btwInput")
const btwResult = document.getElementById("btwResult")
btwButton.onclick = () => { // banan to kg
    const result = (Number(btwInput.value) * bananaWeight) 

    btwResult.innerText = `= ${result} kg`;
}

fact.innerText = factList[Math.floor(Math.random() * factList.length)]