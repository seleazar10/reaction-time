//save time when connected

const start = Date.now();
console.log(start);

// find elapsed time
var interval = setInterval(function () {
  const timePassed = Date.now() - start;
  document.getElementById("timer").innerHTML = timePassed / 1000;
}, 100);
//subtract from current time

const widthLength = [100, 200, 300, 400]
const topSpot = [40, 50, 30, 20]
const shape = ["circle", "square"]

document.getElementById('testbtn').addEventListener('click', function(){
    
    var whichClass = shape[Math.floor(Math.random() * shape.length)]
    console.log(whichClass.toString())
    
    document.getElementsByClassName("" + whichClass.toString()+ "").style.display = "none"
})