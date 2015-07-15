var canvas = document.getElementById("canvas");
var addButton = document.getElementById('addButton');
var randColor = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + Math.random().toFixed(2) + ')';
var randSize = Math.floor(Math.random() * 300);

// function Shape(x, y, size, color) {
//   this.x = event.x;
//   this.y = event.y;
//   this.size = Math.floor(Math.random() * 300);
//   this.color = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + Math.random().toFixed(2) + ')';
//   // this.shape = shape;?????
// };
//
// function Square() {
//   Shape.call(this, x, y, size, color);
// }
//
// function Circle() {
//   Shape.call(this, x, y, size, color);
//   this.startAngle = startAngle;
//   this.endAngle = endAngle;
//   this.anticlockwise = anticlockwise;
// }

// position x, y, color, draw, square or circle

var selectShape = document.getElementsByTagName('select')[0];
selectShape.addEventListener('change', function() {
  canvas.addEventListener('click', function() {
    if(canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = randColor;
      var x = event.x;
      var y = event.y;
    };

    if(selectShape.value === 'square') {
      ctx.fillRect(x, y, randSize, randSize);
    } else {
      var circle = new Path2D;
      // arc(x, y, radius, startAngle, endAngle, anticlockwise)
      circle.arc(x, y, randSize, 0, 2 * Math.PI);
      ctx.fill(circle);
    };
  });
});








//
