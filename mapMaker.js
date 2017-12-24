var ssM, mM;
var ts, bm;
var c = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ssM = new SpriteSheetManager("tileset.png", 64);
  bm = new ButtonManager();
  ts = new TileSelector(ssM, width - 64, 0, 64, height);
  mM = new MapManager(0, 0, width - ssM.spriteSize * 2, height, 16, 16, ssM);
}

function draw() {
  background(c);
  
  ts.render();
  bm.render();
  mM.render();
}

function keyPressed(){
  
}

function mouseClicked(){
  ts.mouseClicked();
  bm.mouseClicked();
  mM.mouseClicked();
}

function mouseDragged(){
  mM.mouseDragged();
}

function mouseWheel(){
  ts.mouseWheel();
}

function mouseReleased(){
  mM.mouseReleased();
}