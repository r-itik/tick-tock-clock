function clock() {
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('min-hand');
    const secondHand = document.getElementById('second-hand');

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    var hoursAngle = (hours * 30) + (minutes / 2) + 90;
    var minutesAngle = (minutes * 6) + 90;
    var secondsAngle = (seconds * 6) + 90;

    hourHand.style.transform = `rotate(${hoursAngle}deg)`;
    minuteHand.style.transform = `rotate(${minutesAngle}deg)`;
    secondHand.style.transform = `rotate(${secondsAngle}deg)`;
} 

clock();
setInterval(clock, 1000);