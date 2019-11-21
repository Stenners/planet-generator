import seedrandom from 'seedrandom';
import namegen from './namegen';
import { colours } from './theme'
import Rune from 'rune.js';

const seedField = document.getElementById("seed_field");
const randomButton = document.getElementById("random_btn");

const seed = seedrandom('spaaaace')();
const planetName = namegen(seed)[0];

console.log(`name = ${planetName}`);

const planetType = Math.round(seed * 10);
console.log(`type = ${planetType}`);

var r = new Rune({
  container: "#planet",
  width: 1200,
  height: 800,
  frameRate: 5
});

var circleSize = 150;
var numPoints = 40;
var angle = 360 / numPoints;

// first make a polygon by using sin and cos
var poly = r.polygon(200, 200)
  .fill('green')
  .stroke(false);

for (var i = 0; i < numPoints; i++) {
  var x = Math.cos(Rune.radians(angle * i)) * circleSize;
  var y = Math.sin(Rune.radians(angle * i)) * circleSize;
  poly.lineTo(x, y);
}

for (var i = 0; i < poly.state.vectors.length; i++) {
  poly.state.vectors[i].x += Rune.random(-20, 20);
  poly.state.vectors[i].y += Rune.random(-20, 20);
}
poly.scale(0.4, 2);


// r.on('update', function(stage) {
//   // poly = poly.copy();
//   for(var i = 0; i < poly.state.vectors.length; i++){
//     poly.state.vectors[i].x += Rune.random(-5,5);
//     poly.state.vectors[i].y += Rune.random(-5,5);
//   }
// });

// r.on('mousemove', function(mouse) {
//   poly.move(mouse.x, mouse.y);
// });

r.play();