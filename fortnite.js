let correctCount = 0;
let incorrectCount = 0;
let powerThreshold = 50;
let powerMultiplier = 1;
let superPowerThreshold = 150;
let superMultiplier = 0;
let superMultiTime = 3000;
let clickInterval;
document.getElementById("displayCount").innerHTML = correctCount;
document.getElementById("powerCount").innerHTML = powerMultiplier;
document.getElementById("powerThresh").innerHTML = powerThreshold;
document.getElementById("superpwrCount").innerHTML = superMultiplier;
document.getElementById("superThresh").innerHTML = superPowerThreshold;
document.getElementById("superTime").innerHTML = superMultiTime;
function superpowerUsed() {
    console.log("Superpower used!"); // Log that the function is triggered
    clickInterval = setInterval(function () {

        correctCount += superMultiplier;
        document.getElementById("displayCount").innerHTML = correctCount; // Update display
        console.log("Count updated:", correctCount); // Log the count update
    }, superMultiTime); // Add clicks every 3 seconds
}

function correctPressed() {
    correctCount += 1*powerMultiplier;
    
    document.getElementById("displayCount").innerHTML = correctCount;
    document.getElementById("powerCount").innerHTML = powerMultiplier;
    document.getElementById("powerThresh").innerHTML = powerThreshold;
    if (correctCount >= powerThreshold) {
        document.getElementById("newBtn").style.display = "block";
    }
    else if (correctCount >= superPowerThreshold) {
        document.getElementById("superBtn").style.display = "block";
    }
    else {
        document.getElementById("newBtn").style.display = "none";
        document.getElementById("superBtn").style.display = "none";
    }
}
function incorrectPressed() {
    incorrectCount++;
    correctCount = correctCount - incorrectCount;
    if (correctCount < powerThreshold || correctCount < superPowerThreshold) {
        document.getElementById("newBtn").style.display = "none";
        document.getElementById("superBtn").style.display = "none";
    }
    document.getElementById("displayCount").innerHTML = correctCount;
}
function powerUp() {
    correctCount -= powerThreshold;
    if (correctCount < powerThreshold) {
        document.getElementById("newBtn").style.display = "none";
        document.getElementById("displayCount").innerHTML = correctCount;
    }
    
    powerThreshold += powerThreshold;
    powerMultiplier = powerMultiplier * 2;
    document.getElementById("powerCount").innerHTML = powerMultiplier;
    document.getElementById("powerThresh").innerHTML = powerThreshold;
}
function superpowerUp() {
    correctCount -= superPowerThreshold;
    if (correctCount < powerThreshold) {
        document.getElementById("superBtn").style.display = "none";
        document.getElementById("displayCount").innerHTML = correctCount;
    }
    superPowerThreshold = superPowerThreshold*2;
    superMultiplier += 1 + superMultiplier;
    superMultiTime = superMultiTime/1.5;
    document.getElementById("superpwrCount").innerHTML = superMultiplier;
    document.getElementById("superThresh").innerHTML = superPowerThreshold;
    document.getElementById("superTime").innerHTML = superMultiTime;
    superpowerUsed();
}