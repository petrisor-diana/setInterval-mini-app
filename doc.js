
/** Ex : write a small counter app. The app will have a 
 * button ("Start"/"Stop") and a text which by default is "0";
 * 
 * When clicking "Start"  the text will start to increase by
 * 1 every second. Also the text on the Button will change to
 * "STOP". 
 * 
 * When clicking the button again, the text will stop
 * increasing and the text will change to "Start";
 * 
 * If I click it again, the process repeats itself from the number
 * it is right now.
  */


var myStart = document.getElementById('startBtn');
var myTimelapse = document.getElementById('showtimelapse');
var myReset = document.getElementById('resetBtn');
var intervalId;

myStart.addEventListener('click', change);
myReset.addEventListener('click', reset);

function change() {
    if (myStart.innerHTML == 'Start') {
        myStart.innerHTML = 'Stop';
        intervalId = setInterval(function () {
            myTimelapse.innerHTML++;
        }, 1000);
    } else {
        myStart.innerHTML = 'Start';
        clearInterval(intervalId);
    }
}

function reset(){
      myTimelapse.innerHTML = 0;
      myStart.innerText = 'Start';
      clearInterval(intervalId);
}
