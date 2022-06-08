var face_hour;

function setup() {
  createCanvas(800, 800);

  face_hour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
}

function draw() {
  background(220);

  //clock face - centre of rotation in middle of canvas
  translate(width / 2, height / 2);

  strokeWeight(1);

  fill(65, 105, 225);
  stroke(0);
  ellipse(0, 0, 640, 640);
  ellipse(0, 0, 600, 600);

  ellipse(0, 0, 40, 40);
  ellipse(0, 0, 500, 500);
  ellipse(0, 0, 490, 490);

  rotate((2 * PI) / 12);

  fill(255);
  textSize(30);
  for (var i = 0; i < 13; i++) {
    text(face_hour[i], 0, -260);
    rotate((2 * PI) / 12);
  }

  rotate(((2 * PI) / 12) * 10);

  //minute hand
  fill(0);
  rotate(((2 * PI) / 60) * minute());
  strokeWeight(6);
  stroke(0);
  line(0, 0, 0, 0 - 240);
  beginShape();
  vertex(-5, -220);
  vertex(0, -240);
  vertex(5, -220);
  endShape();

  // Balance the minute rotation from above
  rotate(((2 * -PI) / 60) * minute());

  //hour hand
  stroke(0, 0, 0);
  strokeWeight(6);
  rotate(((2 * PI) / 12) * hour());
  line(0, 0, 0, 0 - 160);
  beginShape();
  vertex(-5, -140);
  vertex(0, -160);
  vertex(5, -140);
  endShape();

  //second hand

  fill(255, 0, 0);
  stroke(255, 0, 0);
  //noFill();
  ellipse(0, 0, 20, 20);
  strokeWeight(2);
  rotate(((2 * PI) / 60) * second());
  line(0, 0, 0, 0 - 240);
  beginShape();
  vertex(-5, -220);
  vertex(0, -240);
  vertex(5, -220);
  endShape();
}
