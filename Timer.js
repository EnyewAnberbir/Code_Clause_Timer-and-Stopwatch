// Timer variables
let timerInterval;
let timerSeconds = 0;
let timerDuration = 10;

// Stopwatch variables
let stopwatchInterval;
let stopwatchSeconds = 0;

// Timer functions
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timerSeconds <= timerDuration) {
      timerSeconds++;
      displayTime("timer", timerDuration - timerSeconds);
    } else {
      stopTimer();
      alert("Timer completed!"); // Display a message when the timer reaches zero
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerSeconds = 0;
  displayTime("timer", timerDuration);
}

function updateTimerDuration() {
  const newDuration = window.prompt("Enter new timer duration (in seconds):");

  if (newDuration !== null && newDuration !== "") {
    const parsedDuration = parseInt(newDuration);

    if (!isNaN(parsedDuration) && parsedDuration > 0) {
      timerDuration = parsedDuration;
      resetTimer();
      alert("Timer duration updated successfully!");
    } else {
      alert("Please enter a valid positive number for the timer duration.");
    }
  }
}

// Stopwatch functions
function startStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(() => {
    stopwatchSeconds++;
    displayTime("stopwatch", stopwatchSeconds);
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchSeconds = 0;
  displayTime("stopwatch", stopwatchSeconds);
}

// Helper function to display time in HH:MM:SS format
function displayTime(elementId, seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const timeString = `${padZero(hours)}:${padZero(minutes)}:${padZero(remainingSeconds)}`;
  document.getElementById(elementId).textContent = timeString;
}

// Helper function to add leading zero if value is less than 10
function padZero(value) {
  return value < 10 ? `0${value}` : value;
}

// Event listeners for timer buttons
document.getElementById("startTimer").addEventListener("click", startTimer);
document.getElementById("stopTimer").addEventListener("click", stopTimer);
document.getElementById("resetTimer").addEventListener("click", resetTimer);

// Event listeners for stopwatch buttons
document.getElementById("startStopwatch").addEventListener("click", startStopwatch);
document.getElementById("stopStopwatch").addEventListener("click", stopStopwatch);
document.getElementById("resetStopwatch").addEventListener("click", resetStopwatch);

// Event listener for the updateTimer button
document.getElementById("updateTimer").addEventListener("click", updateTimerDuration);

// Event listener for the timer and stopwatch buttons
const timerButton = document.getElementById("timerButton");
const stopwatchButton = document.getElementById("stopwatchButton");
const timerSection = document.getElementById("timerSection");
const stopwatchSection = document.getElementById("stopwatchSection");

timerButton.addEventListener("click", showTimer);
stopwatchButton.addEventListener("click", showStopwatch);

function showTimer() {
  timerButton.classList.add("active");
  stopwatchButton.classList.remove("active");
  timerSection.style.display = "block";
  stopwatchSection.style.display = "none";
}

function showStopwatch() {
  stopwatchButton.classList.add("active");
  timerButton.classList.remove("active");
  timerSection.style.display = "none";
  stopwatchSection.style.display = "block";
}

// Initial setup
showTimer();
displayTime("timer", timerDuration);
displayTime("stopwatch", stopwatchSeconds);
