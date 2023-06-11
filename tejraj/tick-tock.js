// JavaScript code to update the clock hands based on the current time
function updateClock() {
    const now = new Date();

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourRotation = (hours * 30) + (minutes * 0.5) +90; // Each hour represents 30 degrees, and each minute represents 0.5 degrees
    const minuteRotation = (minutes * 6) + (seconds * 0.1) +90; // Each minute represents 6 degrees, and each second represents 0.1 degrees
    const secondRotation = seconds * 6 +90; // Each second represents 6 degrees

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  }

  // Update the clock every second
  setInterval(updateClock, 1000);