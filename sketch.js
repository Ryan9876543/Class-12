var box
var marks = [30,35,40,38,31,36,45,47,52,71,86,100]
var sum = 0

function findAverage () {
  var sum = marks[0] + marks[1] + marks[2] + marks[3] + marks [4] + marks [5]
  var avg = sum/marks.length
  console.log(avg)
}

//findAverage2();

function findAverage2 () {
  for (var i = 0; i < marks.length; i = i+1) {
    console.log (marks [i])
    sum = sum + marks[i]
  }
  console.log(sum)
  var avg = sum/marks.length
  console.log (avg)
}

function findPassingMarks () {
  for (var i = 0; i < marks.length; i++) {
    if (marks[i] >= 45) {
      console.log (marks[i])
    }
  }
}

findPassingMarks();


function setup() {
  createCanvas(400,400);
  box = createSprite (200,200,35,45);
  box.shapeColor = "red"
}

function draw() {
drawSprites();
}

 


