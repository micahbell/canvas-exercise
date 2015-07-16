var canvas = document.getElementById("canvas");
var addButton = document.getElementById('addButton');

// Shape ==========
function Shape(x, y, width, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.color = color;
};

// Square ==========
function Square(x, y, width, color) {
  Shape.call(this, x, y, width, color);
};

Square.prototype.draw = function() {
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.width);
};

//Circle ==========
function Circle(x, y, width, color) {
  Shape.call(this, x, y, width, color);
  this.startAngle = 0;
  this.endAngle = 2 * Math.PI;
};

Circle.prototype.draw = function() {
  var ctx = canvas.getContext('2d');
  var circle = new Path2D;
  circle.arc(this.x, this.y, this.width, this.startAngle, this.endAngle, this.color);
  ctx.fillStyle = this.color;
  ctx.fill(circle);
};


canvas.addEventListener('click', function() {
  var selectedShape = document.getElementsByTagName('select')[0];
  var x = event.x;
  var y = event.y;
  var selectedColor = document.getElementsByName('color_picker')[0].value;
  if(selectedShape.value === 'square') {
    var newSquare = new Square(x, y, 40, selectedColor);
    newSquare.draw()
  } else {
    var newCircle = new Circle(x, y, 25, selectedColor);
    newCircle.draw();
  };
});

// Fill Canvas ===========
var fillButton = document.getElementById('fill-button');
fillButton.addEventListener('click', function() {
  for (var i = 0; i < 30; i++) {
    var randomColor = 'rgba(' +
      (Math.floor(Math.random() * 256)) + ',' +
      (Math.floor(Math.random() * 256)) + ',' +
      (Math.floor(Math.random() * 256)) + ',' +
      Math.random().toFixed(2) + ')';
    var randomSize = Math.floor(Math.random() * 350);
    var randomX = Math.floor(Math.random() * canvas.width);
    var randomY = Math.floor(Math.random() * canvas.height);
    var randomShape = Math.floor(Math.random() * 2);
    if(randomShape === 1) {
        var newSquare = new Square(randomX, randomY, randomSize, randomColor);
        newSquare.draw()
      } else {
        var newCircle = new Circle(randomX, randomY, randomSize, randomColor);
        newCircle.draw();
    };
  };
});








//
