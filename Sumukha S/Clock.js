function updateClock() {
    var currentTime = new Date();
  
  
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();
  
    var hourHand = document.querySelector('.hour-hand');
    var minuteHand = document.querySelector('.minute-hand');
    var secondHand = document.querySelector('.second-hand');
  
    var hourRotation = (hour * 30) + (minute / 2);
    var minuteRotation = (minute * 6) + (second / 10);
    var secondRotation = second * 6;
  
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  
    setTimeout(updateClock, 1000);
  
  
  }
  
  updateClock();
  