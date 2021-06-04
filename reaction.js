//save time when connected

var start,
  timer,
  toClearTimer,
  newClass,
  shape,
  toClearTimer,
  whichClass,
  randWidthLength,
  randColor;

shape = ["circle", "square"];

var toBegin = function () {
  start = Date.now();
  console.log(start);

  // find elapsed time
  timer = setInterval(() => {
    const timePassed = Date.now() - start;
    document.getElementById("timer").innerHTML = timePassed / 1000;
  }, 100);
};

var randomShape = function () {
  // arrays for random choices
  const widthLength = [100, 200, 300, 400];
  const topSpot = [40, 50, 30, 20];
  const color = ["purple", "orange", "yellow", "green", "blue"];

    //random id 
  whichClass = shape[Math.floor(Math.random() * shape.length)];
  newClass = whichClass.toString();

  console.log("old " + newClass);
  console.log(typeof newClass);


//random styling
  randWidthLength = widthLength[Math.floor(Math.random() * widthLength.length)];
  randColor = color[Math.floor(Math.random() * color.length)];

  document.getElementById(newClass).style.width = randWidthLength;
  document.getElementById(newClass).style.length = randWidthLength;
  document.getElementById(newClass).style.backgroundColor = randColor;
  document.getElementById(newClass).style.display = "inherit";

  console.log(randWidthLength);
  console.log(randColor)


};

toClearTimer = function (timer) {
  clearInterval(timer);
};

document.getElementById("testbtn").addEventListener('click', function(){
  toBegin();
  randomShape();

})


document.getElementById(newClass).addEventListener("click", function () {
  toClearTimer(timer);
  console.log(timer);
  //reset timer



  document.getElementById(newClass).style.display = "none";

  var timeDelay = setTimeout(function () {
    whichClass = " ";
    newClass = " ";
    toBegin();

    //     whichClass = shape[Math.floor(Math.random() * shape.length)];
    // newClass = whichClass.toString();
    console.log("new " + newClass + " should be blank");
    randomShape();
  }, 1000);
});
