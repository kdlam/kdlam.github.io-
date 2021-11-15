
function setup(){
  createCanvas(windowWidth,windowHeight)
  angleMode(DEGREES)
  slider = createSlider(2,20,0,2).position(50,500)
  caption = createP('Level of complexity').position(50,540)
}

function draw(){
  background(200,40,110,80)
  translate(width/2, height/2)
  noFill()
  stroke(0)

slider.addClass("slider");
  for (var n = 0; n<slider.value(); n++) {
    beginShape()
    for (var i=0; i <360; i+=10) {
      var rad = map(sin(i*5), -1, 1, 100, 300)
      var x = rad * cos(i)
      var y = rad * sin(i)
      vertex(x,y)
    }

    endShape(CLOSE)
    rotate(frameCount/10)
  }
}
